package edu.brown.cs32.main.buildCourse;

import com.squareup.moshi.JsonAdapter;
import com.squareup.moshi.Moshi;
import com.squareup.moshi.Types;

import edu.brown.cs32.main.database.Database;
import edu.brown.cs32.main.database.RecipeDB;
import edu.brown.cs32.main.database.RegionDB;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Type;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import edu.brown.cs32.main.buildCourse.MoshiObjects.*;
import java.util.Map;
import java.util.Objects;

/*
 * Class for the ChefBear backend functionality, which focuses on preprocessing
 * the data from the MealDB API and then parsing such data into our respective 
 * objects to fill up our database.
 */
public class ChefBear{
  private HashMap<String, List<String>> regionToCountry = new HashMap<>();
  private HashMap<String, List<ParsedRecipe>> regionToRecipeList = new HashMap<>();
  private List<Region> RegionList = new ArrayList<>();
  private Database db;
  private RegionDB regionDB;
  private RecipeDB recipeDB;

  public ChefBear() {
    this.db = new Database();
    this.regionDB = new RegionDB(this.db.db);
    this.recipeDB = new RecipeDB(this.db.db);
  }

  /**
   * Constructor for chefBear
   */
  public static void main(String[] args){
    ChefBear chefBear = new ChefBear();
    chefBear.populateMap();
    chefBear.setup();
  }

  /**
   * Setting up the regions for our course
   * Calling API x2
   * Populating the database
   */
  public void setup(){
    // ***************** FIRST LOOP ********************
    //  LOOPING THROUGH EACH REGION IN MAP
    for (String region: this.regionToCountry.keySet()){
      // ***************** SECOND LOOP ********************
      // LOOPING THROUGH EACH COUNTRY IN A REGION
      for (String country: this.regionToCountry.get(region)){
        // API CALL ONE: www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
        try {
          // Try to create a valid connection
          String countryAPICall = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + country; // pull country recipes
          URL countryURL = new URL(countryAPICall);
          HttpURLConnection countryConnection = (HttpURLConnection) countryURL.openConnection();
          countryConnection.connect();

          if (countryConnection.getResponseCode() == 200) {
            // If valid connection, read and deserialize response
            try {
              BufferedReader lineTraverse = new BufferedReader(new InputStreamReader(countryConnection.getInputStream()));
              StringBuilder stringBuilder = new StringBuilder();
              String line = lineTraverse.readLine();
              while (line!=null){
                stringBuilder.append(line);
                line = lineTraverse.readLine();
              }
              // MOSHI
              Moshi moshi = new Moshi.Builder().build();
              Type type = Types.newParameterizedType(Meal.class, List.class, SubMeal.class); // output of json
              JsonAdapter<Meal> adapter = moshi.adapter(type);
              Meal currMeal = adapter.fromJson(stringBuilder.toString());
              // ***************** THIRD LOOP ********************
              // LOOPING THROUGH EACH RECIPE PER COUNTRY
              if (currMeal != null && currMeal.meals != null && !currMeal.meals.isEmpty()) {
                for (SubMeal submeal : currMeal.meals) {
                  // API CALL 2
                  String recipeAPICall =
                      "https://www.themealdb.com/api/json/v1/1/search.php?s=" + submeal.strMeal;
                  URL mealURL = new URL(recipeAPICall);
                  HttpURLConnection recipeConnection = (HttpURLConnection) mealURL.openConnection();
                  recipeConnection.connect();
                  if (recipeConnection.getResponseCode() == 200) {
                    try {
                      BufferedReader lineTraverseTwo = new BufferedReader(
                          new InputStreamReader(recipeConnection.getInputStream()));
                      String lineTwo = lineTraverseTwo.readLine();
                      StringBuilder stringBuilderTwo = new StringBuilder();
                      while (lineTwo != null) {
                        stringBuilderTwo.append(lineTwo);
                        lineTwo = lineTraverseTwo.readLine();
                      }
                      lineTraverseTwo.close();
                      Moshi moshiTwo = new Moshi.Builder().build();
                      JsonAdapter<RecipeWrapper> recipeAdapter = moshiTwo.adapter(RecipeWrapper.class);
                      RecipeWrapper currRecipe = recipeAdapter.fromJson(stringBuilderTwo.toString());

                      Recipe recipeObject = currRecipe.meals.get(0);
                      ParsedRecipe parsedRecipe = new ParsedRecipe(recipeObject);

                      //Adding Recipe to the regionToRecipeList
                      processRecipe(region, parsedRecipe); 
                    } catch (IOException e ) {
                      System.err.println(e);
                    } catch (NoSuchFieldException e) {
                      throw new RuntimeException(e);
                    } catch (IllegalAccessException e) {
                      throw new RuntimeException(e);
                    } finally {
                      recipeConnection.disconnect();
                    }
                  } else {
                    // NO SUCH RECIPE FOUND IN API
                  }
                }
              }
            } catch (IOException e) {
              e.printStackTrace();
            } finally {
              countryConnection.disconnect();
            }
          } else{
            // NO SUCH COUNTRY FOUND IN API
          }
        } catch (IOException e) {
          e.printStackTrace();
        }
      }
      // At the end of each region, create Region object and add it to the RegionList
      Region regionObject = new Region(region, regionToRecipeList.get(region));
      RegionList.add(regionObject);
      }

    // After all of the regions are done iterating, add Regions to the database
     for (Region r : RegionList){
       Map<String, List<String>> levels = r.levelSort();
       this.regionDB.add(r.getRegion(), levels);
       for (ParsedRecipe recipe : r.getRecipeList()) {
         this.recipeDB.add(recipe.name, recipe.difficultyScore, recipe.instructions, recipe.ingredients, recipe.image);
       }
       }


  }

  /**
   * Setting up the region to country list
   */
  private void populateMap(){
    List<String> asianCountries = List.of("Japanese", "Chinese", "Indian", "Vietnamese", "Thai", "Filipino", "Malaysian");
    this.regionToCountry.put("Asian", asianCountries);

    List<String> europeanCountries = List.of("French", "Italian", "British", "Croatian", "Dutch", "Irish", "Spanish", "Polish", "Portugese", "Turkish", "Greek", "Russian");
    this.regionToCountry.put("European", europeanCountries);

    List<String> africanCaribbeanCountries = List.of("Jamaican", "Egyptian", "Moroccan", "Kenyan", "Tunisian");
    this.regionToCountry.put("AfriCarib", africanCaribbeanCountries);

    List<String> northAmericanCountries = List.of("Canadian", "American", "Mexican");
    this.regionToCountry.put("North American", northAmericanCountries);
  }

  public void callPopulateMap(){
    this.populateMap();
  }

  /**
   * Defensive Programming
   */
  public HashMap<String, List<String>> getRegionToCountry(){
    return (HashMap<String, List<String>>) this.regionToCountry.clone();
  }

  /**
   * Function that processes the recipe object and adds it to the regionToRecipeList hashmap
   * @param region
   * @param recipe
   */
  private void processRecipe(String region, ParsedRecipe recipe){
    if (recipe != null){
      if (!regionToRecipeList.containsKey(region)){
          regionToRecipeList.put(region, new ArrayList<ParsedRecipe>());
      }
      regionToRecipeList.get(region).add(recipe);
    }
  }
  /**
   *
   * a Function exclusively used for testing
   */
  public HashMap<String, List<ParsedRecipe>> getRegionToRecipeList(){
    return (HashMap<String, List<ParsedRecipe>>) this.regionToRecipeList.clone();
  }

  /**
   *
   * a function exclusively used for testing
   */
  public HashMap<String, List<ParsedRecipe>> testProcessRecipeHelper(String region, ParsedRecipe recipe){
    this.processRecipe(region, recipe);
    return (HashMap<String, List<ParsedRecipe>>) this.regionToRecipeList.clone();
  }

  private void printSampleData() {
    for (String region: regionToRecipeList.keySet()){
      System.out.print("Region: " + region);
      for (ParsedRecipe recipe: regionToRecipeList.get(region)){
        System.out.println("Recipe: " + recipe);
      }
    }
  }

}



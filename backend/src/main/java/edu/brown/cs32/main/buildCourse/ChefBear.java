package edu.brown.cs32.main.buildCourse;

import com.squareup.moshi.JsonAdapter;
import com.squareup.moshi.Moshi;
import com.squareup.moshi.Types;

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


public class ChefBear{
  private HashMap<String, List<String>> regionToCountry = new HashMap<>();
  private HashMap<String, List<ParsedRecipe>> regionToRecipeList = new HashMap<>();
  private List<Region> RegionList = new ArrayList<>();

  /**
   * Constructor for chefBear
   */
  public static void main(String[] args){
    ChefBear chefBear = new ChefBear();
    chefBear.populateMap();
    System.out.println(chefBear.regionToCountry);
    chefBear.setup();
    chefBear.printSampleData();
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
              // String jsonString = new Buffer().readFrom(countryConnection.getInputStream());
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
              System.out.println("Meal API Response" + stringBuilder.toString());
              Meal currMeal = adapter.fromJson(stringBuilder.toString());
              System.out.println("Printing the Meal Class" + currMeal.toString());
              // ***************** THIRD LOOP ********************
              // LOOPING THROUGH EACH RECIPE PER COUNTRY
              if (currMeal != null && currMeal.meals != null && !currMeal.meals.isEmpty()) {
                for (SubMeal submeal : currMeal.meals) { // TODO: might have to change this bc currMeal.meals may not format into submeal properly
//                  System.out.println("ParsedSubmeal: " + submeal.toString());
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
//                    // Type typeTwo = Recipe.class; // output of json
                      JsonAdapter<RecipeWrapper> recipeAdapter = moshiTwo.adapter(RecipeWrapper.class);
                      // System.out.println("JSON Version of RecipeWrapper: " + stringBuilderTwo.toString());
                      RecipeWrapper currRecipe = recipeAdapter.fromJson(stringBuilderTwo.toString());

                      Recipe recipeObject = currRecipe.meals.get(0);
//                      System.out.println("Recipe Object " + recipeObject.toString());

                      ParsedRecipe parsedRecipe = new ParsedRecipe(recipeObject);
                      System.out.println("Parsed Object " + parsedRecipe.toString());

//                    // System.out.println("Recipe Object" + currRecipe.toString());
                      //Adding Recipe to the regionToRecipeList
//                      processRecipe(region, currRecipe); // TODO: UNCOMMENT THIS
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
      Region regionObject = new Region(regionToRecipeList.get(region));
      RegionList.add(regionObject);
      }
    // After all of the regions are done iterating, add Regions to the database
    // for (Region r : RegionList){
    // TODO: CODE THAT ADDS REGION TO DATABASE IN STRING FORMAT (JER)
    // }
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
    this.regionToCountry.put("African/Caribbean", africanCaribbeanCountries);

    List<String> northAmericanCountries = List.of("Canadian", "American", "Mexican");
    this.regionToCountry.put("North American", northAmericanCountries);
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

  private void printSampleData() {
    for (String region: regionToRecipeList.keySet()){
      System.out.print("Region: " + region);
      for (ParsedRecipe recipe: regionToRecipeList.get(region)){
        System.out.println("Recipe: " + recipe);
      }
    }
  }

}



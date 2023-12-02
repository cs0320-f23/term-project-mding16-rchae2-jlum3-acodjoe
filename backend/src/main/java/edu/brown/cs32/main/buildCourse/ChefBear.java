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
import java.nio.Buffer;
import java.util.HashMap;
import java.util.List;
import edu.brown.cs32.main.buildCourse.MoshiObjects.*;


public class ChefBear{
  private HashMap<String, List<String>> regionToCountry = new HashMap<>();
  private HashMap<String, List<Recipe>> regionToRecipeList = new HashMap<>();
  private List<Region> RegionList = List.of();

  /**
   * Constructor for chefBear
   */
  public ChefBear(){
    this.setup();
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
              Type type = Types.newParameterizedType(Meal.class); // output of json
              JsonAdapter<Meal> adapter = moshi.adapter(type);
              Meal currMeal = adapter.fromJson(stringBuilder.toString());
              countryConnection.disconnect();

              // ***************** THIRD LOOP ********************
              // LOOPING THROUGH EACH RECIPE PER COUNTRY
              assert currMeal != null;
              for (SubMeal submeal: currMeal.meals){ // TODO: might have to change this bc currMeal.meals may not format into submeal properly
                // API CALL 2
                String recipeAPICall = "www.themealdb.com/api/json/v1/1/search.php?s=" + submeal.strMeal;
                URL mealURL = new URL(recipeAPICall);
                HttpURLConnection recipeConnection = (HttpURLConnection) mealURL.openConnection();
                recipeConnection.connect();
                if (recipeConnection.getResponseCode() == 200){
                  try {
                    BufferedReader lineTraverseTwo = new BufferedReader(new InputStreamReader(countryConnection.getInputStream()));
                    String lineTwo = lineTraverseTwo.readLine();
                    StringBuilder stringBuilderTwo = new StringBuilder();
                    while (lineTwo != null) {
                      stringBuilderTwo.append(lineTwo);
                      lineTwo = lineTraverseTwo.readLine();
                    }
//                    System.out.println("done reading");
                    Moshi moshiTwo = new Moshi.Builder().build();
                    Type typeTwo = Types.newParameterizedType(Recipe.class); // output of json
                    JsonAdapter<Recipe> recipeAdapter = moshiTwo.adapter(typeTwo);
                    Recipe currRecipe = recipeAdapter.fromJson(stringBuilderTwo.toString());

                    // Adding Recipe to the regionToRecipeList
                    processRecipe(region,currRecipe);
                    recipeConnection.disconnect();

                  } catch (IOException e) {
                    System.err.println(e);
                  }
                }
                else {
                  // NO SUCH RECIPE FOUND IN API
                  
                }
              }
            } catch (IOException e) {
              e.printStackTrace();
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
  private void processRecipe(String region, Recipe recipe){
    if (recipe != null){
      if (!regionToRecipeList.containsKey(region)){
//        regionToRecipeList.put(region, new List<Recipe>());
      }
      regionToRecipeList.get(region).add(recipe);
    }
  }


}



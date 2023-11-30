package edu.brown.cs32.main.buildCourse;

import com.squareup.moshi.JsonAdapter;
import com.squareup.moshi.Moshi;
import com.squareup.moshi.Types;
import java.io.IOException;
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
  private List<String> RegionList = List.of();

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
    for (String region: this.regionToCountry.keySet()){

      // ***************** SECOND LOOP ********************
      for (String country: this.regionToCountry.get(region)){
        // API CALL ONE: www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

        try {
          // Try to create a valid connection
          String countryAPICall = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + country;
          URL countryURL = new URL(countryAPICall);
          HttpURLConnection countryConnection = (HttpURLConnection) countryURL.openConnection();
          countryConnection.connect();

          if (countryConnection.getResponseCode() == 200) {
            // If valid connection, deserialize response
            String jsonString = new Buffer().readFrom(countryConnection.getInputStream());
            // MOSHI
            Moshi moshi = new Moshi.Builder().build();
            Type type = Types.newParameterizedType(Meal.class, SubMeal.class, String.class, Integer.class);
            JsonAdapter<Meal> adapter = moshi.adapter(type);
            Meal currMeal = adapter.fromJson(jsonString);
            countryConnection.disconnect();

            // ***************** THIRD LOOP ********************
            assert currMeal != null;
            for (SubMeal submeal: currMeal.meals){
              // API CALL 2
//              String mealAPICall = "www.themealdb.com/api/json/v1/1/search.php?s=" + m.strMeal;
//              URL countryURL = new URL(countryAPICall);
//              HttpURLConnection countryConnection = (HttpURLConnection) countryURL.openConnection();
//              countryConnection.connect();
              // DESERIALIZE RECIPE RESPONSE --> INTERMEDIARY RECIPE OBJECT

            }

          }

        } catch (IOException e) {
          e.printStackTrace();}
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
    this.regionToCountry.put("African/Caribbean", africanCaribbeanCountries);

    List<String> northAmericanCountries = List.of("Canadian", "American", "Mexican");
    this.regionToCountry.put("North American", northAmericanCountries);
  }


}



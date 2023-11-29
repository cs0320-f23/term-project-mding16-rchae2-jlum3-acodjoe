
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ChefBear{
  private HashMap<String, String> regionToCountry = new HashMap<>();
  private HashMap<String, List<Recipe>> regionToRecipeList = new HashMap<>();
  private List<String> RegionList = List.of();

  /**
   * Constructor for chefBear
   */
  public chefBear(){
    this.setup();
  }

  /**
   * Setting up the regions for our course
   * Calling API x2
   * Populating the database
   */
  public setUp(){
    // ***************** FIRST LOOP ********************
    for region in regionToCountry.keys(){

      // ***************** SECOND LOOP ********************
      for country in regionToCountry.get(region){
        // API CALL ONE: www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

        try {
          // Try to create a valid connection
          String countryAPICall = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + country;
          URL countryURL = new URL(countryAPICall);
          HttpURLConnection countryConnection = (HttpURLConnection) countryURL.openConnection();
          countryConnection.connect();

          if (countryConnection.getResponseCode() == 200) {
            // If valid connection, deserialize response
            String jsonString = new Buffer().readFrom(stateCodesConnection.getInputStream());
            // MOSHI
            Moshi moshi = new Moshi.Builder().build();
            Type type = Types.newParameterizedType(Meal.class, SubMeal.class, String.class, Integer.class);
            JsonAdapter<Meal> adapter = moshi.adapter(type);
            Meal currMeal = adapter.fromJson(jsonString);
            countryConnection.disconnect();

            // ***************** THIRD LOOP ********************
            for m in Meal.meals{
              // API CALL 2
              String mealAPICall = "www.themealdb.com/api/json/v1/1/search.php?s=" + m.strMeal;
              URL countryURL = new URL(countryAPICall);
              HttpURLConnection countryConnection = (HttpURLConnection) countryURL.openConnection();
              countryConnection.connect();
              // DESERIALIZE RECIPE RESPONSE --> INTERMEDIARY RECIPE OBJECT
            
            }

          }
          else {
            throw new DatasourceException("unexpected: API connection not success status "
                +stateCodesConnection.getResponseMessage());
          }
        } catch (IOException | DatasourceException e) {
          e.printStackTrace();}
      }

      }
    }
  }

  /**
   * Setting up the region to country list
   */
  public populateMap(){
    List<String> asianCountries = List.of("Japanese", "Chinese", "Indian", "Vietnamese", "Thai", "Filipino", "Malaysian");
    regionToCountry.put("Asian", asianCountries);

    List<String> europeanCountries = List.of("French", "Italian", "British", "Croatian", "Dutch", "Irish", "Spanish", "Polish", "Portugese", "Turkish", "Greek", "Russian");
    regionToCountry.put("European", europeanCountries);

    List<String> africanCaribbeanCountries = List.of("Jamaican", "Egyptian", "Moroccan", "Kenyan", "Tunisian");
    cuisineMap.put("African/Caribbean", africanCaribbeanCountries);

    List<String> northAmericanCountries = List.of("Canadian", "American", "Mexican");
    cuisineMap.put("North American", northAmericanCountries);
  }


}




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
    for region in regionToCountry.keys(){
      for country in regionToCountry.get(region){
        // API CALL ONE: www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

        try {
          // Try to create a valid connection
          String countryAPICall = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + country;
          URL countryURL = new URL(countryAPICall);
          HttpURLConnection countryConnection = (HttpURLConnection) countryURL.openConnection();
          countryConnection.connect();

          if (stateCodesConnection.getResponseCode() == 200) {
            // If valid connection, deserialize response
            Moshi moshi = new Moshi.Builder().build();
            // MOSHI
            countryConnection.disconnect();
            this.stateCodes = new HashMap<>();
            for (int i=1; i<jsonData.size(); i++){
              this.stateCodes.put(jsonData.get(i).get(0), jsonData.get(i).get(1));
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



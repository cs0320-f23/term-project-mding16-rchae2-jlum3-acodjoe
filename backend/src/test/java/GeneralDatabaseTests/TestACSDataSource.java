package GeneralDatabaseTests;

import com.squareup.moshi.JsonAdapter;
import com.squareup.moshi.Moshi;
import edu.brown.cs32.main.datasource.ACSdatasource.ACSDataSource;
import edu.brown.cs32.main.datasource.csvIntegration.DatasourceException;
import edu.brown.cs32.main.exceptions.FactoryFailureException;
import edu.brown.cs32.main.exceptions.InvalidRequestArgumentException;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import okio.Buffer;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

/** unit test for data source */
public class TestACSDataSource {
  public TestACSDataSource(){}
  /**
   * This method to deserialize the headers
   *
   * @throws IOException
   */
  @Test
  public void deserializeHeaders() throws IOException {
    String censusAPIBaseURL = "https://api.census.gov/data/2010/dec/sf1?get=NAME&for=state:*";
    URL stateCodesURL = new URL(censusAPIBaseURL);
    HttpURLConnection stateCodesConnection = (HttpURLConnection) stateCodesURL.openConnection();
    stateCodesConnection.connect();

    if (stateCodesConnection.getResponseCode() == 200) {
      // If valid connection, deserialize response
      Moshi moshi = new Moshi.Builder().build();

      // HANDLING INPUT STREAM:
      JsonAdapter<List> adapter = moshi.adapter(List.class).nonNull();
      List<List<String>> jsonData = adapter.fromJson(new Buffer().readFrom(stateCodesConnection.getInputStream()));
      HashMap<String, String> stateCodes = new HashMap<>();
      stateCodesConnection.disconnect();
      for (int i=1; i<jsonData.size(); i++){
        stateCodes.put(jsonData.get(i).get(0), jsonData.get(i).get(1));
      }
    }
  }

  /**
   * This is to test get county code
   *
   * @throws IOException
   * @throws DatasourceException
   * @throws InvalidRequestArgumentException
   */
  @Test
  public void testCounty() throws DatasourceException, IOException, InvalidRequestArgumentException {
    ACSDataSource testACS = new ACSDataSource();
    String code = testACS.getCountyCode("06", "San Francisco County");
    assertEquals("075", code);
  }

  /**
   * This is to deserialize county code
   *
   * @throws IOException
   */
  @Test
  public void deserializeCounties() throws IOException {
    String stateCode = "06";
    String countyCodesQuery = "https://api.census.gov/data/2010/dec/sf1?get=NAME&for=county:*&in=state:"+stateCode;
    URL countyCodesURL = new URL(countyCodesQuery);
    HttpURLConnection countyConnection = (HttpURLConnection) countyCodesURL.openConnection();
    countyConnection.connect();

    if (countyConnection.getResponseCode() == 200) {
      // If valid connection, deserialize response
      Moshi moshi = new Moshi.Builder().build();

      JsonAdapter<List> adapter = moshi.adapter(List.class).nonNull();
      List<List<String>> jsonData = adapter.fromJson(new Buffer().readFrom(countyConnection.getInputStream()));
      countyConnection.disconnect();

      // Create hashmap of county codes
      //System.out.print(jsonData);
      String countyName = "Colusa County";
      HashMap<String, String> countyStateCodes = new HashMap<>();

      for (int i=1; i<jsonData.size(); i++){
        String county = jsonData.get(i).get(0).split(",")[0];
        String countyCode = jsonData.get(i).get(2);
        countyStateCodes.put(county, countyCode);
      }
      System.out.println(countyStateCodes);
    }
  }

  /**
   * This is to test search ACS
   */
  @Test
  public void testSearchACS()
      throws DatasourceException, IOException, InvalidRequestArgumentException, FactoryFailureException {
    ACSDataSource testACS = new ACSDataSource();
    Map<String, Object> result = testACS.searchACS("California", "San Francisco County");
    System.out.println(result);//test searchACS
  }

}
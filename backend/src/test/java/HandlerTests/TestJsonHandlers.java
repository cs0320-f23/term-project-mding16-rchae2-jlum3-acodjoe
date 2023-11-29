package HandlerTests;

import GeneralDatabaseTests.MockedDataSource;
import com.squareup.moshi.JsonAdapter;
import com.squareup.moshi.Moshi;
import com.squareup.moshi.Types;
import edu.brown.cs32.main.datasource.ACSdatasource.CensusData;
import edu.brown.cs32.main.datasource.csvIntegration.ColumnIdentifier;
import edu.brown.cs32.main.datasource.csvIntegration.DataSource;
import edu.brown.cs32.main.datasource.csvIntegration.GeneralDataSource;
import edu.brown.cs32.main.exceptions.FactoryFailureException;
import edu.brown.cs32.main.exceptions.InvalidColumnIdentifierException;
import edu.brown.cs32.main.exceptions.InvalidColumnIdentifierValueException;
import edu.brown.cs32.main.exceptions.InvalidRequestArgumentException;
import edu.brown.cs32.main.exceptions.MissingDataException;
import edu.brown.cs32.main.exceptions.NoHeaderException;
import edu.brown.cs32.main.handler.Broadband.BroadbandHandler;
import edu.brown.cs32.main.handler.Helpers.CreateResponse;
import edu.brown.cs32.main.handler.CSV.LoadCSVHandler;
import edu.brown.cs32.main.handler.CSV.SearchCSVHandler;
import edu.brown.cs32.main.handler.CSV.ViewCSVHandler;
import edu.brown.cs32.main.handler.Json.FilterJsonHandler;
import edu.brown.cs32.main.handler.Json.SearchJsonHandler;
import java.lang.reflect.Type;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import okio.Buffer;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import spark.Spark;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.logging.Level;
import java.util.logging.Logger;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

/** unit test for all handlers */
public class TestJsonHandlers {
  private CreateResponse createResponse;
  public TestJsonHandlers(){

  }
  /** Set up the connection with the Project before testing connections */
  @BeforeAll
  public static void setupOnce() {
    Spark.port(0);
    Logger.getLogger("").setLevel(Level.WARNING);
  }


  /**
   * Shared state for all tests. We need to be able to mutate it (adding recipes etc.) but never need to replace
   * the reference itself. We clear this state out after every test runs.
   */
  @BeforeEach
  public void setup() {
    //this.datasource.reset(); // sets dataLoaded to false
    // In fact, restart the entire Spark server for every test!
    this.createResponse = new CreateResponse();
    Spark.get("/filterjson", new FilterJsonHandler());
    Spark.get("/searchjson", new SearchJsonHandler());
    Spark.init();
    Spark.awaitInitialization(); // don't continue until the server is listening
  }
  /**
   * Gracefully stop Spark listening on both endpoints
   */
  @AfterEach
  public void teardown() {
    Spark.unmap("/filterjson");
    Spark.unmap("/searchjson");
    Spark.awaitStop(); // don't proceed until the server is stopped
  }


  /**
   * Attempts to connect to the Project2 through URL on local machine
   *
   * @param apiCall the endpoint you are targeting
   * @return a requester
   * @throws ExecutionException error thrown if does no execute properly
   */
  private HttpURLConnection tryRequest(String apiCall) throws IOException {
    URL requestURL = new URL("http://localhost:" + Spark.port() + "/" + apiCall);
    HttpURLConnection clientConnection = (HttpURLConnection) requestURL.openConnection();

    clientConnection.connect();
    return clientConnection;
  }

  /**
   * Writing a filter api call
   * @param minLat
   * @param maxLat
   * @param minLong
   * @param maxLong
   * @return
   */
  public String filterAPICall(String minLat, String maxLat, String minLong, String maxLong){
    return "filterjson?" + "minlat=" + minLat + "&" + "maxlat=" + maxLat + "&" + "minlong=" + minLong + "&" + "maxlong=" + maxLong;
  }

  /**
   * Test load the ri csv
   *
   * @throws IOException
   */
  @Test
  // Recall that the "throws IOException" doesn't signify anything but acknowledgement to the type checker
  public void testFilterAPI() throws IOException {
    String minlat = "-80.0";
    String maxlat = "80.0";
    String minlong = "-100.0";
    String maxlong = "100.0";
    HttpURLConnection clientConnection =
        tryRequest(filterAPICall(minlat, maxlat, minlong, maxlong));
    assertEquals(200, clientConnection.getResponseCode());
  }

  /**
   * Test filtering by 4 datapoints
   *
   * @throws IOException
   */
  @Test
  // Recall that the "throws IOException" doesn't signify anything but acknowledgement to the type checker
  public void testFilterAPI2() throws IOException {
    String minlat = "-85.0";
    String maxlat = "80.0";
    String minlong = "-170.0";
    String maxlong = "170.0";
    HttpURLConnection clientConnection =
        tryRequest(filterAPICall(minlat, maxlat, minlong, maxlong));
    assertEquals(200, clientConnection.getResponseCode());
  }

  /**
   * Test for missing param maxlong
   *
   * @throws IOException
   */
  @Test
  public void testMissingParams() throws IOException {
    // missing maxlong
    HttpURLConnection loadConnection = tryRequest("filterjson?minlat=-85.0&maxlat=80&minlong=-170.0");
    assertEquals(200, loadConnection.getResponseCode());
    Moshi moshi = new Moshi.Builder().build();
    FilterJsonHandler.ErrorResponse response
        = moshi.adapter(FilterJsonHandler.ErrorResponse.class).fromJson(new Buffer().readFrom(loadConnection.getInputStream()));
    assertEquals("error_bad_request_missing_field_for_maxlong", response.result());
    loadConnection.disconnect();
  }

  /**
   * Test for missing param minlong
   *
   * @throws IOException
   */
  @Test
  public void testInvalidValues() throws IOException {
    HttpURLConnection loadConnection = tryRequest("filterjson?minlat=-85.0&maxlat=80");
    assertEquals(200, loadConnection.getResponseCode());
    Moshi moshi = new Moshi.Builder().build();
    FilterJsonHandler.ErrorResponse response
        = moshi.adapter(FilterJsonHandler.ErrorResponse.class).fromJson(new Buffer().readFrom(loadConnection.getInputStream()));
    assertEquals("error_bad_request_missing_field_for_minlong", response.result());
    loadConnection.disconnect();
  }

  /**
   * Test for missing param minlong
   *
   * @throws IOException
   */
  @Test
  public void testMissingParams2() throws IOException {
    // missing minlong
    HttpURLConnection loadConnection = tryRequest("filterjson?minlat=-85.0&maxlat=80");
    assertEquals(200, loadConnection.getResponseCode());
    Moshi moshi = new Moshi.Builder().build();
    FilterJsonHandler.ErrorResponse response
        = moshi.adapter(FilterJsonHandler.ErrorResponse.class).fromJson(new Buffer().readFrom(loadConnection.getInputStream()));
    assertEquals("error_bad_request_missing_field_for_minlong", response.result());
    loadConnection.disconnect();
  }

  /**
   * Test for missing invalid params (out of bounds long/lat)
   *
   * @throws IOException
   */
  @Test
  public void testInvalidParams() throws IOException {
    // missing minlong
    String minlat = "-1000.0";
    String maxlat = "1000.0";
    String minlong = "-170.0";
    String maxlong = "170.0";
    HttpURLConnection loadConnection =
        tryRequest(filterAPICall(minlat, maxlat, minlong, maxlong));
    assertEquals(200, loadConnection.getResponseCode());
    Moshi moshi = new Moshi.Builder().build();
    FilterJsonHandler.ErrorResponse response
        = moshi.adapter(FilterJsonHandler.ErrorResponse.class).fromJson(new Buffer().readFrom(loadConnection.getInputStream()));
    assertEquals("error_bad_request: invalid long/lat", response.result());
    loadConnection.disconnect();
  }

  /**
   * Test for missing invalid params (not numerical inputs)
   *
   * @throws IOException
   */
  @Test
  public void testInvalidParams2() throws IOException {
    // missing minlong
    String minlat = "RANDOMVALUE";
    String maxlat = "1000.0";
    String minlong = "-170.0";
    String maxlong = "170.0";
    HttpURLConnection loadConnection =
        tryRequest(filterAPICall(minlat, maxlat, minlong, maxlong));
    assertEquals(200, loadConnection.getResponseCode());
    Moshi moshi = new Moshi.Builder().build();
    FilterJsonHandler.ErrorResponse response
        = moshi.adapter(FilterJsonHandler.ErrorResponse.class).fromJson(new Buffer().readFrom(loadConnection.getInputStream()));
    assertEquals("error_bad_request: invalid long/lat formatFor input string: \"RANDOMVALUE\"", response.result());
    loadConnection.disconnect();
  }

  /**
   * tests that multiple calls can be made to the api
   *
   * @throws IOException in case connection fails
   */
  @Test
  public void testMultipleAPICalls() throws IOException {
    String minlat = "-85.0";
    String maxlat = "80.0";
    String minlong = "-170.0";
    String maxlong = "170.0";
    HttpURLConnection clientConnection =
        tryRequest(filterAPICall(minlat, maxlat, minlong, maxlong));
    assertEquals(200, clientConnection.getResponseCode());

    // switch values
    maxlong = "160.0";
    HttpURLConnection clientConnection2 =
        tryRequest(filterAPICall(minlat, maxlat, minlong, maxlong));
    assertEquals(200, clientConnection2.getResponseCode());
  }

  /**
   * Helper to make search api call
   * @param keyword
   * @return
   */
  public String searchAPICall(String keyword){
    String searchapi = "/searchjson?" + "toSearch=" + keyword;
    return searchapi;
  }


  /**
   * search test
   *
   * @throws IOException in case connection fails
   */
  @Test
  public void testSearchAPI() throws IOException {
    String word = "Providence";
    HttpURLConnection clientConnection =
        tryRequest(searchAPICall(word));
    assertEquals(200, clientConnection.getResponseCode());

    String word1 = "area";
    HttpURLConnection clientConnection2 =
        tryRequest(searchAPICall(word1));
    assertEquals(200, clientConnection2.getResponseCode());
  }

  /**
   * search & filter work together
   *
   * @throws IOException in case connection fails
   */
  @Test
  public void combiningSearchFilter() throws IOException {
    String word = "Providence";
    HttpURLConnection clientConnection =
        tryRequest(searchAPICall(word));
    assertEquals(200, clientConnection.getResponseCode());

    String minlat = "-85.0";
    String maxlat = "80.0";
    String minlong = "-170.0";
    String maxlong = "170.0";
    HttpURLConnection clientConnection3 =
        tryRequest(filterAPICall(minlat, maxlat, minlong, maxlong));
    assertEquals(200, clientConnection3.getResponseCode());

    String word1 = "area";
    HttpURLConnection clientConnection2 =
        tryRequest(searchAPICall(word1));
    assertEquals(200, clientConnection2.getResponseCode());
  }

  /**
   * Test for missing param search
   *
   * @throws IOException
   */
  @Test
  public void testMissingParamSearch() throws IOException {
    // missing minlong
    HttpURLConnection loadConnection = tryRequest("/searchjson?");
    assertEquals(200, loadConnection.getResponseCode());
    Moshi moshi = new Moshi.Builder().build();
    FilterJsonHandler.ErrorResponse response
        = moshi.adapter(FilterJsonHandler.ErrorResponse.class).fromJson(new Buffer().readFrom(loadConnection.getInputStream()));
    assertEquals("error_bad_request_missing_field_for_toSearch", response.result());
    loadConnection.disconnect();
  }




}

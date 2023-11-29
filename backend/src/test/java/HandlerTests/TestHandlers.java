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
public class TestHandlers {
  private CreateResponse createResponse;
  public TestHandlers(){

  }
  /** Set up the connection with the Project before testing connections */
  @BeforeAll
  public static void setupOnce() {
    Spark.port(0);
    Logger.getLogger("").setLevel(Level.WARNING);
  }

  GeneralDataSource datasource;

  /**
   * Shared state for all tests. We need to be able to mutate it (adding recipes etc.) but never need to replace
   * the reference itself. We clear this state out after every test runs.
   */
  @BeforeEach
  public void setup() {
    //this.datasource.reset(); // sets dataLoaded to false
    // In fact, restart the entire Spark server for every test!
    this.datasource=new GeneralDataSource();
    this.createResponse = new CreateResponse();
    Spark.get("/loadcsv", new LoadCSVHandler(this.datasource));
    Spark.get("searchcsv", new SearchCSVHandler(this.datasource));
    Spark.get("viewcsv", new ViewCSVHandler(this.datasource));
    Spark.get("broadband", new BroadbandHandler(this.datasource));

    Spark.init();
    Spark.awaitInitialization(); // don't continue until the server is listening
  }
  /**
   * Gracefully stop Spark listening on both endpoints
   */
  @AfterEach
  public void teardown() {
    Spark.unmap("/loadcsv");
    Spark.unmap("/searchcsv");
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
   * Test helper method testCreateValidHeaderBool
   * @throws InvalidRequestArgumentException
   */
  @Test
  public void testCreateValidHeaderBool() throws InvalidRequestArgumentException {
    LoadCSVHandler loadHandler = new LoadCSVHandler(new GeneralDataSource());
    assertEquals(true, loadHandler.createValidHeaderBool("true"));
    assertEquals(true, loadHandler.createValidHeaderBool("TRUE"));
    assertEquals(true, loadHandler.createValidHeaderBool("True"));
    assertEquals(false, loadHandler.createValidHeaderBool("false"));
    assertEquals(false, loadHandler.createValidHeaderBool("FALSE"));
    assertEquals(false, loadHandler.createValidHeaderBool("False"));
    assertThrows(InvalidRequestArgumentException.class,
        () -> loadHandler.createValidHeaderBool("notheader"));
  }

  /**
   * Test load the ri csv
   *
   * @throws IOException
   */
  @Test
  // Recall that the "throws IOException" doesn't signify anything but acknowledgement to the type checker
  public void testLoadRICSV() throws IOException {
    String RIFilePath = "/Users/louise/Desktop/Study/CS/CS32/server-mding16-louiseweng/data/RITownAndIncome.csv";
    HttpURLConnection clientConnection =
        tryRequest(writeLoadAPI(RIFilePath, "true"));
    assertEquals(200, clientConnection.getResponseCode());

    Moshi moshi = new Moshi.Builder().build();
    LoadCSVHandler.ErrorResponse response
        = moshi.adapter(LoadCSVHandler.ErrorResponse.class).fromJson(new Buffer().readFrom(clientConnection.getInputStream()));

    System.out.println(response.result());
    clientConnection.disconnect();
  }
  /**
   * Test load the csv we created
   *
   * @throws IOException
   */
  @Test
  public void testBasicCSVLoad() throws IOException {
    String basicCSVPath = "/Users/michelleding/Desktop/CS32Assignments/server-mding16-louiseweng/data/test_csv/basic_table.csv";
    HttpURLConnection clientConnection =
        tryRequest(writeLoadAPI(basicCSVPath, "true"));
    assertEquals(200, clientConnection.getResponseCode());
    Moshi moshi = new Moshi.Builder().build();
    LoadCSVHandler.ErrorResponse response
        = moshi.adapter(LoadCSVHandler.ErrorResponse.class).fromJson(new Buffer().readFrom(clientConnection.getInputStream()));
    System.out.println("loadcsv: " + response.result());
  }

  /**
   * Unit test for the searchHandler
   *
   * @throws IOException
   * @throws InvalidColumnIdentifierException
   */
  @Test
  public void testSearchHandler() throws InvalidColumnIdentifierException, IOException {

    SearchCSVHandler searchHandler = new SearchCSVHandler(new GeneralDataSource());
    assertEquals(ColumnIdentifier.NO_IDENTIFIER, searchHandler.getIdentifierType("none"));
    assertEquals(ColumnIdentifier.NO_IDENTIFIER, searchHandler.getIdentifierType("NONE"));
    assertEquals(ColumnIdentifier.NO_IDENTIFIER, searchHandler.getIdentifierType("None"));
  }


  /**
   * Helper method to write the api
   *
   * @param filepath
   * @param hasHeader
   */
  public String writeLoadAPI(String filepath, String hasHeader){
    return "loadcsv?" + "filepath=" + filepath + "&" + "hasheader=" + hasHeader;
  }

  /**
   * Test for load when there's no csv data
   *
   * @throws IOException
   */
  @Test
  public void testLoadCSVNoData() throws IOException {
    HttpURLConnection loadConnection = tryRequest("loadcsv?filepath=hello");
    assertEquals(200, loadConnection.getResponseCode());
    Moshi moshi = new Moshi.Builder().build();
    LoadCSVHandler.ErrorResponse response
        = moshi.adapter(LoadCSVHandler.ErrorResponse.class).fromJson(new Buffer().readFrom(loadConnection.getInputStream()));
    assertEquals("error_bad_request_missing_field_for_hasheader", response.result());

    loadConnection.disconnect();
  }

  /**
   * Tests the error message for loadcsv if no header indicator is given as a parameter
   *
   * @throws IOException if the connection fails for some reason
   */
  @Test
  public void testLoadNoHeader() throws IOException, ExecutionException {
    HttpURLConnection clientConnection = tryRequest("loadcsv?file=ten-star.Csv");
    assertEquals(200, clientConnection.getResponseCode());

    Moshi moshi = new Moshi.Builder().build();
    ViewCSVHandler.ErrorResponse response
        = moshi.adapter(ViewCSVHandler.ErrorResponse.class).fromJson(new Buffer().readFrom(clientConnection.getInputStream()));
    assertEquals("error_bad_request_missing_field_for_filepath", response.result());
    clientConnection.disconnect();
  }

  /**
   * Tests the error message for loadcsv if a file that cannot be found is given as a parameter
   *
   * @throws IOException if the connection fails for some reason
   */
  @Test
  public void testLoadBadFile() throws IOException, ExecutionException {
    HttpURLConnection clientConnection = tryRequest("loadcsv?file=empty_csv.csv&hasHeader=true");
    assertEquals(200, clientConnection.getResponseCode());

    Moshi moshi = new Moshi.Builder().build();
    ViewCSVHandler.ErrorResponse response
        = moshi.adapter(ViewCSVHandler.ErrorResponse.class).fromJson(new Buffer().readFrom(clientConnection.getInputStream()));
    assertEquals("error_bad_request_missing_field_for_filepath", response.result());
    clientConnection.disconnect();
    clientConnection.disconnect();
  }

  /**
   * tests that multiple calls can be made to the api
   *
   * @throws IOException in case connection fails
   */
  @Test
  public void testMultipleAPICalls() throws IOException {
    HttpURLConnection clientConnection1 = tryRequest("loadcsv?filepath=/Users/louise/Desktop/Study/CS/CS32/server-mding16-louiseweng/data/test_csv/name_and_age.csv&hasheader=false");
    assertEquals(200, clientConnection1.getResponseCode());
    HttpURLConnection clientConnection2 = tryRequest("searchcsv?toSearch=maggie&columnIdentifier=none&columnIdentifierValue=0");
    assertEquals(200, clientConnection2.getResponseCode());
  }

  /**
   * tests that basic Search without column identifiers works properly
   *
   * @throws IOException in case connection fails
   * @throws ExecutionException if request fails to execute properly
   */
  @Test
  public void testSearchBasicSuccess() throws IOException, ExecutionException {
    HttpURLConnection clientConnection1 = tryRequest("loadcsv?filepath=/Users/louise/Desktop/Study/CS/CS32/server-mding16-louiseweng/data/test_csv/name_and_age.csv&hasheader=false");
    assertEquals(200, clientConnection1.getResponseCode());
    HttpURLConnection clientConnection2 = tryRequest("searchcsv?toSearch=maggie&columnIdentifier=none&columnIdentifierValue=0");
    assertEquals(200, clientConnection2.getResponseCode());

    List<List<String>> peopleData = List.of(List.of("maggie", "12"));

    Map<String, Object> expected = this.createResponse.makeSuccess("searchResult", peopleData);
    expected.put("searchResult", List.of(List.of("maggie", "12")));

    Map<String, Object> response = getResponse(clientConnection2);

    assertEquals(response, expected);
    clientConnection1.disconnect();
    clientConnection2.disconnect();
  }


  /**
   * Tests the success response for searchcsv if given a proper request (with a value and column to
   * Search for)
   *
   * @throws IOException if the connection fails for some reason
   */
  @Test
  public void testSearchColumnSuccess() throws IOException, ExecutionException {
    HttpURLConnection clientConnection1 = tryRequest("loadcsv?filepath=/Users/louise/Desktop/Study/CS/CS32/server-mding16-louiseweng/data/test_csv/basic_table.csv&hasheader=true");
    assertEquals(200, clientConnection1.getResponseCode());
    HttpURLConnection clientConnection2 = tryRequest("searchcsv?toSearch=Abby&columnIdentifier=none&columnIdentifierValue=Name");
    assertEquals(200, clientConnection2.getResponseCode());
    HttpURLConnection clientConnection3 = tryRequest("searchcsv?toSearch=Abby&columnIdentifier=none&columnIdentifierValue=0");
    assertEquals(200, clientConnection2.getResponseCode());

    List<List<String>> abby =
        List.of(List.of("Abby", "12", "China"));

    CreateResponse myResponse = new CreateResponse();
    Map<String, Object> expected = myResponse.makeSuccess("searchResult", abby);


    Map<String, Object> expected2 = myResponse.makeSuccess("searchResult", abby);

    Map<String, Object> response = getResponse(clientConnection2);
    Map<String, Object> response2 = getResponse(clientConnection3);

    assertEquals(response, expected);
    assertEquals(response2, expected2);
    clientConnection1.disconnect();
    clientConnection2.disconnect();
  }

  /**
   * Tests the response for searchcsv if no file is loaded
   *
   * @throws IOException if the connection fails for some reason
   */
  @Test
  public void testSearchNoFile() throws IOException {
    HttpURLConnection clientConnection = tryRequest("searchcsv");
    assertEquals(200, clientConnection.getResponseCode());
    Moshi moshi = new Moshi.Builder().build();
    SearchCSVHandler.ErrorResponse response
        = moshi.adapter(SearchCSVHandler.ErrorResponse.class).fromJson(new Buffer().readFrom(clientConnection.getInputStream()));
    assertEquals("error_bad_request:null", response.result());
  }

  /**
   * Helper method to get the response
   *
   * @param clientConnection
   * @throws IOException
   */
  private Map<String, Object> getResponse(HttpURLConnection clientConnection) throws IOException {
    Moshi moshi = new Moshi.Builder().build();
    Map<String, Object> map =
        moshi.adapter(Map.class).fromJson(new Buffer().readFrom(clientConnection.getInputStream()));
    return map;
  }

  /**
   * Tests the response for searchcsv if no Search value is given as a parameter
   *
   * @throws IOException if the connection fails for some reason
   */
  @Test
  public void testSearchNoValue() throws IOException {
    HttpURLConnection clientConnection1 = tryRequest("loadcsv?filepath=/Users/louise/Desktop/Study/CS/CS32/server-mding16-louiseweng/data/test_csv/basic_table.csv&hasheader=true");
    assertEquals(200, clientConnection1.getResponseCode());
    HttpURLConnection clientConnection2 = tryRequest("searchcsv");
    assertEquals(200, clientConnection2.getResponseCode());

    Moshi moshi = new Moshi.Builder().build();
    SearchCSVHandler.ErrorResponse response
        = moshi.adapter(SearchCSVHandler.ErrorResponse.class).fromJson(new Buffer().readFrom(clientConnection2.getInputStream()));
    assertEquals("error_bad_request:null", response.result());
    clientConnection1.disconnect();
    clientConnection2.disconnect();
  }

  /**
   * Tests the response for searchcsv if the value was not found in the entire file (regular Search)
   *
   * @throws IOException if the connection fails for some reason
   */
  @Test
  public void testSearchBasicNoResult() throws IOException{
    HttpURLConnection clientConnection1 = tryRequest("loadcsv?filepath=/Users/louise/Desktop/Study/CS/CS32/server-mding16-louiseweng/data/test_csv/basic_table.csv&hasheader=true");
    assertEquals(200, clientConnection1.getResponseCode());
    HttpURLConnection clientConnection2 = tryRequest("searchcsv?toSearch=Amy&columnIdentifier=none&columnIdentifierValue=Name");
    assertEquals(200, clientConnection2.getResponseCode());

    CreateResponse myResponse = new CreateResponse();
    Map<String, Object> expected = myResponse.makeSuccess("searchResult", List.of());

    Map<String, Object> response = getResponse(clientConnection2);

    assertEquals(response, expected);
    clientConnection1.disconnect();
    clientConnection2.disconnect();
  }

  /**
   * Tests the response for searchcsvHanlder if the value was not found in the specified column (column
   * Search)
   *
   * @throws IOException if the connection fails for some reason
   */
  @Test
  public void testSearchColumnNoResult() throws IOException, ExecutionException {
    HttpURLConnection clientConnection1 = tryRequest("loadcsv?filepath=/Users/louise/Desktop/Study/CS/CS32/server-mding16-louiseweng/data/test_csv/basic_table.csv&hasheader=true");
    assertEquals(200, clientConnection1.getResponseCode());
    HttpURLConnection clientConnection2 =
        tryRequest("searchcsv?toSearch=abby&columnIdentifier=none&columnIdentifierValue=2");
    assertEquals(200, clientConnection2.getResponseCode());
    HttpURLConnection clientConnection3 =
        tryRequest("searchcsv?toSearch=abby&columnIdentifier=none&columnIdentifierValue=age");
    assertEquals(200, clientConnection3.getResponseCode());

    Map<String, Object> intSearchResponse = getResponse(clientConnection2);
    Map<String, Object> headerSearchResponse = getResponse(clientConnection3);

    CreateResponse myResponse = new CreateResponse();
    Map<String, Object> expected = myResponse.makeSuccess("searchResult", List.of());


    Map<String, Object> expected2 = myResponse.makeSuccess("searchResult", List.of());


    assertEquals(intSearchResponse, expected);
    assertEquals(headerSearchResponse, expected2);
    clientConnection1.disconnect();
    clientConnection2.disconnect();
    clientConnection3.disconnect();
  }

  /**
   * Tests that the basic_table.csv file can be loaded, viewed, and then searched properly
   *
   * @throws IOException in case connection fails
   */
  @Test
  public void testViewSuccess() throws IOException, ExecutionException {
    HttpURLConnection clientConnection1 = tryRequest("loadcsv?filepath=/Users/louise/Desktop/Study/CS/CS32/server-mding16-louiseweng/data/test_csv/basic_table.csv&hasheader=true");
    assertEquals(200, clientConnection1.getResponseCode());
    HttpURLConnection clientConnection2 = tryRequest("viewcsv");
    assertEquals(200, clientConnection2.getResponseCode());
    List<List<String>> peopleData =
        List.of(
            List.of("name", "age", "country"),
            List.of("Abby", "12", "China"),
            List.of("Nate", "18", "Canada"),
            List.of("Jennifer", "20", "China"),
            List.of("George", "1", "USA"),
            List.of("Ken", "12", "Korea"),
            List.of("Maggie", "10", "country"),
            List.of("China", "12", "USA"),
            List.of("china","10","USA"));

    CreateResponse myResponse = new CreateResponse();
    Map<String, Object> expected = myResponse.makeSuccess("data", peopleData);

    Map<String, Object> response = getResponse(clientConnection2);

    assertEquals(response, expected);
    clientConnection1.disconnect();
    clientConnection2.disconnect();
  }

  /**
   * Tests the response for viewcsv if no file is loaded
   *
   * @throws IOException if the connection fails for some reason
   */
  @Test
  public void testViewNoFile() throws IOException, ExecutionException {
    HttpURLConnection clientConnection = tryRequest("viewcsv");
    assertEquals(200, clientConnection.getResponseCode());

    Moshi moshi = new Moshi.Builder().build();
    ViewCSVHandler.ErrorResponse response
        = moshi.adapter(ViewCSVHandler.ErrorResponse.class).fromJson(new Buffer().readFrom(clientConnection.getInputStream()));
    assertEquals("error_datasource_data_not_loaded", response.result());
  }

  /**
   * Tests the csv file could be changed when loading 2 times
   *
   * @throws IOException in case connection fails
   */
  @Test
  public void testLoadViewSearchTwice() throws IOException {
    HttpURLConnection clientConnection1 = tryRequest("loadcsv?filepath=/Users/louise/Desktop/Study/CS/CS32/server-mding16-louiseweng/data/test_csv/name_and_age.csv&hasheader=false");
    assertEquals(200, clientConnection1.getResponseCode());

    HttpURLConnection clientConnection2 = tryRequest("loadcsv?filepath=/Users/louise/Desktop/Study/CS/CS32/server-mding16-louiseweng/data/test_csv/basic_table.csv&hasheader=true");
    assertEquals(200, clientConnection2.getResponseCode());
    HttpURLConnection clientConnection3 = tryRequest("viewcsv");
    assertEquals(200, clientConnection3.getResponseCode());
    List<List<String>> peopleData =
        List.of(
            List.of("name", "age", "country"),
            List.of("Abby", "12", "China"),
            List.of("Nate", "18", "Canada"),
            List.of("Jennifer", "20", "China"),
            List.of("George", "1", "USA"),
            List.of("Ken", "12", "Korea"),
            List.of("Maggie", "10", "country"),
            List.of("China", "12", "USA"),
            List.of("china","10","USA"));
    HttpURLConnection clientConnection4 =
        tryRequest("searchcsv?toSearch=Abby&columnIdentifier=none&columnIdentifierValue=name");
    assertEquals(200, clientConnection4.getResponseCode());

    // german shepherd and poodle are from Germany
    CreateResponse myResponse = new CreateResponse();
    Map<String, Object> viewExpected =
        myResponse.makeSuccess("data", peopleData);
    Map<String, Object> searchExpected =
        myResponse.makeSuccess("searchResult",
            List.of(
                List.of("Abby", "12", "China")));

    Map<String, Object> viewResponse = getResponse(clientConnection3);
    Map<String, Object> searchResponse = getResponse(clientConnection4);

    assertEquals(viewExpected, viewResponse);
    assertEquals(searchExpected, searchResponse);
    clientConnection1.disconnect();
    clientConnection2.disconnect();
    clientConnection3.disconnect();
    clientConnection4.disconnect();
  }

  /**
   * tests the functionality of broadband
   *
   * @throws IOException
   */
  @Test
  public void testBroadbandSuccess() throws IOException {

    HttpURLConnection clientConnection =
        this.tryRequest("broadband?state=California&county=San%20Francisco%20County");
    assertEquals(200, clientConnection.getResponseCode());

    Map<String, Object> map = this.getResponse(clientConnection);
    System.out.println(map);

    assertEquals("success", map.get("result"));

    Map<String, Object> dataList = (Map<String,Object>) map.get("data");
    assertNotNull(dataList);
    assertEquals(4, dataList.size());

    assertEquals("\"87.1\"", dataList.get("broadbandPercentage"));
    assertEquals("[\"San Francisco County, California\"", dataList.get("county"));
    assertEquals("California", dataList.get("state"));
    clientConnection.disconnect();
  }

  /**
   * tests that the Broadband API can handle an invalid state input
   *
   * @throws IOException
   */
  @Test
  public void testBroadbandInvalidState() throws IOException {
    HttpURLConnection clientConnection = this.tryRequest("broadband?state=Rhod%20Island&county=InvalidCounty");
    assertEquals(200, clientConnection.getResponseCode());
    Map<String, Object> map = this.getResponse(clientConnection);
    System.out.println(map);

    assertEquals(
        "No data found", map.get("result")); // Assuming an 'error' result for invalid input

    clientConnection.disconnect();
  }

  /**
   * tests that the Broadband API can handle an invalid county input
   *
   * @throws IOException
   */
  @Test
  public void testBroadbandInvalidCounty() throws IOException {
    HttpURLConnection clientConnection =
        this.tryRequest("broadband?state=Rhode%20Island&county=InvalidCounty");

    Map<String, Object> map = this.getResponse(clientConnection);
    System.out.println(map);
    assertEquals(200, clientConnection.getResponseCode());

    assertEquals(
        "No data found",
        map.get("result")); // Assuming an 'error_bad_request' result for invalid input

    clientConnection.disconnect();
  }

  /**
   * Test basic broad band request works
   *
   * @throws IOException - if not working
   */
  @Test
  public void testMockedBroadBandRequestSuccess() throws IOException,NullPointerException {
    // Use *MOCKED* data when in this test environment.
    // Notice that the WeatherHandler code doesn't need to care whether it has
    // "real" data or "fake" data. Good separation of concerns enables better testing.
    DataSource mockedSource= new MockedDataSource(new CensusData(87.1));
    Spark.get("broadband", new BroadbandHandler(mockedSource));
    Spark.awaitInitialization(); // don't continue until the server is listening

    // New Moshi adapter for responses (and requests, too; see a few lines below)
    //   For more on this, see the Server gearup.
    Moshi moshi = new Moshi.Builder().build();
    Type mapStringObject = Types.newParameterizedType(Map.class, String.class, Object.class);
    JsonAdapter<Map<String, Object>> adapter = moshi.adapter(mapStringObject);
    /////////// LOAD DATASOURCE ///////////
    // Set up the request, make the request
    HttpURLConnection loadConnection = tryRequest("broadband?state=California&county=San%20Francisco%20County");
    // Get an OK response (the *connection* worked, the *API* provides an error response)
    assertEquals(200, loadConnection.getResponseCode());
    // Get the expected response: a success
    Map<String, Object> responseMap = adapter.fromJson(new Buffer().readFrom(loadConnection.getInputStream()));
    assertEquals("success", responseMap.get("result"));
    Map<String, Object> dataList = (Map<String,Object>)responseMap.get("data");
    assertEquals("\"87.1\"",dataList.get("broadbandPercentage"));
    loadConnection.disconnect();
  }

  /**
   * Test search functionality of GeneralDataSource
   * @throws IOException
   * @throws InvalidRequestArgumentException
   * @throws InvalidColumnIdentifierException
   * @throws NoHeaderException
   * @throws MissingDataException
   * @throws InvalidColumnIdentifierValueException
   */
  @Test
  public void testGeneralDataSource()
      throws IOException, InvalidRequestArgumentException, InvalidColumnIdentifierException,
      NoHeaderException, MissingDataException, InvalidColumnIdentifierValueException, FactoryFailureException {
    String testFilePath = "data/test_csv/basic_table.csv";
    GeneralDataSource testDataSource = new GeneralDataSource();
    // Before loading data, throw Missing Data Exception if try to search
    assertThrows(MissingDataException.class,
        () -> testDataSource.search(
            "China", ColumnIdentifier.COLUMN_NAME, "country"));

    // Once loaded data, test the two searches (by no identifier or by index/column name)
    testDataSource.loadData(testFilePath, true);

    List<List<String>> searchResponseName =
        testDataSource.search(
            "China", ColumnIdentifier.COLUMN_NAME, "country");
    assertEquals(2, searchResponseName.size());
  }
}

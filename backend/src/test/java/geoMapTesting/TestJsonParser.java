package geoMapTesting;
import static org.junit.jupiter.api.Assertions.assertEquals;

import edu.brown.cs32.main.datasource.genericjson.JsonParser;
import edu.brown.cs32.main.datasource.geoMapIntegration.JSONDataSource;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.HashMap;
import java.util.Map;
import org.junit.jupiter.api.Test;

/**
 * This is a test suite for a generic json parser that takes a json -> Map<String, Object>
 */
public class TestJsonParser {
  @Test
  public void testJsonParser() throws FileNotFoundException {
    String filePath = "data/mockedjson1.json";
    FileReader mockjson = new FileReader(filePath);
    JsonParser myJsonParser = new JsonParser(mockjson);
    Map<String, Object> parsedJson = myJsonParser.parseJson();
    assertEquals("John Doe", parsedJson.get("name"));
    assertEquals(true, parsedJson.get("is_employed"));
  }

  @Test
  public void testJsonParser2() throws FileNotFoundException {
    String filePath = "data/mockedjson2.json";
    FileReader mockjson = new FileReader(filePath);
    JsonParser myJsonParser = new JsonParser(mockjson);
    Map<String, Object> parsedJson = myJsonParser.parseJson();
    assertEquals(true, parsedJson.get("is_active"));
    Map<String, String> product = (Map<String, String>) parsedJson.get("product");
    assertEquals(4, product.size());
  }

  // GENERIC JSON PARSER
  @Test
  public void testJsonParser3() throws FileNotFoundException {
    String filePath = "data/geojson/fullDownload.geojson";
    FileReader mockjson = new FileReader(filePath);
    JsonParser myJsonParser = new JsonParser(mockjson);
    Map<String, Object> parsedJson = myJsonParser.parseJson();
    System.out.println("done");
  }

  @Test
  public void testJsonMapParser(){
    String filePath = "data/geojson/fullDownload.geojson";

  }

}

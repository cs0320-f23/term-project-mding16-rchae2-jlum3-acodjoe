//package integrationTesting;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//
//import edu.brown.cs32.main.datasource.geoMapIntegration.JSONDataSource;
//import java.io.FileNotFoundException;
//import java.io.FileReader;
//import java.util.HashMap;
//import java.util.Map;
//import org.junit.jupiter.api.Test;
//
//public class testIntegration {
//
//  // idead one:
//  // search and filter + search are different
//  @Test
//  public void testJsonParserFilterBasic() throws FileNotFoundException {
//
//    String filePath = "data/geojson/testFilter/smallFilterTest.json";
//    FileReader mockjson = new FileReader(filePath);
//    Map<String, Double> dict = new HashMap<String, Double>();
//    dict.put("minLat", 0.0);
//    dict.put("maxLat", 15.0);
//    dict.put("minLong", 80.0);
//    dict.put("maxLong", 130.0);
//
//    JSONDataSource testFilter = new JSONDataSource(false, filePath, dict);
//
//    assertEquals(testFilter.dataSize(), 2);
//  }
//
//  @Test
//  public void testFilterThenSearch() throws FileNotFoundException {
//
//    String filePath = "data/geojson/testFilter/smallFilterTest.json";
////    FileReader mockjson = new FileReader(filePath);
//    Map<String, Double> dict = new HashMap<String, Double>();
//    dict.put("minLat", 0.0);
//    dict.put("maxLat", 15.0);
//    dict.put("minLong", 80.0);
//    dict.put("maxLong", 1000.0);
//
//    Map<String, Double> emptyDict = new HashMap<String, Double>();
//
//    JSONDataSource filtered = new JSONDataSource(false, filePath, dict);
//    JSONDataSource nonFiltered = new JSONDataSource(false, filePath, emptyDict);
//
//    filtered.searchByKeyWord("Providence").size();
//    nonFiltered.searchByKeyWord("Providence").size();
//    assertEquals(filtered.searchByKeyWord("Providence").size(), 1);
////    assertEquals(nonFiltered.searchByKeyWord("Providence").size(), 2);
//  }
//
//
//
//
//}

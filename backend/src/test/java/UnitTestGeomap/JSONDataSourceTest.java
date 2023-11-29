package UnitTestGeomap;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.squareup.moshi.JsonAdapter;
import com.squareup.moshi.Moshi;
import com.squareup.moshi.Types;
import edu.brown.cs32.main.datasource.featurecollection.FeatureCollection;
import edu.brown.cs32.main.datasource.featurecollection.FeatureCollectionAdapter;
import edu.brown.cs32.main.datasource.genericjson.JsonParser;
import edu.brown.cs32.main.datasource.geoMapIntegration.GeoMap;
import edu.brown.cs32.main.datasource.geoMapIntegration.GeoMapAdapter;
import edu.brown.cs32.main.datasource.geoMapIntegration.Geometry;
import edu.brown.cs32.main.datasource.geoMapIntegration.JSONDataSource;
import edu.brown.cs32.main.datasource.geoMapIntegration.Property;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.Map;
import org.junit.jupiter.api.Test;
import java.util.ArrayList;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertFalse;

public class JSONDataSourceTest {
  public JSONDataSourceTest(){}
  @Test
  public void jsontest() throws FileNotFoundException {
    Map<String, Double> map = new HashMap<>();
    String filepathgeojson = "data/geojson/fullDownload.geojson";
    JSONDataSource myjson = new JSONDataSource(false, filepathgeojson, map);
    assertEquals(8875, myjson.dataSize());
    assertEquals(8875, myjson.dataWrapperSize());
    assertEquals(myjson.dataSize(), myjson.dataWrapperSize());
    ArrayList<GeoMap> searchProvidence = myjson.searchByKeyWord("Providence");
    System.out.println("*");

  }

  /**
   * Tests load of a single json
   * @throws FileNotFoundException
   */
  @Test
  public void singlejson() throws FileNotFoundException {
    Map<String, Double> map = new HashMap<>();

    // Test load smallmoshi2
    String filepathgeojson = "data/geojson/testLoad/smallmoshi1.geojson";
    JSONDataSource myjson = new JSONDataSource(true, filepathgeojson, map);
    assertEquals(1, myjson.dataSize());
    assertEquals(1, myjson.dataWrapperSize());
    assertEquals(myjson.dataSize(), myjson.dataWrapperSize());

    // Test load smallmoshi2
    String filepathgeojson2 = "data/geojson/testLoad/smallmoshi2.geojson";
    JSONDataSource myjson2 = new JSONDataSource(true, filepathgeojson2, map);
    assertEquals(1, myjson2.dataSize());
    assertEquals(1, myjson2.dataWrapperSize());
    assertEquals(myjson2.dataSize(), myjson2.dataWrapperSize());
  }

  /**
   * Tests search of a single json
   * @throws FileNotFoundException
   */
  @Test
  public void searchMultipleJsons() throws FileNotFoundException {
    // *********** Test load ***********
    Map<String, Double> map = new HashMap<>();
    String filepathgeojson = "data/geojson/testSearch/testSearch1.geojson";
    JSONDataSource myjson = new JSONDataSource(true, filepathgeojson, map);
    assertEquals(5, myjson.dataSize());
    assertEquals(5, myjson.dataWrapperSize());
    assertEquals(myjson.dataSize(), myjson.dataWrapperSize());
    // *********** Test search ***********
    ArrayList<GeoMap> search = myjson.searchByKeyWord("poor");
    assertEquals(5, search.size());
    ArrayList<GeoMap> searchNone = myjson.searchByKeyWord("DOESNOTEXIST");
    assertEquals(0, searchNone.size());
  }

  /**
   * Tests search of a single json
   * @throws FileNotFoundException
   */
  @Test
  public void searchMultipleJsons2() throws FileNotFoundException {
    // *********** Test load ***********
    Map<String, Double> map = new HashMap<>();
    String filepathgeojson = "data/geojson/testSearch/testSearch2.geojson";
    JSONDataSource myjson = new JSONDataSource(true, filepathgeojson, map);
    assertEquals(6, myjson.dataSize());
    assertEquals(6, myjson.dataWrapperSize());
    assertEquals(myjson.dataSize(), myjson.dataWrapperSize());
    // *********** Test search ***********
    ArrayList<GeoMap> search = myjson.searchByKeyWord("poor");
    assertEquals(5, search.size());

    ArrayList<GeoMap> searchNone = myjson.searchByKeyWord("DOESNOTEXIST");
    assertEquals(0, searchNone.size());

    ArrayList<GeoMap> search6 = myjson.searchByKeyWord("stores");
    assertEquals(6, search6.size());

    ArrayList<GeoMap> search1 = myjson.searchByKeyWord("Residents");
    assertEquals(1, search1.size());
  }

  @Test
  public void defensiveCopyTest() throws FileNotFoundException{
    Map<String, Double> map = new HashMap<>();
    String filepathgeojson = "data/geojson/testSearch/testSearch1.geojson";
    JSONDataSource myjson = new JSONDataSource(true, filepathgeojson, map);
    assertEquals(5, myjson.getData().size());
//    assertFalse(myjson.getData() == (myjson.data));
    // This will not pass because data is now private
    // but if data is public - this test will pass because we returned a copy of the data
  }


  /**
   * Tests filter by min lat, max lat, etc.
   * @throws FileNotFoundException
   */
  @Test
  public void testJsonParserFilterBasic() throws FileNotFoundException {
    String filePath = "data/geojson/testFilter/smallFilterTest.json";
    FileReader mockjson = new FileReader(filePath);
    Map<String, Double> dict = new HashMap<String, Double>();
    dict.put("minLat", 0.0);
    dict.put("maxLat", 15.0);
    dict.put("minLong", 80.0);
    dict.put("maxLong", 1000.0);

    JSONDataSource testFilter = new JSONDataSource(false, filePath, dict);

    assertEquals(testFilter.dataSize(), 2);
  }

  @Test
  public void testCoord() throws IOException {
    Moshi moshi = new Moshi.Builder().build();
    Type type = Types.newParameterizedType(Geometry.class, String.class, List.class);
    String jsonString = "{\"type\":\"MultiPolygon\",\"coordinates\":[[[[-86.921386,33.460245],[-86.911119,33.465301],[-86.907054,33.460662],[-86.919853,33.456051],[-86.921386,33.460245]]]]}";
    JsonAdapter<Geometry> adapter = moshi.adapter(type);
    Geometry testGeom = adapter.fromJson(jsonString);
    System.out.println(testGeom);

  }

  @Test
  public void testMoshi1() throws IOException {
    String moshiJson = "data/geojson/testLoad/smallmoshi1.geojson";
    testMoshi(moshiJson);

    String moshiJson2 = "data/geojson/testLoad/smallmoshi2.geojson";
    testMoshi(moshiJson2);
  }

  @Test
  public void testSerializeMoshi() throws IOException{
    String filepath = "data/geojson/testLoad/smallmoshi1.geojson";
    String jsonString = readTestJson(filepath);

    Moshi moshi = new Moshi.Builder().build();
    Type geometry = Types.newParameterizedType(Geometry.class, String.class, List.class);
    Type type = Types.newParameterizedType(GeoMap.class, String.class, geometry, Property.class);
    JsonAdapter<GeoMap> adapter = moshi.adapter(type);

    GeoMap myMap = adapter.fromJson(jsonString);

    GeoMapAdapter serializeAdapter = new GeoMapAdapter();
    String json = serializeAdapter.toJson(myMap);
    System.out.println(json);
  }

  @Test
  public void testSerializeListMoshi() throws FileNotFoundException{
    Map<String, Double> map = new HashMap<>();
    String filepathgeojson = "data/geojson/testSearch/testSearch1.geojson";
    JSONDataSource myjson = new JSONDataSource(true, filepathgeojson, map);
    assertEquals(5, myjson.getData().size());
    String jsonString = "";
    GeoMapAdapter adapter = new GeoMapAdapter();

    ArrayList<GeoMap> data = myjson.getData();
    for (int i = 0; i<data.size(); i++){
      String mapjson = adapter.toJson(data.get(i));
      jsonString += mapjson;
    }
    System.out.println(jsonString);

  }

  @Test
  public void filterTest() throws IOException{
    Map<String, Double> filterCoords = new HashMap<>();
    filterCoords.put("minLat", -80.0);
    filterCoords.put("maxLat", 80.0);
    filterCoords.put("minLong", -100.0);
    filterCoords.put("maxLong", 100.0);

    JSONDataSource myjson = new JSONDataSource(false, "data/geojson/fullDownload.geojson", filterCoords);

    String jsonString = "";
    GeoMapAdapter adapter = new GeoMapAdapter();
    ArrayList<GeoMap> data = myjson.getData();
    for (int i = 0; i<data.size(); i++){
      String mapjson = adapter.toJson(data.get(i));
      jsonString += mapjson;
    }
    System.out.println(jsonString);
  }


  public void testMoshi(String filePath) throws IOException{
    Moshi moshi = new Moshi.Builder().build();
    Type geometry = Types.newParameterizedType(Geometry.class, String.class, List.class);
    Type type = Types.newParameterizedType(GeoMap.class, String.class, geometry, Property.class);
    String jsonString = readTestJson(filePath);
    JsonAdapter<GeoMap> adapter = moshi.adapter(type);
    GeoMap myMap = adapter.fromJson(jsonString);
    System.out.println(myMap);
    List<List<Double>> coordinates = myMap.geometry.coordinates.get(0).get(0);
    System.out.println(coordinates);
  }

  public String readTestJson(String filePath) throws IOException {
    FileReader jsonReader = new FileReader(filePath);
    BufferedReader br = new BufferedReader(jsonReader);
    String fileString = "";
    String line = br.readLine();
    while (line != null) {
      fileString = fileString + line;
      line = br.readLine();
    }
    jsonReader.close();
    return fileString;
  }

  @Test
  public void featureCollection() throws IOException{
    Map<String, Double> map = new HashMap<>();
    String filepathgeojson = "data/geojson/testSearch/testSearch1.geojson";
    JSONDataSource myjson = new JSONDataSource(true, filepathgeojson, map);
    FeatureCollection myft = new FeatureCollection("FeatureCollection", myjson.getData());
    FeatureCollectionAdapter adapter = new FeatureCollectionAdapter();
    String json = adapter.toJson(myft);
    System.out.println(json);
  }
}

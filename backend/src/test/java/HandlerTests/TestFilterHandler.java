package HandlerTests;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.squareup.moshi.JsonAdapter;
import com.squareup.moshi.Moshi;
import com.squareup.moshi.Types;
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
public class TestFilterHandler {
  @Test
  public void testValid(){
    assertEquals(true, validLong(100.0));
    assertEquals(true, validLong(50.0));
    assertEquals(false, validLong(-180.1));
    assertEquals(false, validLong(180.1));

    assertEquals(false, validLat(90.0));
    assertEquals(true, validLat(89.9));
    assertEquals(false, validLat(-180.0));
    assertEquals(true, validLat(-90.0));

    Map<String, Double> filterCoords = new HashMap<>();
    filterCoords.put("minLat", -80.0);
    filterCoords.put("maxLat", 80.0);
    filterCoords.put("minLong", -100.0);
    filterCoords.put("maxLong", 100.0);

    boolean check = this.validLong(filterCoords.get("minLong"))
        && this.validLong(filterCoords.get("maxLong"))
        && this.validLat(filterCoords.get("minLat"))
        && this.validLat(filterCoords.get("maxLat"));
    System.out.println(check);
  }

  /**
   * Longitude is specified in degrees within the range [-180, 180).
   * @param longitude
   * @return
   */
  public boolean validLong(Double longitude){
    return (longitude >= -180) && (longitude < 180);
  }

  /**
   * Latitude is specified in degrees within the range [-90, 90].
   * @param latitude
   * @return
   */
  public boolean validLat(Double latitude){
    return (latitude >= -90) && (latitude < 90);
  }
}

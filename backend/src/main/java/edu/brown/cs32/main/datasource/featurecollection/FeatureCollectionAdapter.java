package edu.brown.cs32.main.datasource.featurecollection;// package edu.brown.cs32.main.datasource.geoMapIntegration;

import com.squareup.moshi.FromJson;
import com.squareup.moshi.JsonAdapter;
import com.squareup.moshi.Moshi;
import com.squareup.moshi.ToJson;
import com.squareup.moshi.Types;
import com.squareup.moshi.adapters.PolymorphicJsonAdapterFactory;
import edu.brown.cs32.main.datasource.geoMapIntegration.GeoMap;
import java.io.IOException;
import java.lang.reflect.Type;
import java.util.Collections;
import java.util.Properties;
import java.util.Set;
import java.util.List;

public class FeatureCollectionAdapter {

  private final Moshi moshi = new Moshi.Builder().build();
  Type type = Types.newParameterizedType(FeatureCollection.class, String.class, List.class, GeoMap.class);
  @ToJson
  public String toJson(FeatureCollection map) {
    JsonAdapter<FeatureCollection> adapter = moshi.adapter(type);
    return adapter.toJson(map);
  }

  @FromJson
  public FeatureCollection fromJson(String map) throws IOException {
    return new FeatureCollection("FeatureCollection", Collections.EMPTY_LIST);
  }


}
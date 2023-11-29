package edu.brown.cs32.main.datasource.featurecollection;

import edu.brown.cs32.main.datasource.geoMapIntegration.GeoMap;
import java.util.List;

public class FeatureCollection {
  String type;
  List<GeoMap> features;
  public FeatureCollection(String type, List<GeoMap> features){
    this.type = type;
    this.features = features;
  }

}

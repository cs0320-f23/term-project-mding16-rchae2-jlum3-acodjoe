package edu.brown.cs32.main.handler.Json;

import com.squareup.moshi.Moshi;
import edu.brown.cs32.main.datasource.featurecollection.FeatureCollection;
import edu.brown.cs32.main.datasource.featurecollection.FeatureCollectionAdapter;
import edu.brown.cs32.main.datasource.geoMapIntegration.GeoMap;
import edu.brown.cs32.main.datasource.geoMapIntegration.GeoMapAdapter;
import edu.brown.cs32.main.datasource.geoMapIntegration.JSONDataSource;
import edu.brown.cs32.main.exceptions.MissingArgumentException;

import edu.brown.cs32.main.handler.CSV.LoadCSVHandler;
import edu.brown.cs32.main.handler.CSV.SearchCSVHandler;
import edu.brown.cs32.main.handler.CSV.ViewCSVHandler;
import edu.brown.cs32.main.handler.CSV.ViewCSVHandler.SuccessResponse;
import edu.brown.cs32.main.handler.Helpers.RequestHelper;
import java.util.ArrayList;
import java.util.Map;
import java.util.List;
import spark.Request;
import spark.Response;
import spark.Route;
import java.util.HashMap;

/** LoadCSVHandler class for loading the input file. Use with loadcsv endpoint. */
public class FilterJsonHandler implements Route {

  private List<String> requiredParams = new ArrayList<>();

  /** This is the constructor for LoadJsonHandler class which adds 4 required parameters for filter
   *
   */
  public FilterJsonHandler() {
    this.requiredParams.add("minlat");
    this.requiredParams.add("maxlat");
    this.requiredParams.add("minlong");
    this.requiredParams.add("maxlong");
  }

  /**
   * Loads the input file into the server and checks that the input file is valid if the
   * file exists and if the hasHeader parameter is valid.
   *
   * @param request
   * @param response
   */
  @Override
  public Object handle(Request request, Response response) {
    RequestHelper loadHelper = new RequestHelper(request, this.requiredParams);

    try {
      // Get the necessary fields are there using a RequestHelper method --
      // We need to check to make sure all the fields are there before proceeding to handle request
      Map<String, String> usefulParams = loadHelper.getUsefulRequestParams();
      Double minlat = Double.valueOf(usefulParams.get("minlat"));
      Double maxlat = Double.valueOf(usefulParams.get("maxlat"));
      Double minlong = Double.valueOf(usefulParams.get("minlong"));
      Double maxlong = Double.valueOf(usefulParams.get("maxlong"));

      if (this.validLong(minlong) && this.validLong(maxlong) && this.validLat(minlat) && this.validLat(maxlat)){
        Map<String, Double> filterCoords = new HashMap<>();
        filterCoords.put("minLat", minlat);
        filterCoords.put("minLong", minlong);
        filterCoords.put("maxLat", maxlat);
        filterCoords.put("maxLong", maxlong);

        // initializing JSONDataSource object
        JSONDataSource filteredData = new JSONDataSource(
            false, "data/geojson/fullDownload.geojson", filterCoords);

        // getting copy of filtered data
        ArrayList<GeoMap> data = filteredData.getData();
        FeatureCollection returnFC = new FeatureCollection("FeatureCollection", data);
        FeatureCollectionAdapter adapter = new FeatureCollectionAdapter();
        return adapter.toJson(returnFC);
      } else{
        return new ErrorResponse("error_bad_request: invalid long/lat").serialize();
      }

      // ======= CATCH EXCEPTIONS TO RETURN ERROR RESPONSES =========
      // If there is an IO exception, return error_datasource
    } catch (MissingArgumentException e) {
      return new ErrorResponse("error_bad_request_missing_field_for_" + e.getMissingField()).serialize();
    } catch (NumberFormatException e){
      return new ErrorResponse("error_bad_request: invalid long/lat format" + e.getMessage()).serialize();
    } catch (Exception e) {
      return new ErrorResponse("error_bad_request: " + e.getMessage()).serialize();
    }
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

//  /**
//   * This is to create success response with all data loaded
//   *
//   * @param result
//   * @param data
//   * @return SuccessResponse
//   */
//  public record SuccessResponse(String result, Integer dataSize, List<String> data) {
//    public SuccessResponse(Integer dataSize, List<String> data) {this("success", dataSize, data);
//    }
//    String serialize() {
//      Moshi moshi = new Moshi.Builder().build();
//      return moshi.adapter(FilterJsonHandler.SuccessResponse.class).toJson(this);
//    }
//  }
  /**
   * This is to create error response with all data loaded
   *
   * @param result
   * @return ErrorResponse
   */
  public record ErrorResponse(String result) {
    String serialize() {
      Moshi moshi = new Moshi.Builder().build();
      return moshi.adapter(ErrorResponse.class).toJson(this);
    }
  }

}
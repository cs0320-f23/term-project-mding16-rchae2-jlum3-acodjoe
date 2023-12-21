package edu.brown.cs32.main.database;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

/**
 * Used to add and retrieve from region database, which stores regions and recipes for each level.
 */
public class RegionDB {

  private Firestore db;

  /**
   * Takes in database instance.
   * @param db firebase
   */
  public RegionDB(Firestore db) {
    this.db = db;
  }

  /**
   * Adds to region database.
   *
   * @param region region name
   * @param levels map from level to list of recipes in given level
   */
  public void add(String region, Map<String, List<String>> levels) {
    try {
      Map<String, Object> data = new HashMap<>();
      data.put("region", region);
      data.put("levels", levels);
      System.out.println(data);
      ApiFuture<WriteResult> future = this.db.collection("regions").document((String) data.get("region")).set(data);
      System.out.println("Successfully updated at: " + future.get().getUpdateTime());
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}

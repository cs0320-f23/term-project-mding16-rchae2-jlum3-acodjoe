package edu.brown.cs32.main.database;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

/**
 * Used to add and retrieve from recipe database, which stores recipe name, instructions. etc.
 */
public class RecipeDB {

  private Firestore db;

  /**
   * Takes in database instance.
   * @param db firebase
   */
  public RecipeDB(Firestore db) {
    this.db = db;
  }

  /**
   * Adds to recipe database.
   *
   * @param name recipe name
   * @param difficultyScore recipe's difficulty score
   * @param instructions recipe instructions
   * @param ingredients recipe ingredients
   * @param image recipe image link
   */
  public void add(String name, int difficultyScore, List<String> instructions, List<String> ingredients, String image) {
    try {
      Map<String, Object> data = new HashMap<>();
      data.put("recipe", name);
      data.put("difficulty", difficultyScore);
      data.put("ingredients", ingredients);
      data.put("instructions", instructions);
      data.put("image", image);

      ApiFuture<WriteResult> future = this.db.collection("recipes").document((String) data.get("recipe")).set(data);
      System.out.println("Successfully updated at: " + future.get().getUpdateTime());
    } catch(Exception e) {
      e.printStackTrace();
    }

  }

  /**
   * Retrieves from recipe db.
   *
   * @param recipe recipe name/key
   */
  public void get(String recipe) {
    try {
      DocumentReference docRef = db.collection("recipes").document(recipe);
      ApiFuture<DocumentSnapshot> future = docRef.get();
      DocumentSnapshot document = future.get();
      if (document.exists()) {
        System.out.println(document.getData());
      } else {
        System.out.println("no such document exists!");
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}

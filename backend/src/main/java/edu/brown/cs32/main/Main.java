package edu.brown.cs32.main;

import com.google.api.core.ApiFuture;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.FirebaseException;
import com.google.firebase.cloud.FirestoreClient;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

//https://stackoverflow.com/questions/63521181/java-file-outside-of-source-root-intellij
public class Main {

  public static void main(String[] args)
      throws IOException, ExecutionException, InterruptedException {
//    System.out.println("Current Working Directory: " + System.getProperty("user.dir"));

    FileInputStream serviceAccount = new FileInputStream("./backend/src/main/java/edu/brown/cs32/main/database/ServiceAccountKey.json");
    FirebaseOptions options = FirebaseOptions.builder().setCredentials(GoogleCredentials.fromStream(serviceAccount)).build();
    FirebaseApp.initializeApp(options);
    Firestore db = FirestoreClient.getFirestore();

//    adding to the recipes table ----------------
//    Map<String, Object> data = new HashMap<>();
//    data.put("difficulty", 6);
//    data.put("ingredients", new ArrayList<>(Arrays.asList("Apple", "Banana", "Orange"))); // Replace with an actual difficulty score
//    data.put("recipe", "fruit");
//    data.put("steps", new ArrayList<>(Arrays.asList("step 1", "step 2", "step 3")));
//
//    ApiFuture<WriteResult> future = db.collection("recipes").document((String) data.get("recipe")).set(data);
//    System.out.println("Successfully updated at: " + future.get().getUpdateTime());

//    adding to the regions table ----------------
//    Map<String, Object> data = new HashMap<>();
//    data.put("region", "north america");
//
//    Map<String, ArrayList<String>> levels = new HashMap<>();
//    levels.put("1", new ArrayList<>(Arrays.asList("mashed potatoes", "casserole")));
//    levels.put("2", new ArrayList<>(Arrays.asList("burger", "fries")));
//    data.put("levels", levels);
//
//    ApiFuture<WriteResult> future = db.collection("regions").document((String) data.get("region")).set(data);
//    System.out.println("Successfully updated at: " + future.get().getUpdateTime());

//    sample of retrieving data from database ----------------
//    DocumentReference docRef = db.collection("recipes").document("fruit");
//    ApiFuture<DocumentSnapshot> future = docRef.get();
//    DocumentSnapshot document = future.get();
//    if (document.exists()) {
//      System.out.println(document.getData());
//    } else {
//      System.out.println("no such document exists!");
//    }
  }
}
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

/*
 * Class that initializes the Firebase database
 */
//https://stackoverflow.com/questions/63521181/java-file-outside-of-source-root-intellij
public class Main {

  public static void main(String[] args)
      throws IOException, ExecutionException, InterruptedException {
    FileInputStream serviceAccount = new FileInputStream("./backend/src/main/java/edu/brown/cs32/main/database/ServiceAccountKey.json");
    FirebaseOptions options = FirebaseOptions.builder().setCredentials(GoogleCredentials.fromStream(serviceAccount)).build();
    FirebaseApp.initializeApp(options);
    Firestore db = FirestoreClient.getFirestore();

  }
}
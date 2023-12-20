package edu.brown.cs32.main.server;
import java.io.FileNotFoundException;
import spark.Spark;
import static spark.Spark.after;

/** Server class for our ChefBear app */
public class Server {
  private final int port = 3233;

  /** This is the constructor for the server class to get a port and use all api

   */
  public Server() {
    Spark.port(this.port);
    Spark.init();

    System.out.println("Server started at http://localhost:" + this.port);
    Spark.awaitInitialization();
  }

  /** This is main program to activate the server
   *
   * @param args
   */
  public static void main(String[] args) throws FileNotFoundException {
    Server server = new Server();

    after(
        (request, response) -> {
          response.header("Access-Control-Allow-Origin", "*");
          response.header("Access-Control-Allow-Methods", "*");
        });
  }
}



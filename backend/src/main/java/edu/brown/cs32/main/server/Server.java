package edu.brown.cs32.main.server;
import java.io.FileNotFoundException;
import spark.Spark;
import static spark.Spark.after;

/** Server class for using all endpoint including loadcsv, viewcsv, searchcsv, and broadbandcsv. */
public class Server {
  private GeneralDataSource state;
  private final int port = 3233;

  /** This is the constructor for the server class to get a port and use all api
   *
   * @param toUse
   */
  public Server() {
    this.state = toUse;
    Spark.port(this.port);
    Spark.init();

//    Spark.get("/searchjson", new SearchJsonHandler());
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



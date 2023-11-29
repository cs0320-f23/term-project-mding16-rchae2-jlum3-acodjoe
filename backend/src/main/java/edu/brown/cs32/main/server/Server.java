package edu.brown.cs32.main.server;
import edu.brown.cs32.main.datasource.csvIntegration.GeneralDataSource;
import edu.brown.cs32.main.handler.Broadband.BroadbandHandler;
import edu.brown.cs32.main.handler.CSV.LoadCSVHandler;
import edu.brown.cs32.main.handler.CSV.SearchCSVHandler;
import edu.brown.cs32.main.handler.CSV.ViewCSVHandler;
import edu.brown.cs32.main.handler.Json.FilterJsonHandler;
import edu.brown.cs32.main.handler.Json.SearchJsonHandler;
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
  public Server(GeneralDataSource toUse) {
    this.state = toUse;
    Spark.port(this.port);
    Spark.init();
    Spark.get("/loadcsv", new LoadCSVHandler(this.state));
    Spark.get("/viewcsv", new ViewCSVHandler(this.state));
    Spark.get("/searchcsv", new SearchCSVHandler(this.state));
    // LOAD, VIEW, SEARCH DONE
    Spark.get("/broadband", new BroadbandHandler(toUse));
    Spark.get("/filterjson", new FilterJsonHandler());
    Spark.get("/searchjson", new SearchJsonHandler());
    System.out.println("Server started at http://localhost:" + this.port);
    Spark.awaitInitialization();
  }

  /** This is main program to activate the server
   *
   * @param args
   */
  public static void main(String[] args) throws FileNotFoundException {
    GeneralDataSource myDataSource = new GeneralDataSource();
    Server server = new Server(myDataSource);


    after(
        (request, response) -> {
          response.header("Access-Control-Allow-Origin", "*");
          response.header("Access-Control-Allow-Methods", "*");
        });
  }
}



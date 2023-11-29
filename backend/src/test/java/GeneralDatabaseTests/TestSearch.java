package GeneralDatabaseTests;

import static org.junit.jupiter.api.Assertions.assertEquals;

import edu.brown.cs32.main.datasource.csvIntegration.Parser;
import edu.brown.cs32.main.datasource.csvIntegration.Searcher;
import edu.brown.cs32.main.exceptions.FactoryFailureException;
import edu.brown.cs32.main.exceptions.InvalidColumnIdentifierValueException;
import edu.brown.cs32.main.exceptions.NoHeaderException;
import edu.brown.cs32.main.testparser.ListOfStringsCreator;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;

/** unit test for search */
public class TestSearch {

  public TestSearch(){}

  /**
   * Test the functionality of search
   * */
  @Test
  public void testSimpleSearch()
      throws IOException, FactoryFailureException, NoHeaderException, InvalidColumnIdentifierValueException {
    String filePath = "data/test_csv/basic_table.csv";
    FileReader myReader = new FileReader(new File(filePath));
    Parser<List<String>> basicParser = new Parser<>(myReader, new ListOfStringsCreator(), true);
    basicParser.parse();

    Searcher mySearcher = new Searcher(basicParser);
    ArrayList<List<String>> searchResults = mySearcher.searchByHeaderName ("country", "China");
    assertEquals(2, searchResults.size());
    searchResults = mySearcher.searchByIndex(0, "China");
    assertEquals(1, searchResults.size());
    searchResults = mySearcher.searchAll("China");
    assertEquals(3, searchResults.size());
  }
}

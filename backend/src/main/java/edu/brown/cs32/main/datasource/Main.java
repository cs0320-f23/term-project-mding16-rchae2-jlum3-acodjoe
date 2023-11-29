package edu.brown.cs32.main.datasource;

import edu.brown.cs32.main.datasource.csvIntegration.ColumnIdentifier;
import edu.brown.cs32.main.datasource.csvIntegration.Parser;
import edu.brown.cs32.main.datasource.csvIntegration.SearcherComplex;
import edu.brown.cs32.main.datasource.exceptions.FactoryFailureException;
import edu.brown.cs32.main.datasource.exceptions.InvalidColumnIdentifierException;
import edu.brown.cs32.main.datasource.exceptions.InvalidColumnIdentifierValueException;
import edu.brown.cs32.main.datasource.exceptions.NoHeaderException;
import edu.brown.cs32.main.testparser.ListOfStringsCreator;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 * This is the user-facing main class covering user story 1. The class involves dynamic user input
 * and is equipped to continue prompting until the user provides a valid input (to prevent user
 * errors). All exceptions are handled in the Main class through printed system messages. >> To
 * start the demo, press RUN. You do not need to change any arguments.
 */
public final class Main {
  /** String representing filePath of the user's CSV file */
  String filePath;

  /** String representing the String the user wants to search */
  String toSearch;

  /** Boolean representing whether the user CSV has headers */
  Boolean hasHeaders = false;

  /**
   * Enum representing the type of identifier the user wishes to use (COLUMN_NAME, COLUMN_INDEX,
   * NO_IDENTIFIER)
   */
  ColumnIdentifier whichIdentifier;

  /** String representing the value of the column identifier (column name, index */
  String columnIdentifier;

  /** Parser represents object that parses the user CSV */
  Parser<List<String>> parser;

  /** Searcher object to search for user word */
  SearcherComplex mySearcher;

  /** boolean representing whether search is case-sensitive */
  boolean caseSensitive = true;

  // Helper lists to aid in prompting until correct (see setup())
  ArrayList<String> validColumnIdentifiersAll; // [NONE, NAME, INDEX]
  ArrayList<String> validColumnIdentifiersNoHeader; // [NONE, INDEX]
  ArrayList<String> validHeaderResponses; // [Yes, No]
  ArrayList<String> validYorN; // [Y, N]

  /**
   * The initial method called when execution begins.
   *
   * @param args An array of command line arguments
   */
  public static void main(String[] args) {
    new Main(args);
  }

  /**
   * Main method that begins the program
   *
   * @param args -- empty
   */
  private Main(String[] args) {
    try {
      // Run the setup() to create the helper lists to aid in prompting until correct user input
      this.setup();
      // Call helper runParser() to get user CSV and parse the CSV
      this.runParser();
      // Call helper runSearch() to search for user's word
      this.runSearch();
      // Print out search results
      System.out.println("Your search results are below:");
      System.out.println("************");
      mySearcher.printSearch(this.caseSensitive);
      System.out.println("************");
      System.out.println("CSV Program Run Successfully!");

      // Catch exceptions
    } catch (IOException e) {
      System.out.println("File Not Found");
    } catch (NoHeaderException e) {
      System.out.println("No Header to Search From");
    } catch (FactoryFailureException | InvalidColumnIdentifierException |
             InvalidColumnIdentifierValueException |
             edu.brown.cs32.main.exceptions.FactoryFailureException e) {
      System.out.println(e.getMessage());
    }
  }

  /**
   * This method sets up helper lists to aid in user prompting until valid input to prevent user
   * errors
   */
  private void setup() {
    // Set up list of valid responses to "What is your column identifier?" [NONE, NAME, INDEX]
    this.validColumnIdentifiersAll = new ArrayList<>();
    this.validColumnIdentifiersAll.add("NONE");
    this.validColumnIdentifiersAll.add("NAME");
    this.validColumnIdentifiersAll.add("INDEX");

    // Set up list of valid responses to "What is your column identifier?"
    // if CSV has no header [NONE, INDEX]
    // ** they won't be able to search by name if no headers exist - this edge case
    // is also dealt with in the Search class using exceptions.
    this.validColumnIdentifiersNoHeader = new ArrayList<>();
    this.validColumnIdentifiersNoHeader.add("NONE");
    this.validColumnIdentifiersNoHeader.add("INDEX");

    // Set up list of valid responses to "Does your csv file have headers?" [Yes, No]
    this.validHeaderResponses = new ArrayList<>();
    this.validHeaderResponses.add("Yes");
    this.validHeaderResponses.add("No");

    // Set up list of valid responses to Y or N questions [Y, N]
    this.validYorN = new ArrayList<>();
    this.validYorN.add("Y");
    this.validYorN.add("N");
  }

  /**
   * This helper method asks the user for a CSV filePath & whether it has headers, creates a File
   * Reader, creates a Parser, and allows user to preview dataset
   *
   * @throws IOException if file not found
   * @throws FactoryFailureException if parser fails to create object using CreatorFromRow
   */
  private void runParser()
      throws IOException, FactoryFailureException, edu.brown.cs32.main.exceptions.FactoryFailureException {
    Scanner myScanner = new Scanner(System.in);

    // Asks user for filepath of CSV
    System.out.println("Hi there. Welcome to the CSV parser!");
    System.out.println("Please enter the FILE PATH of your csv file");
    this.filePath = myScanner.nextLine();

    // Asks user whether their file has headers (will keep prompting until Yes or No response)
    System.out.println("Does your csv file have headers? Respond Yes or No");
    String userHasHeaders = myScanner.nextLine();
    boolean validHeader = this.checkValidArgument(userHasHeaders, this.validHeaderResponses, false);
    while (!validHeader) {
      System.out.println("Please respond only Yes or No.");
      System.out.println("Does your csv file have headers? Respond Yes or No");
      userHasHeaders = myScanner.nextLine();
      validHeader = this.checkValidArgument(userHasHeaders, this.validHeaderResponses, false);
    }
    this.hasHeaders = userHasHeaders.equalsIgnoreCase("yes");

    // Creates a FileReader object using user filepath
    File myFile = new File(this.filePath);

    // Creates a new Parser object using ListOfStringsCreator (keeps List<String> format for rows)
    this.parser =
        new Parser<>(
            new FileReader(myFile), new ListOfStringsCreator(), this.hasHeaders);
    this.parser.parse();
    // Asks user if they want to preview dataset (will keep prompting until Y or N response)
    System.out.println("Do you want to preview your dataset? (Reply Y or N)");
    String seeDataset =
        this.keepPromptingUntilCorrect("Please only respond Y or N", this.validYorN, false);
    if (seeDataset.equalsIgnoreCase("Y")) {
      System.out.println("This is your dataset");
      System.out.println("********************");
      this.parser.print();
      System.out.println("********************");
    }
  }

  /**
   * This helper method will run the search half of the program. The user can enter the word they
   * want to search, pick the type of column identifier, enter the column identifier value, and
   * choose whether they want to do a case-sensitive search.
   *
   * @throws NoHeaderException -- throws new exception from Search object
   * @throws InvalidColumnIdentifierException -- throws new exception from Search object
   * @throws InvalidColumnIdentifierValueException -- throws new exception from Search object
   */
  private void runSearch()
      throws NoHeaderException, InvalidColumnIdentifierException,
          InvalidColumnIdentifierValueException {
    Scanner myScanner = new Scanner(System.in);

    // Asks user to enter word they want to search
    System.out.println("Please enter the WORD you want to search");
    this.toSearch = myScanner.nextLine();

    // Asks user to enter a column identifier type:
    String userIdentifier = "";

    // If the CSV has headers, users can pick from NONE, NAME or INDEX (will keep prompting until
    // valid)
    if (this.hasHeaders) {
      System.out.println("What is your column identifier?");
      System.out.println(">> Respond NONE for no identifier");
      System.out.println(">> Respond NAME for column name");
      System.out.println(">> Respond INDEX for column index - first column is index 0");

      userIdentifier =
          this.keepPromptingUntilCorrect(
              "Please respond only NONE, NAME, or INDEX", this.validColumnIdentifiersAll, false);
    } else {
      // If the CSV has NO headers, users can pick from NONE or INDEX (will keep prompting until
      // valid)
      System.out.println(">> Respond NONE for no identifier");
      System.out.println(">> Respond INDEX for column index - first column is index 0");

      userIdentifier =
          this.keepPromptingUntilCorrect(
              "Please respond only NONE or Index", this.validColumnIdentifiersNoHeader, false);
    }

    // The user's inputted column identifier will get converted
    // to an enum ColumnIdentifier using the helper method getIdentifierType()
    this.whichIdentifier = this.getIdentifierType(userIdentifier);

    // Then the search continues depending on which identifier type the user picked...
    // If the user picked COLUMN_NAME, they will be asked to enter the column name
    // ---> New search object created
    if (this.whichIdentifier.equals(ColumnIdentifier.COLUMN_NAME)) {
      System.out.println("What is the COLUMN NAME you would like to search from?");
      this.columnIdentifier = myScanner.nextLine();
      this.mySearcher =
          new SearcherComplex(this.parser, this.toSearch, this.whichIdentifier, this.columnIdentifier);

      // If user picked COLUMN_INDEX, they will be asked to enter a column index
      // ---> New search object created
    } else if (this.whichIdentifier.equals(ColumnIdentifier.COLUMN_INDEX)) {
      System.out.println(
          "What is the COLUMN INDEX you would like to search from? (Note: index starts from 0)");
      this.columnIdentifier = myScanner.nextLine();
      this.mySearcher =
          new SearcherComplex(this.parser, this.toSearch, this.whichIdentifier, this.columnIdentifier);

    } else {
      // If user picked NO_IDENTIFIER, they will not get asked anything else
      // ---> New search object created
      this.mySearcher = new SearcherComplex(this.parser, this.toSearch, this.whichIdentifier);
    }

    // Once the search object is created, ask if user wants to search by case sensitivity
    System.out.println("Is your search case sensitive? (Respond Y or N)");
    this.caseSensitive =
        this.keepPromptingUntilCorrect("Please respond only Y or N", this.validYorN, false)
            .equalsIgnoreCase("Y");
  }

  /**
   * This helper method converts user String identifier into enum ColumnIdentifier
   *
   * @param identifier represents string of user identifier (NAME, INDEX, NONE)
   * @return ColumnIdentifier enum of user input (COLUMN_NAME, COLUMN_INDEX, NO_IDENTIFIER)
   */
  private ColumnIdentifier getIdentifierType(String identifier) {
    if (identifier.equalsIgnoreCase("name")) {
      return ColumnIdentifier.COLUMN_NAME;
    } else if (identifier.equalsIgnoreCase("index")) {
      return ColumnIdentifier.COLUMN_INDEX;
    } else {
      return ColumnIdentifier.NO_IDENTIFIER;
    }
  }

  /**
   * Helper method to keep prompting user until they give a correct input to reduce user error
   *
   * @param messageToShow represents message to show if user gives invalid input
   * @param validArgumentList represents the list of valid user inputs
   * @param caseSensitive represents whether check has to be case-sensitive
   * @return String of the first valid user input
   */
  private String keepPromptingUntilCorrect(
      String messageToShow, ArrayList<String> validArgumentList, Boolean caseSensitive) {
    Scanner promptScanner = new Scanner(System.in);
    String userIdentifier = promptScanner.nextLine();

    // keep prompting until user puts valid identifier
    boolean validIdentifier =
        this.checkValidArgument(userIdentifier, validArgumentList, caseSensitive);
    while (!validIdentifier) {
      System.out.println(messageToShow);
      userIdentifier = promptScanner.nextLine();
      validIdentifier = this.checkValidArgument(userIdentifier, validArgumentList, caseSensitive);
    }
    return userIdentifier;
  }

  /**
   * Helper method to check if user put a valid input
   *
   * @param input represents user input
   * @param validArguments represents list of valid arguments
   * @param caseSensitive represents if check has to be case-sensitive
   * @return true if valid input, false otherwise
   */
  private boolean checkValidArgument(
      String input, ArrayList<String> validArguments, Boolean caseSensitive) {
    boolean validArgument = false;
    for (String s : validArguments) {
      if (caseSensitive) {
        validArgument = s.equals(input);
      } else {
        validArgument = s.equalsIgnoreCase(input);
      }
      if (validArgument) {
        return true;
      }
    }
    return false;
  }
}

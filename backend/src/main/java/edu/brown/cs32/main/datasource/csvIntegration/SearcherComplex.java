package edu.brown.cs32.main.datasource.csvIntegration;

import edu.brown.cs32.main.datasource.exceptions.InvalidColumnIdentifierException;
import edu.brown.cs32.main.datasource.exceptions.InvalidColumnIdentifierValueException;
import edu.brown.cs32.main.datasource.exceptions.NoHeaderException;
import java.util.ArrayList;
import java.util.List;

/**
 * This class allows you to search a Parser object for a string. It allows you to choose one of
 * three identifier types: Column Name, Column Index, or No Identifier It allows you to search by
 * case sensitivity or no case sensitivity.
 *
 * @author michelleding
 * @version 15 Sept 2023
 */
public class SearcherComplex {
  /**
   * toParse represents the Parser object containing the parsed CSV to search from The type
   * requirement of the Parser object is List<String>
   */
  Parser<List<String>> toParse;

  /** toSearch represents word you want to search */
  String toSearch;

  /**
   * columnIdentifierType is an enum ColumnIdentifier that can either be COLUMN_NAME, COLUMN_INDEX,
   * or NO_IDENTIFIER
   */
  ColumnIdentifier columnIdentifierType;

  /**
   * columnIdentifier is the String value of the column name or index you want to specify your
   * search with
   */
  String columnIdentifier;

  /**
   * headers is a list of CSV headers - it may or may not be populated depending on whether the CSV
   * has headers
   */
  List<String> headers;

  /**
   * startSearchIndex is the Integer representing where the search begins If there are headers, it
   * will be set to 1. By default, assume no header, and it is set to 0.
   */
  Integer startSearchIndex = 0;

  /**
   * This is the first of two Search constructors. Use this constructor if ColumnIdentifierType is
   * COLUMN_NAME or COLUMN_INDEX because there is one more columnIdentifier field to fill out.
   *
   * @param toParse represents Parser object containing CSV
   * @param toSearch represents String to search
   * @param columnIdentifierType represents type of column identifier (COLUMN_NAME, COLUMN_INDEX)
   * @param columnIdentifier represents the String of the column identifier value (name or index)
   * @throws NoHeaderException if COLUMN_NAME is chosen and the CSV has no header
   * @throws InvalidColumnIdentifierValueException if invalid column names/indices are provided
   * @throws InvalidColumnIdentifierException if NO_IDENTIFIER is selected for this Search object
   *     (use the 2nd constructor for Searches with no identifier)
   */
  public SearcherComplex(
      Parser<List<String>> toParse,
      String toSearch,
      ColumnIdentifier columnIdentifierType,
      String columnIdentifier)
      throws NoHeaderException, InvalidColumnIdentifierValueException,
      InvalidColumnIdentifierException {

    this.toParse = toParse;
    this.toSearch = toSearch;
    this.columnIdentifierType = columnIdentifierType;
    this.columnIdentifier = columnIdentifier;

    // If the CSV has headers, call method populateHeaders()
    // to populate the headers list and update startSearchIndex
    if (this.toParse.hasHeaders()) {
      this.populateHeaders();
    }

    // Then, check if the identifier type & values are valid
    // using method checkValidIdentifierTypeValues()
    this.checkValidIdentifierTypeValues(this.columnIdentifierType, this.columnIdentifier);
  }

  /**
   * This is the second constructor for the Searcher object
   *
   * @param toParse represents Parser object containing CSV
   * @param toSearch represents String to search
   * @param columnIdentifierType represents type of column identifier (NO_IDENTIFIER only)
   * @throws NoHeaderException -- throws new exception from hasHeaders()
   * @throws InvalidColumnIdentifierException if columnIdentifierType is not NO_IDENTIFIER (must use
   *     the first constructor for COLUMN_NAME and COLUMN_INDEX)
   */
  public SearcherComplex(
      Parser<List<String>> toParse, String toSearch, ColumnIdentifier columnIdentifierType)
      throws NoHeaderException, InvalidColumnIdentifierException {
    this.toParse = toParse;
    this.toSearch = toSearch;
    this.columnIdentifierType = columnIdentifierType;
    if (!(this.columnIdentifierType.equals(ColumnIdentifier.NO_IDENTIFIER))) {
      throw new InvalidColumnIdentifierException(
          "Sorry, invalid ColumnIdentifier for this constructor");
    }
    if (this.toParse.hasHeaders()) {
      this.populateHeaders();
    }
  }

  /**
   * This method checks if the identifier type and the value provided are valid - it accounts for
   * several possible edge cases when using search and throws the corresponding exceptions -- If
   * COLUMN_INDEX, index must be an integer, >= 0 and less than the size of the number of columns --
   * If COLUMN_NAME, the CSV must have headers and the name must be an existing header name -- If
   * NO_IDENTIFIER, the identifier value is invalid
   *
   * @param columnIdentifierType represents the enum ColumnIdentifier (COLUMN_NAME, COLUMN_INDEX, or
   *     NO_IDENTIFIER)
   * @param columnIdentifier represents the identifier value (column name or column index)
   * @throws InvalidColumnIdentifierValueException if invalid names/indices are provided
   * @throws NoHeaderException if COLUMN_NAME is chosen and the CSV has no header
   * @throws InvalidColumnIdentifierException if NO_IDENTIFIER is chosen
   */
  private void checkValidIdentifierTypeValues(
      ColumnIdentifier columnIdentifierType, String columnIdentifier)
      throws InvalidColumnIdentifierValueException, NoHeaderException,
          InvalidColumnIdentifierException {
    switch (columnIdentifierType) {
      case COLUMN_INDEX -> {
        int numColumns = this.toParse.getRow(0).size();
        int columnIndex = 0;
        try {
          columnIndex = Integer.parseInt(columnIdentifier);
          // If COLUMN_INDEX is chosen and the value provided is not an integer (e.g. "Index1")
        } catch (NumberFormatException e) {
          throw new InvalidColumnIdentifierValueException("Sorry, your index is invalid");
        }
        // If index is negative or larger than number of columns
        if ((columnIndex < 0) | (columnIndex >= numColumns)) {
          throw new InvalidColumnIdentifierValueException("Sorry, your index out of bounds.");
        }
      }
      case COLUMN_NAME -> {
        // If COLUMN_NAME is chosen and there are no headers, throw NoHeaderException
        if (!this.toParse.hasHeaders()) {
          throw new NoHeaderException();
        }
        // If the column name does not exist, throw InvalidColumnIdentifierValueException
        boolean validHeader = this.headers.contains(columnIdentifier);
        if (!validHeader) {
          throw new InvalidColumnIdentifierValueException("Sorry, there is no such header.");
        }
      }
        // If NO_IDENTIFIER is chosen, the identifier value is automatically invalid
      case NO_IDENTIFIER -> {
        throw new InvalidColumnIdentifierException(
            "You indicated that there was no column identifier.");
      }
      default -> throw new InvalidColumnIdentifierValueException(
          "Sorry, invalid identifier value.");
    }
  }

  /**
   * This method populates the header list if headers exist and updates startSearchIndex to 1
   * (meaning search skips the header row)
   *
   * @throws NoHeaderException if the CSV does not have headers
   */
  private void populateHeaders() throws NoHeaderException {
    try {
      this.headers = this.toParse.getHeaders();
      this.startSearchIndex = 1;
    } catch (edu.brown.cs32.main.exceptions.NoHeaderException e) {
      throw new NoHeaderException();
    }
  }

  /**
   * This method searches for the String and accommodates case sensitivity
   *
   * @param caseSensitive boolean representing whether the user wants a case-sensitive search
   * @return an ArrayList representing results of the search, empty if no results found
   */
  public ArrayList<List<String>> search(boolean caseSensitive) {
    return switch (this.columnIdentifierType) {
        // If search by COLUMN_NAME, call helper method searchByHeaderName()
      case COLUMN_NAME -> this.searchByHeaderName(
          this.columnIdentifier, this.toSearch, caseSensitive);

        // If search by COLUMN_INDEX, call helper method searchByIndex()
      case COLUMN_INDEX -> this.searchByIndex(
          Integer.valueOf(this.columnIdentifier), this.toSearch, caseSensitive);

        // If search by NO_IDENTIFIER, call helper method searchAll()
      case NO_IDENTIFIER -> this.searchAll(this.toSearch, caseSensitive);
    };
  }

  /**
   * This helper method searches the CSV by header name
   *
   * @param headerName represents name of the header to search from
   * @param toSearch represents string to search
   * @param caseSensitive represents whether search is case-sensitive
   * @return an ArrayList representing results of the search, empty if no results found
   */
  private ArrayList<List<String>> searchByHeaderName(
      String headerName, String toSearch, boolean caseSensitive) {

    // get index of the header then call helper method searchByIndex()
    Integer indexToSearch = this.headers.indexOf(headerName);
    return this.searchByIndex(indexToSearch, toSearch, caseSensitive);
  }

  /**
   * This helper method searches the CSV by column index
   *
   * @param index represents column index to search from
   * @param toSearch represents string to search
   * @param caseSensitive represents whether search is case-sensitive
   * @return an ArrayList representing results of the search, empty if no results found
   */
  private ArrayList<List<String>> searchByIndex(
      Integer index, String toSearch, boolean caseSensitive) {

    // Create empty searchContent array list
    ArrayList<List<String>> searchContent = new ArrayList<>();

    // For each row in the CSV in the Parser object...
    for (int j = this.startSearchIndex; j < this.toParse.getNumRows(); j++) {

      // For each element in the row...
      List<String> currentRow = this.toParse.getRow(j);

      // Check if the element equals to the toSearch element
      // helper method wordMatch is called to accommodate case-sensitivity
      if (this.wordMatch(caseSensitive, toSearch, currentRow.get(index))) {

        // If terms equal, add row to searchContent
        searchContent.add(currentRow);
      }
    }
    return searchContent;
  }

  /**
   * This helper method searches the entire CSV without identifier
   *
   * @param toSearch represents string to search
   * @param caseSensitive represents whether search is case-sensitive
   * @return an ArrayList representing results of the search, empty if no results found
   */
  private ArrayList<List<String>> searchAll(String toSearch, boolean caseSensitive) {
    ArrayList<List<String>> searchContent = new ArrayList<>();

    // Store whether each row has been added yet
    boolean rowAdded = false;

    // For each row in the CSV...
    for (int j = this.startSearchIndex; j < this.toParse.getNumRows(); j++) {
      List<String> currentRow = this.toParse.getRow(j);
      int i = 0;

      // Run through each term in the row and add the row if terms match and row has not been added
      while ((!rowAdded) && i < currentRow.size()) {
        if (this.wordMatch(caseSensitive, toSearch, currentRow.get(i))) {
          searchContent.add(currentRow);
          rowAdded = true;
        }
        i++;
      }
      rowAdded = false;
    }
    return searchContent;
  }

  /**
   * This helper method checks if the two strings match given case-sensitivity field
   *
   * @param caseSensitive represents whether search is case-sensitive
   * @param toSearch represents string to search
   * @param toMatch represents string to match
   * @return true if equal, false if not equal
   */
  private boolean wordMatch(boolean caseSensitive, String toSearch, String toMatch) {
    if (caseSensitive) {
      return toSearch.equals(toMatch);
    } else return toSearch.equalsIgnoreCase(toMatch);
  }

  /**
   * This method prints the results of a search
   *
   * @param caseSensitive represents whether search is case-sensitive
   */
  public void printSearch(boolean caseSensitive) {
    ArrayList<List<String>> searchContent = this.search(caseSensitive);
    for (List<String> rowList : searchContent) {
      for (String s : rowList) {
        System.out.print(s + " ");
      }
      System.out.println();
    }
  }
}

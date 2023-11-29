package edu.brown.cs32.main.datasource.exceptions;

/** This is an exception that is raised when a ColumnIdentifier object is invalid */
public class InvalidColumnIdentifierException extends Exception {

  String message;

  public InvalidColumnIdentifierException(String message) {
    this.message = message;
  }

  @Override
  public String getMessage() {
    return this.message;
  }
}

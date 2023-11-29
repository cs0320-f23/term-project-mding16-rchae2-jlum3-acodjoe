package edu.brown.cs32.main.datasource.exceptions;

public class InvalidColumnIdentifierValueException extends Exception {

  /** This is an exception that occurs when the column identifier value is invalid. */
  String message;

  public InvalidColumnIdentifierValueException(String message) {
    this.message = message;
  }

  @Override
  public String getMessage() {
    return this.message;
  }
}

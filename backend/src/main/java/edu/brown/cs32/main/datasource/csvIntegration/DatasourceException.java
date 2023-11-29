package edu.brown.cs32.main.datasource.csvIntegration;

/**
 * This is the class to deal with all datasource related exceptions
 */
public class DatasourceException extends Exception {
  private final Throwable cause;

  /**
   * This is the constructor for datasource exception
   *
   * @param message
   */
  public DatasourceException(String message) {
    super(message);
    this.cause = null;
  }

}


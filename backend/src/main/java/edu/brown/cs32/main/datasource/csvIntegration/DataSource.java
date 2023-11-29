package edu.brown.cs32.main.datasource.csvIntegration;


import edu.brown.cs32.main.datasource.ACSdatasource.CensusData;

/**
 * This is the interface to deal with datasource
 */
public interface DataSource {
   CensusData search(String state, String county) throws DatasourceException;

}

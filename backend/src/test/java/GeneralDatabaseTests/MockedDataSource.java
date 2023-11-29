package GeneralDatabaseTests;

import edu.brown.cs32.main.datasource.ACSdatasource.CensusData;
import edu.brown.cs32.main.datasource.csvIntegration.DataSource;
import edu.brown.cs32.main.datasource.csvIntegration.DatasourceException;

/** unit test for mocked data source */
public class MockedDataSource implements DataSource {

    private final CensusData censusData;

    /**
     * Constructor that initializes the instance variable censusData
     * @param censusData - to mock
     */
    public MockedDataSource(CensusData censusData) {
      this.censusData = censusData;
    }

    /**
     * Return the census data
     *
     * @param state - state string
     * @param county - county string
     * @return - censusData
     * @throws DatasourceException - when it doesn't work properly
     */
    @Override
    public CensusData search(String state, String county) throws DatasourceException{
      return this.censusData;
    }
}

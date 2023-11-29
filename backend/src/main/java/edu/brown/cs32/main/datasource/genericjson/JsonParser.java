package edu.brown.cs32.main.datasource.genericjson;

import com.squareup.moshi.JsonAdapter;
import com.squareup.moshi.Moshi;
import com.squareup.moshi.Types;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.Reader;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class JsonParser {
  private Reader reader;
  private Map<String, Object> ParsedJson;

  public JsonParser(Reader reader){
    this.reader = reader;
  }

  public Map<String, Object> parseJson(){
    try (BufferedReader br = new BufferedReader(this.reader)) {
      String jsonString = "";
      String line = br.readLine();
      while (line != null) {
        jsonString = jsonString + line;
        line = br.readLine();
      }
      this.reader.close();
      Moshi moshi = new Moshi.Builder().build();
      Type type = Types.newParameterizedType(Map.class, String.class, Object.class);
      JsonAdapter<Map<String, Object>> adapter = moshi.adapter(type);
      this.ParsedJson = adapter.fromJson(jsonString);
      /*
      #TODO:
      - Swap the
      Type type = Types.newParameterizedType(Map.class, String.class, Object.class);
      JsonAdapter<Map<String, Object>> adapter = moshi.adapter(type);
      with geoMapAdaptor

      - Update geomap adaptor
      - Filter the stuff by 4 parameters
       */
    } catch (IOException e) {
      System.out.println(e.getMessage());
    }
    return this.ParsedJson;
  }


}

package edu.brown.cs32.main.buildCourse;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/*
 * Class that holds all of the recipes and levels for each region
 */
public class Region{
  private List<ParsedRecipe> recipeList;
  private String region;

  public Region(String region, List<ParsedRecipe> recipeList){
    this.region = region;
    this.recipeList = recipeList;
  }

  /*
   * Function that calculates the number of levels for each region
   */
  public Map<String, List<String>> levelSort() {
    Map<String, List<String>> diff = this.difficultySort();
    Map<String, List<String>> output = new HashMap<>();

    int levelCount = 1;
    int counter = 0;
    for (Map.Entry<String, List<String>> entry : diff.entrySet()) {
      List<String> recipes = entry.getValue();
      for (String recipe : recipes) {
        if (output.containsKey(String.valueOf(levelCount))) {
          output.get(String.valueOf(levelCount)).add(recipe);
        } else {
          output.put(String.valueOf(levelCount), new ArrayList<>(List.of(recipe)));
        }
        counter += 1;
        if (counter == 3) {
          counter = 0;
          levelCount += 1;
        }
      }
    }
    return output;
  }


/*
 * Function that sorts the recipes based on the difficulty scores 
 */
  public Map<String, List<String>> difficultySort() {
    Map<String, List<String>> output = new HashMap<>();
    for (ParsedRecipe recipe : this.recipeList) {
      if (output.containsKey(String.valueOf(recipe.difficultyScore))) {
        output.get(String.valueOf(recipe.difficultyScore)).add(recipe.name);
      } else {
        output.put(String.valueOf(recipe.difficultyScore), new ArrayList<>(List.of(recipe.name)));
      }
    }
    return output;
  }

  public List<ParsedRecipe> getRecipeList() {
    return this.recipeList;
  }

  public String getRegion() {
    return this.region;
  }

  /*
   * Function to print out what each region looks like
   */
  @Override
  public String toString() {
    return "Region{" + this.region + '}';
  }

}
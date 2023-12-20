package edu.brown.cs32.main.buildCourse;

import edu.brown.cs32.main.buildCourse.MoshiObjects.SubMeal;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;
import java.util.List;

/*
 * Class that contains the final recipe object with parameters necessary for each recipe in the frontend 
 */
public class ParsedRecipe {
  public String name;
  public int difficultyScore;
  public List<String> instructions;
  public List<String> ingredients;
  public String image;

  public ParsedRecipe(Recipe recipe) throws NoSuchFieldException, IllegalAccessException {
    this.name = recipe.strMeal;
    this.instructions = this.parseInstructions(recipe.strInstructions);
    this.image = recipe.strImageSource;
    this.ingredients = recipe.parseIngredients();
    this.difficultyScore = this.calculateDiff(this.instructions, this.ingredients);
  }

  /*
   * Function that calculates the difficulty score for each recipe to sort
   */
  public int calculateDiff(List<String> instructions, List<String> ingredients){
    return instructions.size() * 2 / ingredients.size();
  }

  /*
   * Function that goes through each sentence in the string of instructions to parse into a list of strings
   */
  public List<String> parseInstructions(String strInstructions) {
    String cleanInstructions = strInstructions.replaceAll("[\\r\\n]", "").replaceAll("\u00bc", "").replaceAll("\\u2153", "");
    String[] list = strInstructions.split("\\."); // confirm this works
    ArrayList<String> instruction = new ArrayList<>(Arrays.asList(list));
    return instruction;
  }

  /*
   * Function used for testing to print out what our recipe object will look like 
   */
  @Override
  public String toString() {
    return "Recipe{" +
        "name=" + name +
        ", difficultyScore=" + difficultyScore +
        ", instructions=" + instructions +
        ", ingredients=" + ingredients +
        ", image='" + image + '\'' +
        '}';
  }
}
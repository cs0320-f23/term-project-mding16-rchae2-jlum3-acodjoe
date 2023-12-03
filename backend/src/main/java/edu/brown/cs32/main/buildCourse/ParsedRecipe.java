package edu.brown.cs32.main.buildCourse;

import edu.brown.cs32.main.buildCourse.MoshiObjects.SubMeal;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;
import java.util.List;

public class ParsedRecipe {
  private int difficultyScore;
  private List<String> instructions;

  private List<String> ingredients;
  private String image;

  public ParsedRecipe(Recipe recipe) throws NoSuchFieldException, IllegalAccessException {
    this.instructions = this.parseInstructions(recipe.strInstructions);
    this.image = recipe.strImageSource;
    this.ingredients = recipe.parseIngredients();
    this.difficultyScore = this.calculateDiff(this.instructions, this.ingredients);
  }

//  public static ParsedRecipe parseRecipe(Recipe recipe)
//      throws NoSuchFieldException, IllegalAccessException {
////    ParsedRecipe parsedRecipe = new ParsedRecipe(recipe);
////    parsedRecipe.instructions = parsedRecipe.parseInstructions(recipe.strInstructions);
////    parsedRecipe.image = recipe.strImageSource;
////    parsedRecipe.ingredients = parsedRecipe.parseIngredients();
////    parsedRecipe.difficultyScore = parsedRecipe.calculateDiff(parsedRecipe.instructions, parsedRecipe.ingredients);
//    return parsedRecipe;
//  }


  public int calculateDiff(List<String> instructions, List<String> ingredients){
    return instructions.size() * 2 / ingredients.size();
  }

  public List<String> parseInstructions(String strInstructions) {
    String cleanInstructions = strInstructions.replaceAll("[\\r\\n]", "").replaceAll("\u00bc", "").replaceAll("\\u2153", "");
    String[] list = strInstructions.split("\\."); // confirm this works
    ArrayList<String> instruction = new ArrayList<>(Arrays.asList(list));
    return instruction;

  }
  @Override
  public String toString() {
    return "Recipe{" +
        "difficultyScore=" + difficultyScore +
        ", instructions=" + instructions +
        ", ingredients=" + ingredients +
        ", image='" + image + '\'' +
        '}';
  }
}
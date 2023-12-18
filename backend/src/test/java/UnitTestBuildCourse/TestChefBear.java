package UnitTestBuildCourse;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import edu.brown.cs32.main.buildCourse.*;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

public class TestChefBear{
  public TestChefBear(){}


  @Test
  public void testPopulateMap(){
    ChefBear bear = new ChefBear();
    bear.callPopulateMap();
    // HashMap<String, List<String>>
    assertTrue(bear.getRegionToCountry().get("Asian").equals(
        List.of("Japanese", "Chinese", "Indian", "Vietnamese", "Thai", "Filipino", "Malaysian")));

    assertTrue(bear.getRegionToCountry().get("European").equals(
        List.of("French", "Italian", "British", "Croatian", "Dutch", "Irish", "Spanish", "Polish", "Portugese", "Turkish", "Greek", "Russian")));

    assertTrue(bear.getRegionToCountry().get("AfriCarib").equals(
        List.of("Jamaican", "Egyptian", "Moroccan", "Kenyan", "Tunisian")));

  }

  @Test
  public void testProcessRecipeNul(){
    // null
    ChefBear bear = new ChefBear();
    ParsedRecipe nullRecipe = null;
    assertEquals(bear.getRegionToCountry(),  bear.testProcessRecipeHelper("Asia", nullRecipe));
  }

  @Test
  public void testProcessRecipeAddToList() throws NoSuchFieldException, IllegalAccessException {
    // added recipe
    ChefBear bear = new ChefBear();
    Recipe addedRecipe = new Recipe();
    addedRecipe.strMeal = "banana";
    addedRecipe.strInstructions = "null";
    addedRecipe.strImageSource = "banana image";
    addedRecipe.strIngredient1 = "fruit";

    //pparsed recipe
    ParsedRecipe recipe = new ParsedRecipe(addedRecipe);
    //bear.testProcessRecipeHelper("Asia", recipe).get("Asia");
    ArrayList<ParsedRecipe> list = new ArrayList<ParsedRecipe>();
    list.add(recipe);
    assertEquals(list, bear.testProcessRecipeHelper("Asia", recipe).get("Asia"));
  }



  @Test
  public void testProcessRecipeAddToListAlreadyThere() throws NoSuchFieldException, IllegalAccessException {
    // added recipe
    ChefBear bear = new ChefBear();
    Recipe addedRecipe = new Recipe();
    addedRecipe.strMeal = "meat patty";
    addedRecipe.strInstructions = "null";
    addedRecipe.strImageSource = "meat image";
    addedRecipe.strIngredient1 = "fruit";

    Recipe addedRecipe2 = new Recipe();
    addedRecipe2.strMeal = "escovitch fish";
    addedRecipe2.strInstructions = "null";
    addedRecipe2.strImageSource = "fish image";
    addedRecipe2.strIngredient1 = "fish, veggies";

    //pparsed recipe
    ParsedRecipe recipe = new ParsedRecipe(addedRecipe);
    ParsedRecipe recipe2 = new ParsedRecipe(addedRecipe2);
    ArrayList<ParsedRecipe> list = new ArrayList<ParsedRecipe>();
    list.add(recipe);
    list.add(recipe2);
    bear.testProcessRecipeHelper("Africa", recipe);


    assertEquals(list, bear.testProcessRecipeHelper("Africa", recipe2).get("Africa"));
  }

}

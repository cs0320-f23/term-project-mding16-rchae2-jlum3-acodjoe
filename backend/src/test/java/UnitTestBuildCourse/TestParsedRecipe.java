package UnitTestBuildCourse;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import edu.brown.cs32.main.buildCourse.*;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;
public class TestParsedRecipe {

  @Test
  public void testParseInstruction() throws NoSuchFieldException, IllegalAccessException {
    Recipe addedRecipe2 = new Recipe();
    addedRecipe2.strMeal = "escovitchFish";
    addedRecipe2.strInstructions = "null";
    addedRecipe2.strImageSource = "fish image";
    addedRecipe2.strIngredient1 = "fish, veggies";
    ParsedRecipe recipe2 = new ParsedRecipe(addedRecipe2);

    String testString = "hello.my.name";
    List<String> expectedResult = List.of("hello", "my", "name"); // use list of
    assertEquals(recipe2.parseInstructions(testString), expectedResult);
  }

  @Test
  public void testToString() throws NoSuchFieldException, IllegalAccessException {
    Recipe addedRecipe2 = new Recipe();
    addedRecipe2.strMeal = "escovitchFish";
    addedRecipe2.strInstructions = "null";
    addedRecipe2.strImageSource = "fish image";
    addedRecipe2.strIngredient1 = "fish, veggies";

    ParsedRecipe recipe2 = new ParsedRecipe(addedRecipe2);

    String expected = "Recipe{name=escovitchFish, difficultyScore=2, instructions=[null], ingredients=[fish, veggies], image='fish image'}";
    assertEquals(recipe2.toString(), expected);
  }

}

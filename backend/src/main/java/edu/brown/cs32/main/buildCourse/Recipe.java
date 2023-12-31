package edu.brown.cs32.main.buildCourse;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

/*
 * Recipe object that is used as an intermediary object between the JSON object 
 * from the API call, which will be later parsed properly into the ParsedRecipe object.
 */
public class Recipe {
  public String idMeal;
  public String strMeal;
  public String strDrinkAlternate;
  public String strCategory;
  public String strArea;
  public String strInstructions;
  public String strMealThumb;
  public String strTags;
  public String strYoutube;
  public String strIngredient1;
  public String strIngredient2;
  public String strIngredient3;
  public String strIngredient4;
  public String strIngredient5;
  public String strIngredient6;
  public String strIngredient7;
  public String strIngredient8;
  public String strIngredient9;
  public String strIngredient10;
  public String strIngredient11;
  public String strIngredient12;
  public String strIngredient13;
  public String strIngredient14;
  public String strIngredient15;
  public String strIngredient16;
  public String strIngredient17;
  public String strIngredient18;
  public String strIngredient19;
  public String strIngredient20;
  public String strMeasure1;
  public String strMeasure2;
  public String strMeasure3;
  public String strMeasure4;
  public String strMeasure5;
  public String strMeasure6;
  public String strMeasure7;
  public String strMeasure8;
  public String strMeasure9;
  public String strMeasure10;
  public String strMeasure11;
  public String strMeasure12;
  public String strMeasure13;
  public String strMeasure14;
  public String strMeasure15;
  public String strMeasure16;
  public String strMeasure17;
  public String strMeasure18;
  public String strMeasure19;
  public String strMeasure20;
  public String strSource;
  public String strImageSource;
  public String strCreativeCommonsConfirmed;
  public String dateModified;

  public Recipe() {

  }

  /*
   * Parsing through all of the strMeasure fields and making it into one field 
   */
  public List<String> parseIngredients() throws NoSuchFieldException, IllegalAccessException {
    List<String> ingredients = new ArrayList<>();
    for (int i = 1; i <= 20; i++) {
      // Source: Used to parse through the strMeasure(Num) fields   
      // https://stackoverflow.com/questions/10638826/java-reflection-impact-of-setaccessibletrue
      Field field = getClass().getDeclaredField("strIngredient" + i );
      field.setAccessible(true);
      String ingredient =  (String) field.get(this);
      if (ingredient != null){
        ingredients.add(ingredient);
      }
    }
    return ingredients;
  }

  /*
   * Function that prints out the intermediary object to ensure that moshi object 
   * is populated into this Recipe object correctly
   */
  @Override
  public String toString() {
    return "Recipe{" +
        "idMeal='" + idMeal + '\'' +
        ", strMeal='" + strMeal + '\'' +
        ", strDrinkAlternate='" + strDrinkAlternate + '\'' +
        ", strCategory='" + strCategory + '\'' +
        ", strArea='" + strArea + '\'' +
        ", strInstructions='" + strInstructions + '\'' +
        ", strMealThumb='" + strMealThumb + '\'' +
        ", strTags='" + strTags + '\'' +
        ", strYoutube='" + strYoutube + '\'' +
        ", strIngredient1='" + strIngredient1 + '\'' +
        ", strIngredient2='" + strIngredient2 + '\'' +
        ", strIngredient3='" + strIngredient3 + '\'' +
        ", strIngredient4='" + strIngredient4 + '\'' +
        ", strIngredient5='" + strIngredient5 + '\'' +
        ", strIngredient6='" + strIngredient6 + '\'' +
        ", strIngredient7='" + strIngredient7 + '\'' +
        ", strIngredient8='" + strIngredient8 + '\'' +
        ", strIngredient9='" + strIngredient9 + '\'' +
        ", strIngredient10='" + strIngredient10 + '\'' +
        ", strIngredient11='" + strIngredient11 + '\'' +
        ", strIngredient12='" + strIngredient12 + '\'' +
        ", strIngredient13='" + strIngredient13 + '\'' +
        ", strIngredient14='" + strIngredient14 + '\'' +
        ", strIngredient15='" + strIngredient15 + '\'' +
        ", strIngredient16='" + strIngredient16 + '\'' +
        ", strIngredient17='" + strIngredient17 + '\'' +
        ", strIngredient18='" + strIngredient18 + '\'' +
        ", strIngredient19='" + strIngredient19 + '\'' +
        ", strIngredient20='" + strIngredient20 + '\'' +
        ", strMeasure1='" + strMeasure1 + '\'' +
        ", strMeasure2='" + strMeasure2 + '\'' +
        ", strMeasure3='" + strMeasure3 + '\'' +
        ", strMeasure4='" + strMeasure4 + '\'' +
        ", strMeasure5='" + strMeasure5 + '\'' +
        ", strMeasure6='" + strMeasure6 + '\'' +
        ", strMeasure7='" + strMeasure7 + '\'' +
        ", strMeasure8='" + strMeasure8 + '\'' +
        ", strMeasure9='" + strMeasure9 + '\'' +
        ", strMeasure10='" + strMeasure10 + '\'' +
        ", strMeasure11='" + strMeasure11 + '\'' +
        ", strMeasure12='" + strMeasure12 + '\'' +
        ", strMeasure13='" + strMeasure13 + '\'' +
        ", strMeasure14='" + strMeasure14 + '\'' +
        ", strMeasure15='" + strMeasure15 + '\'' +
        ", strMeasure16='" + strMeasure16 + '\'' +
        ", strMeasure17='" + strMeasure17 + '\'' +
        ", strMeasure18='" + strMeasure18 + '\'' +
        ", strMeasure19='" + strMeasure19 + '\'' +
        ", strMeasure20='" + strMeasure20 + '\'' +
        ", strSource='" + strSource + '\'' +
        ", strImageSource='" + strImageSource + '\'' +
        ", strCreativeCommonsConfirmed='" + strCreativeCommonsConfirmed + '\'' +
        ", dateModified='" + dateModified + '\'' +
        '}';
  }
}

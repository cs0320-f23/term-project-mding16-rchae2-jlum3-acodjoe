package edu.brown.cs32.main.buildCourse.MoshiObjects;

import edu.brown.cs32.main.buildCourse.Recipe;
import java.util.List;

public class RecipeWrapper {
  public List<Recipe> meals;

  RecipeWrapper(List<Recipe> s){
    this.meals = s;
  }

}

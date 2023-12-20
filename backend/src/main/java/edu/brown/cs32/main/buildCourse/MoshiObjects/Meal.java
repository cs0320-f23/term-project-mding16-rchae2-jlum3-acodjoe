package edu.brown.cs32.main.buildCourse.MoshiObjects;
import edu.brown.cs32.main.buildCourse.MoshiObjects.SubMeal;
import java.util.List;

/*
 * Intermediary object class from the moshi object that holds the list of submeals
 */
public class Meal{
  public List<SubMeal> meals;

  public Meal(){}

  @Override
  public String toString() {
    return "Meal{" +
        "meals=" + meals +
        '}';
  }




}
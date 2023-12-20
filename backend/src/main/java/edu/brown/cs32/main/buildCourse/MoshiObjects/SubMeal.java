package edu.brown.cs32.main.buildCourse.MoshiObjects;

/*
 * Intermediary object class from the moshi object that holds the information of each meal
 */
public class SubMeal{
  public String strMeal;
  public String strMealThumb;
  public String idMeal;
  public SubMeal(){
  }

  @Override
  public String toString() {
    return "SubMeal{" +
        "strMeal='" + strMeal + '\'' +
        ", strMealThumb='" + strMealThumb + '\'' +
        ", idMeal='" + idMeal + '\'' +
        '}';
  }


}
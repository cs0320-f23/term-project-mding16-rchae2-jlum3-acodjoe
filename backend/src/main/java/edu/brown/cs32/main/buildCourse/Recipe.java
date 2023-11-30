package edu.brown.cs32.main.buildCourse;

import java.util.ArrayList;
import java.util.List;

public class Recipe {
  private int dificultyScoree;
  private List<String> instructions;

  private List<String> ingredients;
  private String image;

  public Recipe(List<String> instruction, List<String> ingredients, String image){
    this.ingredients = ingredients;
    this.instructions = instruction;
    this.image = image;
    this.dificultyScoree = this.caclualteDif(instruction, ingredients);
  }

  public int caclualteDif(List<String> instructions, List<String> ingredients){
    return instructions.size() * 2 / ingredients.size();
  }
}
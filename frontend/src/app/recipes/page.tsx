"use client"
import React from "react";
import "./styles.css"
import header from "./images/reciperec.png"
import {SetStateAction, useState} from "react"
import Slider from 'react-slick'
import { Dispatch, useEffect, useContext } from "react";
import { useGlobalContext } from "../context/store";
import {
  getFirestore,
  addDoc,
  collection,
  setDoc,
  doc,
  getDoc,
  updateDoc
} from "firebase/firestore";


type LevelsType = {
  AfriCarib: number;
  Asia: number;
  NorthAm: number;
  Euro: number;
};

interface recipeProps {
  regions: LevelsType;
  selectedRegion: string;
  afriCarib: Map<number, string[]>;
  asian: Map<number, string[]>;
  europe: Map<number, string[]>;
  northAm: Map<number, string[]>;
  setRegions: Dispatch<SetStateAction<LevelsType>>;
}

function Page(props : recipeProps) {
  const [regionMap, setRegionMap] = useState(new Map());
  const [userLevel, setUserLevel] = useState(1);
  const [realRecipeList, setRecipeList] = useState([]);

  useEffect(() => {
    // const selectedString = props.selectedRegion
    console.log("INITIATING RECIPES USER EFFECT LOOP")
    console.log("user level = ", userLevel)
    const mockString = "asian";
    const selectedString = mockString;

    setRegionMap(props.europe)
    setUserLevel(props.regions.Euro)
    // if (selectedString === "afriCarib"){
    //   setRegionMap(props.afriCarib)
    //   setUserLevel(props.regions.AfriCarib)

    // } else if (selectedString === "asian"){
    //   setRegionMap(props.asian)
    //   setUserLevel(props.regions.Asia)

    // } else if (selectedString === "europe"){
    //   setRegionMap(props.europe)
    //   setUserLevel(props.regions.Euro)

    // } else if (selectedString === "northAm"){
    //   setRegionMap(props.northAm)
    //   setUserLevel(props.regions.NorthAm)
    // }

    if (regionMap[userLevel] !== undefined) { // if user level is not undefined for that region 
      for (const recipe of regionMap[userLevel]) { // looping through string[]
        const document = doc(getFirestore(), "recipes", recipe); // getting the recipe from database
        const currRecipe = new Map<String, any>();
        getDoc(document).then((gotRecipe) => { 
          async function mealCall(){
            try{
            // console.log(gotRecipe.data().recipe); // name of recipe
            currRecipe.set("name", gotRecipe.data().recipe)

            // console.log(gotRecipe.data().ingredients); // list of ingredients 
            const ingredientList = gotRecipe.data().ingredients
            const newIngredientList = ingredientList.filter(function(e){{return (e!="")}})
            currRecipe.set("ingredients", newIngredientList)

            // console.log(gotRecipe.data().instructions); // list of instructions 
            currRecipe.set("instructions", gotRecipe.data().instructions)
            console.log("calling meal api", currRecipe.get("name"))

            // populate recipe object with image and cook time 
            const recipeObj = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + currRecipe.get("name"))
            const jsonRecipe = await recipeObj.json();
            currRecipe.set("image", jsonRecipe.meals[0].strMealThumb)
            }
            catch (err){
              console.log("ERROR WITH API:", err)
          }
          }
          mealCall().then(setRecipeList[realRecipeList.push(currRecipe)])
        })
      }
    }
  })

  const headerImg = () => {
    const link = "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAmuhZS3kMQMZm5FiPXzabPsXg4tHI3lE7W2mgdheVTjljrr9xVx3mq_yynrnsrLpjA8mKiCTBaM_vz4Niz2DnejcppGA=s1600"
    return(
      <div id="bluerec">
        <div id="recipetext">
          RECIPES
        </div>
        <div id="redrec"></div>
        <div id="selecttext">
          {"Select one of the following recipes."}
          <br></br>
          {"Once you’ve completed it, select the completed button,\
          and the next level will be unlocked!"}
          <br></br>
          {"Happy cooking! ** NOTE: Recipes might take a minute to load. Please be patient!"}</div>
        </div>
    )
  }

  const completeButton = () => {
    const tickimg = "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBAXgyL4y0Rz3PGYb_0J1ADT1RpLLI402AFlicEo77qsknH93IDPHJCmVjTdlhj0vxlOnZpV_eK2EHXsWbywhXnkrc6DA=s2560"
    return(
      <button id="completebutton">
        <div id="buttontext">
          <img id="tick" src={tickimg} referrerPolicy="no-referrer"></img>
          Completed 
        </div>
        </button>
    )
  }

  const Recipepage = () => {
    console.log("RECIPE PAGE LOADING")
    console.log("RECIPE PAGE: ", realRecipeList)
    // ********* MOCK RECIPE *********
    // const recipe1 = {
    //   name: "Peking Duck",
    //   imagesrc: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDG-l_kXwjgYHiuPrH3mTx0dlkHD8FoJyhOKnm3yJa6qwVUgdyZ_RSXxZtG3ZDOIMCVcynq-ZebjhvAe66jpP-q6Vx6=s1600",
    //   cooktime: "3 hours",
    //   ingredients: ["1 tablespoon soy sauce",
    //   "2 tablespoons honey, divided",
    //   "2 tablespoons, plus 1 teaspoon Chinese five spice, divided",
    //   "2 tablespoons kosher salt",
    //   "2 teaspoons baking soda",
    //   "1 (4-pound) whole air-chilled duck (thawed, if frozen)",
    //   "¼ cup hoisin sauce, plus more for serving",
    //   "8 boiling water, divided",
    //   "For serving: thinly sliced cucumbers, carrots, and scallions, steamed buns or Mandarin pancakes"],
    //   instructions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed doloremque minus repellendus ipsam, ratione perspiciatis esse ducimus modi amet dolor dicta in et voluptatum maxime iusto. Dolores quasi aut numquam!"
    // }

    // const recipelist = [recipe1, recipe1, recipe1]

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        className: "center",
        dots: false,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        speed: 500,
        beforeChange: (current: any, next: any) => setImageIndex(next)
    }

    /** CITE - carousel package + tutorial - react-slick
     * https://react-slick.neostack.com/docs/get-started  
     * https://www.youtube.com/watch?v=odSfSAoUREU
     * */
    
    return(
      <div id="recipeslider">
        <Slider {...settings}
        >
          {
            realRecipeList.map((recipe, idx) => 
            <div id="recipecontainer" className={idx===imageIndex? "slide activeSlide": "slide"} key={idx}>
              <div id="rtext">
                <div id="recipename">{recipe.get("name")}</div>
                {/* <div id="recipebody"><b>Cook Time:</b> {recipe.cooktime}</div> */}
                <div id="recipebody">
                  <b>Ingredients:</b>
                  {recipe.get("ingredients").map((item, index) => 
                      (<li key={index}>{item}</li>))}
                </div>
                <div id="recipebody">
                  <b>Instructions:</b>
                  <br></br>
                  {recipe.get("instructions").map((item, index) => 
                      (<li key={index}>{item}</li>))}
                  </div>
              </div>
              <div id="rimgcontainer">
                <img id="rimg" src={recipe.get("image")}></img>
              </div>
            </div>)
          }
        </Slider>
      </div>
    )
  }

    return (
      <div id="recipepage">
        {headerImg()}
        {Recipepage()}
        {completeButton()}
      </div>
      )
}

export default Page;
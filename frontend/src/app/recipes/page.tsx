"use client";
import React from "react";
import "./styles.css";
import header from "./images/reciperec.png";
import { SetStateAction, useState } from "react";
import Slider from "react-slick";
import { Dispatch, useEffect, useContext } from "react";
import { useGlobalContext } from "../context/store";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loggedIn } from "../../Atom.tsx";

import {
  getFirestore,
  addDoc,
  collection,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
/**
 * a data type that dictates the type of level we are on
 */
type LevelsType = {
  AfriCarib: number;
  Asia: number;
  NorthAm: number;
  Euro: number;
};
/**
 * an interface defining relevant shared props throughout the code (fed form app.tsx)
 */
interface recipeProps {
  currentUserID: string;
  regions: LevelsType;
  selectedRegion: string;
  afriCarib: Map<number, string[]>;
  asian: Map<number, string[]>;
  europe: Map<number, string[]>;
  northAm: Map<number, string[]>;
  setRegions: Dispatch<SetStateAction<LevelsType>>;
  levelClicked: number;
}
/**
 * 
 * @param props relevant shared props throughout the code (fed form app.tsx)
 * @returns the recipes page
 */
function Page(props: recipeProps) {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [regionMap, setRegionMap] = useState(new Map());
  const [userLevel, setUserLevel] = useState(0);
  const [realRecipeList, setRecipeList] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedRegionStr, setSelectedRegionStr] = useState("");

  const isLoggedIn = useRecoilValue(loggedIn); // determines login staus
  const setLoggedIn = useSetRecoilState(loggedIn); // sets login staus  

  const nav = useNavigate();

  // ensures user is logged in e=beofre proceeding 
  if (isLoggedIn === false) {
    nav("/");
  }

  // sets the selected region accordingly
  useEffect(() => {
    // const selectedString = props.selectedRegion
    console.log("INITIATING RECIPES USER EFFECT LOOP");
    console.log("user level = ", userLevel);
    const selectedString = props.selectedRegion;
    console.log(selectedString);
    console.log("this is the clickedLevel", props.levelClicked);
    console.log("hi");
    // setRegionMap(props.asian) // change when everything is integrated
    // setUserLevel(props.regions.Asia) // change when everything is integrated
    if (selectedString === "AfriCarib") {
      setRegionMap(props.afriCarib);
      if (props.levelClicked !== props.regions.AfriCarib) {
        setUserLevel(props.levelClicked);
      } else {
        setUserLevel(props.regions.AfriCarib);
      }
      setSelectedRegion("afriCarib");
      setSelectedRegionStr("Africa + Caribbean");
    } else if (selectedString === "Asia") {
      setRegionMap(props.asian);
      if (props.levelClicked !== props.regions.Asia) {
        setUserLevel(props.levelClicked);
      } else {
        setUserLevel(props.regions.Asia);
      }
      setSelectedRegion("asian");
      setSelectedRegionStr("Asia");
    } else if (selectedString === "Euro") {
      setRegionMap(props.europe);
      if (props.levelClicked !== props.regions.Euro) {
        setUserLevel(props.levelClicked);
      } else {
        setUserLevel(props.regions.Euro);
      }
      setSelectedRegion("europe");
      setSelectedRegionStr("Europe");
    } else if (selectedString === "NorthAm") {
      setRegionMap(props.northAm);
      if (props.levelClicked !== props.regions.NorthAm) {
        setUserLevel(props.levelClicked);
      } else {
        setUserLevel(props.regions.NorthAm);
      }
      setSelectedRegion("northAm");
      setSelectedRegionStr("North America");
    }

    if (regionMap[userLevel] !== undefined) {
      // if user level is not undefined for that region
      for (const recipe of regionMap[userLevel]) {
        // looping through string[]
        const document = doc(getFirestore(), "recipes", recipe); // getting the recipe from database
        const currRecipe = new Map<String, any>();
        getDoc(document).then((gotRecipe) => {
          async function mealCall() {
            try {
              // console.log(gotRecipe.data().recipe); // name of recipe
              currRecipe.set("name", gotRecipe.data().recipe);

              // console.log(gotRecipe.data().ingredients); // list of ingredients
              const ingredientList = gotRecipe.data().ingredients;
              const newIngredientList = ingredientList.filter(function (e) {
                {
                  return e != "";
                }
              });
              currRecipe.set("ingredients", newIngredientList);

              // console.log(gotRecipe.data().instructions); // list of instructions
              currRecipe.set("instructions", gotRecipe.data().instructions);
              console.log("calling meal api", currRecipe.get("name"));

              // populate recipe object with image and cook time
              const recipeObj = await fetch(
                "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
                  currRecipe.get("name")
              );
              const jsonRecipe = await recipeObj.json();
              currRecipe.set("image", jsonRecipe.meals[0].strMealThumb);
            } catch (err) {
              console.log("ERROR WITH API:", err);
            }
            setDataLoaded(true);
          }
          mealCall().then(setRecipeList[realRecipeList.push(currRecipe)]);
        });
      }
    }
  });

  const headerImg = () => {
    const link =
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAmuhZS3kMQMZm5FiPXzabPsXg4tHI3lE7W2mgdheVTjljrr9xVx3mq_yynrnsrLpjA8mKiCTBaM_vz4Niz2DnejcppGA=s1600";
    return (
      <div id="bluerec">
        <div id="recipetext">
          <a>
            <img
              src="./Vector.png"
              id="arrow"
              width={25}
              height={40}
              onClick={() => nav(`/levels/${props.selectedRegion}`)}
            />
          </a>
          RECIPES
        </div>
        <div id="redrec"></div>
        <div id="recipetext">
          LEVEL {userLevel}, {selectedRegionStr}
        </div>
      </div>
    );
  };
  const navigate = useNavigate();

  function completedClick(): void {
    //update the database
    console.log("old region", props.regions);

    if (selectedRegion === "afriCarib") {
      if (props.levelClicked === props.regions.AfriCarib) {
        props.setRegions({
          ...props.regions,
          AfriCarib: props.regions.AfriCarib + 1,
        });
        const fieldsToUpdate = {
          regions: {
            ...props.regions,
            AfriCarib: props.regions.AfriCarib + 1,
          },
        };
        updateDoc(
          doc(getFirestore(), "users", props.currentUserID),
          fieldsToUpdate
        );
      }
      navigate("/levels/AfriCarib");
    } else if (selectedRegion === "asian") {
      if (props.levelClicked === props.regions.Asia) {
        props.setRegions({
          ...props.regions,
          Asia: props.regions.Asia + 1,
        });
        const fieldsToUpdate = {
          regions: {
            ...props.regions,
            Asia: props.regions.Asia + 1,
          },
        };
        updateDoc(
          doc(getFirestore(), "users", props.currentUserID),
          fieldsToUpdate
        );
      }
      navigate("/levels/Asia");
    } else if (selectedRegion === "europe") {
      if (props.levelClicked === props.regions.Euro) {
        props.setRegions({
          ...props.regions,
          Euro: props.regions.Euro + 1,
        });
        const fieldsToUpdate = {
          regions: {
            ...props.regions,
            Euro: props.regions.Euro + 1,
          },
        };
        updateDoc(
          doc(getFirestore(), "users", props.currentUserID),
          fieldsToUpdate
        );
      }
      navigate("/levels/Euro");
    } else if (selectedRegion === "northAm") {
      if (props.levelClicked === props.regions.NorthAm) {
        props.setRegions({
          ...props.regions,
          NorthAm: props.regions.NorthAm + 1,
        });
        const fieldsToUpdate = {
          regions: {
            ...props.regions,
            NorthAm: props.regions.NorthAm + 1,
          },
        };
        updateDoc(
          doc(getFirestore(), "users", props.currentUserID),
          fieldsToUpdate
        );
      }
      navigate("/levels/NorthAM");
    }
    console.log("new region", props.regions);
  }

  const completeButton = () => {
    const tickimg =
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBAXgyL4y0Rz3PGYb_0J1ADT1RpLLI402AFlicEo77qsknH93IDPHJCmVjTdlhj0vxlOnZpV_eK2EHXsWbywhXnkrc6DA=s2560";
    return (
      // NEED TO MAKE THIS LINK TO THE CORRECT PLACE
      <a id="completebuttonref">
        <button id="completebutton" onClick={completedClick}>
          <div id="buttontext">
            <img id="tick" src={tickimg} referrerPolicy="no-referrer"></img>
            Completed
          </div>
        </button>
      </a>
    );
  };

  const Recipepage = () => {
    console.log("RECIPE PAGE LOADING");
    console.log("RECIPE PAGE: ", realRecipeList);
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
    const recipeListThree = realRecipeList.slice(0, 3);
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
      beforeChange: (current: any, next: any) => setImageIndex(next),
    };

    /** CITE - carousel package + tutorial - react-slick
     * https://react-slick.neostack.com/docs/get-started
     * https://www.youtube.com/watch?v=odSfSAoUREU
     * */

    /**
     * CITE: MEALDB API https://www.themealdb.com/api.php 
     */

    return (
      <div id="recipeslider">
        <Slider {...settings}>
          {recipeListThree.map((recipe, idx) => (
            <div
              id="recipecontainer"
              className={idx === imageIndex ? "slide activeSlide" : "slide"}
              key={idx}
            >
              <div id="rtext">
                <div id="recipename">{recipe.get("name")}</div>
                {/* <div id="recipebody"><b>Cook Time:</b> {recipe.cooktime}</div> */}
                <div id="recipebody">
                  <b>Ingredients:</b>
                  {recipe.get("ingredients").map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </div>
                <div id="recipebody">
                  <b>Instructions:</b>
                  <br></br>
                  {recipe.get("instructions").map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </div>
              </div>
              <div id="rimgcontainer">
                <img id="rimg" src={recipe.get("image")}></img>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  return (
    <div id="recipepage">
      {headerImg()}
      {dataLoaded && Recipepage()}
      {completeButton()}
    </div>
  );
}

export default Page;

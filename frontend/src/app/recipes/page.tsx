import "./styles.css"
import header from "./images/reciperec.png"
import {useState} from "react"
import Slider from 'react-slick'

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
        {"Once you’ve completed it, select the done button,\
        and the next level will be unlocked!"}
        <br></br>
        {"Happy cooking!"}</div>
      </div>
  )
}

const completeButton = () => {
  const tickimg = "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCt9g6oQ7SqGsX3vlAHM6RprRARgUTtoYh_WytSQEvVFXNZ-k4vDtl-r7fx1OVLZvBVcGxCpgdeOxICYMKXRkjSd_HVug=s2560"
  return(
    <button id="completebutton" className="center-horiz">
      <div id="buttontext">
        <img id="tick" src={tickimg}></img>
        Completed 
      </div>
      </button>
  )
}

const recipepage = () => {
  const duckimg = "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDG-l_kXwjgYHiuPrH3mTx0dlkHD8FoJyhOKnm3yJa6qwVUgdyZ_RSXxZtG3ZDOIMCVcynq-ZebjhvAe66jpP-q6Vx6=s1600"
  const recipe1 = {
    name: "Peking Duck",
    imagesrc: {duckimg},
    cooktime: "3 hours",
    ingredients: ["1 tablespoon soy sauce",
    "2 tablespoons honey, divided",
    "2 tablespoons, plus 1 teaspoon Chinese five spice, divided",
    "2 tablespoons kosher salt",
    "2 teaspoons baking soda",
    "1 (4-pound) whole air-chilled duck (thawed, if frozen)",
    "¼ cup hoisin sauce, plus more for serving",
    "8 boiling water, divided",
    "For serving: thinly sliced cucumbers, carrots, and scallions, steamed buns or Mandarin pancakes"],
    instructions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed doloremque minus repellendus ipsam, ratione perspiciatis esse ducimus modi amet dolor dicta in et voluptatum maxime iusto. Dolores quasi aut numquam!"
  }

  const recipemap = {
    recipe1: {recipe1},
    recipe2: {recipe1},
    recipe3: {recipe1}
  }

  return(<div>
    <Slider> 

    </Slider>
  </div>)
}

function Page() {
  
  return (
    <div>
      {headerImg()}
      {recipepage()}
      {completeButton()}
    </div>
    )
}

export default Page;
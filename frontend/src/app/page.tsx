"use client";
import React, { useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  addDoc,
  collection,
  setDoc,
  doc, getDoc
} from "firebase/firestore";

//import components to pass states into
import Levels from "./levels/page";
import Login from "./login/page";
import Recipes from "./recipes/page";
import Regions from "./regions/page";

export default function Page() {

  //all states for application
  const [currentUserID, setID] = useState("");
  const [regions, setRegions] = useState({});
  const [selectedRegion, setSelectRegion] = useState("");

  const [afriCarib, setAfriCarb] = useState({});
  const [asian, setAsian] = useState({});
  const [europe, setEurope] = useState({});
  const [northAm, setNorthAm] = useState({});

  const afriCaribDoc = doc(firestore, "regions", "AfriCarib");


            //   const document = doc(firestore, "users", userId);
            // const gotDoc = await getDoc(document);
  return <div>

    <Levels></Levels>
    <Login></Login>
    <Recipes></Recipes>
    <Regions></Regions>


  </div>;
}

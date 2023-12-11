"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import firebase from "firebase/compat/app";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  getFirestore,
  addDoc,
  collection,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";

//import components to pass states into
// import Levels from "./levels/page";
// import Login from "./login/page";
// import Recipes from "./recipes/page";
// import Regions from "./regions/page";

import Levels from "./levels/page";
import Login from "./login/page";
import Recipes from "./recipes/page";
import Regions from "./regions/page";

export default function Page() {
  //all states for application
  const [currentUserID, setID] = useState("");
  const [regions, setRegions] = useState(new Map<String, String>());
  const [selectedRegion, setSelectRegion] = useState("");
  const [progress, setProgress] = useState(Number);
  const [afriCarib, setAfriCarb] = useState({});

  const [asian, setAsian] = useState({});
  const [europe, setEurope] = useState({});
  const [northAm, setNorthAm] = useState({});

  //const afriCaribDoc = doc(firestore, "regions", "AfriCarib");

  //firestore settings (for login)
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_LOGIN_API_KEY,
    authDomain: "termproj-d181a.firebaseapp.com",
    projectId: "termproj-d181a",
    storageBucket: "termproj-d181a.appspot.com",
    messagingSenderId: process.env.NEXT_PUBLIC_MSG,
    appId: process.env.NEXT_PUBLIC_APP,
    measurementId: process.env.NEXT_PUBLIC_MSR,
  };
  var app = firebase.initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const auth = firebase.auth();

  

  //   const document = doc(firestore, "users", userId);
  // const gotDoc = await getDoc(document);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"/>
      </Routes>
    </BrowserRouter>
  );
}

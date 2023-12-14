"use client";
import React, { useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import "firebaseui/dist/firebaseui.css";
import firebase from "firebase/compat/app";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app/login/login.css";
import {
  getFirestore,
  addDoc,
  collection,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";

import Asia from "./app/levels/asian/page";
import AfriCarib from "./app/levels/afriCarib/page";
import NorthAmerica from "./app/levels/northAm/page";
import Europe from "./app/levels/europe/page";
import Recipes from "./app/recipes/page";
import Regions from "./app/regions/page";
import AuthEmail from "./app/login/AuthEmail";
import Test from "./app/test/page";

export type LevelsType = {
  AfriCarib: number;
  Asia: number;
  NorthAm: number;
  Euro: number;
};

export default function App() {
  //all states for application
  const [currentUserID, setID] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [regions, setRegions] = useState<LevelsType>({
    AfriCarib: 1,
    Asia: 1,
    NorthAm: 1,
    Euro: 1,
  });

  // const [selectedRegion, setSelectRegion] = useState("");
  const [selectedRegion, setSelectRegion] = useState("");

  const [afriCarib, setAfriCarib] = useState<Map<number, string[]>>(new Map());
  const [asian, setAsian] = useState<Map<number, string[]>>(new Map());
  const [europe, setEurope] = useState<Map<number, string[]>>(new Map());
  const [northAm, setNorthAm] = useState<Map<number, string[]>>(new Map());

  //firestore settings (for login)
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_LOGIN_API_KEY,
    authDomain: "termproj-d181a.firebaseapp.com",
    projectId: "termproj-d181a",
    storageBucket: "termproj-d181a.appspot.com",
    messagingSenderId: process.env.REACT_APP_MSG,
    appId: process.env.REACT_APP_APP,
    measurementId: process.env.REACT_APP_MSR,
  };
  var app = firebase.initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const auth = firebase.auth();

  // ------------ POPULATION DATA FROM DB ------------------

  useEffect(() => {
    const fetchData = async () => {
      try {
        const afriCaribDoc = await getDoc(
          doc(firestore, "regions", "AfriCarib")
        );
        const asianDoc = await getDoc(doc(firestore, "regions", "Asian"));
        const euroDoc = await getDoc(doc(firestore, "regions", "European"));
        const naDoc = await getDoc(doc(firestore, "regions", "North American"));
        if (afriCaribDoc.exists()) {
          setAfriCarib(afriCaribDoc.data().levels);
          console.log(afriCaribDoc.data().levels);
        }
        if (asianDoc.exists()) {
          setAsian(asianDoc.data().levels);
        }
        if (euroDoc.exists()) {
          setEurope(euroDoc.data().levels);
        }
        if (naDoc.exists()) {
          setNorthAm(naDoc.data().levels);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // ------------ AUTHENTICATION ---------------------------
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        const userId = user.uid;
        const document = doc(firestore, "users", userId);
        getDoc(document).then((gotDoc) => {
          if (!gotDoc.exists()) {
            const levels = {
              AfriCarib: 1,
              Asia: 1,
              NorthAm: 1,
              Euro: 1,
            };

            const data = {
              // Your data fields here
              userID: user.uid,
              userEmail: user.email,
              regions: levels,
            };
            setDoc(document, data)
              .then(() => {
                console.log("Document added with custom ID:", document);
                setID(user.uid);
                setUserEmail(user.email ?? "");
                setRegions(levels);
              })
              .catch((error) => {
                console.error("Error adding document:", error);
              });
          } else {
            console.log("You are already signed in!");
            setID(gotDoc.id);
            setUserEmail(gotDoc.data().userEmail);
            setRegions(gotDoc.data().regions);
            // console.log(gotDoc.data().userEmail);
            // console.log(gotDoc.data().regions);
          }
        });
      } else {
        console.log("Authentication error:", user);
      }
    });
  }, [auth]);
  const Auth = () => {
    return <AuthEmail auth={auth}></AuthEmail>;
  };

  const WelcomeLogin = () => {
    return (
      <div id="loginwrapper">
        <div id="welcomelogin">
          <div id="welcometext">WELCOME TO CHEFBEAR</div>
          <div>{Auth()}</div>
        </div>
      </div>
    );
  };

  const WelcomeBear = () => {
    return <div id="welcomebear">welcomebear</div>;
  };

  // useEffect(() => {
  //   console.log(currentUserID);
  //   console.log(userEmail);
  //   console.log(regions);
  //   console.log(afriCarib);
  // }, [currentUserID, userEmail, regions, afriCarib]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div id="welcome">
              {WelcomeBear()}
              {WelcomeLogin()}
            </div>
          }
        />
        <Route
          path="/regions"
          element={
            <Regions
              selectedRegion={selectedRegion}
              setSelectRegion={setSelectRegion}
            />
          }
        />

        <Route
          path="/levels/afriCarib"
          element={<AfriCarib regions={regions} />}
        />
        <Route path="/levels/asian" element={<Asia regions={regions} />} />
        <Route
          path="/levels/northAm"
          element={<NorthAmerica regions={regions} />}
        />
        <Route path="/levels/europe" element={<Europe regions={regions} />} />
        <Route
          path="/recipes"
          element={
            <Recipes
              regions={regions}
              selectedRegion={selectedRegion}
              afriCarib={afriCarib}
              asian={asian}
              europe={europe}
              northAm={northAm}
              setRegions={setRegions}
              currentUserID={currentUserID}
            />
          }
        />
        <Route
          path="/test"
          element={
            // <MyContext.Provider value={{currentUserID, userEmail, regions, afriCarib, asian, europe, northAm}}>
            <Test
              currentUserID={currentUserID}
              userEmail={userEmail}
              regions={regions}
              afriCarib={afriCarib}
              asian={asian}
              europe={europe}
              northAm={northAm}
              setRegions={setRegions}
              selectedRegion={selectedRegion}
              setSelectRegion={setSelectRegion}
            ></Test>
            // </MyContext.Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

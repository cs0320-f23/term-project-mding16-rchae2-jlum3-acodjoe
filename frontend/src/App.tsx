"use client";
import {atom} from "recoil";
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
// import Atom from "./Atom";
import Test from "./app/test/page";
import { log } from "console";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { loggedIn } from "./Atom.tsx";

/**
 * Type that defines user level for given region.
 */
export type LevelsType = {
  AfriCarib: number;
  Asia: number;
  NorthAm: number;
  Euro: number;
};

/**
 * Main class where shared states are defined and passed into different components.
 */
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

  const [selectedRegion, setSelectRegion] = useState("");
  const [afriCarib, setAfriCarib] = useState<Map<number, string[]>>(new Map());
  const [asian, setAsian] = useState<Map<number, string[]>>(new Map());
  const [europe, setEurope] = useState<Map<number, string[]>>(new Map());
  const [northAm, setNorthAm] = useState<Map<number, string[]>>(new Map());

  const [levelClicked, setLevelClicked] = useState(0);
  const isLoggedIn = useRecoilValue(loggedIn);
  const setLoggedIn = useSetRecoilState(loggedIn);

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
          }
        });
        console.log("logged in:", loggedIn);
        setLoggedIn(true);


      } else {
        console.log("Authentication error:", user);
      }
    });
  }, [auth]);
  const Auth = () => {
    return <AuthEmail auth={auth}></AuthEmail>;
  };

  const WelcomeLogin = () => {
    const loginbear =
      "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTCoyqF0dYaU-N4Cl7BwFCPGHrS73V-loDuCKW42C9whBip5E-jXKn-wuanwguOe97-jvwFcUKKzORzBFCD2XdMT9D6=s1600";
    return (
      <div id="welcomepage">
        <div id="bearimg">
          <img id="bear" src={loginbear} referrerPolicy="no-referrer"></img>
        </div>
        <div className="loginwrapper grow-on-hover">
          <div id="welcomelogin">
            <div id="welcometext">WELCOME TO CHEFBEAR</div>
            <div>{Auth()}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div id="welcome">{WelcomeLogin()}</div>} />
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
            path="/levels/AfriCarib"
            element={
              <AfriCarib
                regions={regions}
                levelClicked={levelClicked}
                setLevelClicked={setLevelClicked}
              />
            }
          />
          <Route
            path="/levels/Asia"
            element={
              <Asia
                regions={regions}
                levelClicked={levelClicked}
                setLevelClicked={setLevelClicked}
              />
            }
          />
          <Route
            path="/levels/NorthAm"
            element={
              <NorthAmerica
                regions={regions}
                levelClicked={levelClicked}
                setLevelClicked={setLevelClicked}
              />
            }
          />
          <Route
            path="/levels/Euro"
            element={
              <Europe
                regions={regions}
                levelClicked={levelClicked}
                setLevelClicked={setLevelClicked}
              />
            }
          />
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
                levelClicked={levelClicked}
              />
            }
          />
          <Route
            path="/test"
            element={
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
            }
          />
        </Routes>
      </BrowserRouter>
  );
}

"use client";
import './login.css';
import React, { useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import AuthEmail from "./AuthEmail";
import {
  getFirestore,
  addDoc,
  collection,
  setDoc,
  doc, getDoc
} from "firebase/firestore";
import { isReturnStatement } from "typescript";


export default function Page() {

  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_LOGIN_API_KEY,
    authDomain: "termproj-d181a.firebaseapp.com",
    projectId: "termproj-d181a",
    storageBucket: "termproj-d181a.appspot.com",
    messagingSenderId: process.env.NEXT_PUBLIC_MSG,
    appId: process.env.NEXT_PUBLIC_APP,
    measurementId: process.env.NEXT_PUBLIC_MSR,
  };

  const [id, setID] = useState("");
  const [user, setUser] = useState("");
  const [regions, setRegions] = useState({});
  const [loading, setLoading] = useState(false);


  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  var auth = firebase.auth();
  const firestore = getFirestore(app);
  // const provider = new GoogleAuthProvider();

  useEffect(
    () => {
      
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            // User is signed in
            const userId = user.uid;
            const document = doc(firestore, "users", userId);
            const gotDoc = await getDoc(document);

            if (!gotDoc.exists()) {
              const levels = {
                // Your data fields here
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
              await setDoc(document, data)
                .then(() => {
                  console.log("Document added with custom ID:", document);
                  setID(user.uid);
                  setUser(user.email ?? "");
                  setRegions(levels);
                })
                .catch((error) => {
                  console.error("Error adding document:", error);
                });
            } else {
              console.log("You are already signed in!");
              setID(gotDoc.id);
              setUser(gotDoc.data().userEmail);
              setRegions(gotDoc.data().regions);
              console.log(gotDoc.id);
              console.log(gotDoc.data().userEmail);
              console.log(gotDoc.data().regions);
            }
          } else {
            console.log("Authentication error:", user);
          }
        });
      }, [auth]
  )
  const Auth = () => {
    return (
      <AuthEmail auth={auth} loading={loading}></AuthEmail>
    )
  }

  const WelcomeLogin = () => {
    return(
      <div id="welcomelogin">
        login
      </div>
    )
  }
  const WelcomeBear = () => {
    return(
      <div>welcomebear</div>
    )
  }
  return (
    <div id="welcome">
        {WelcomeBear()}
        {WelcomeLogin()}
    </div>
  );
}

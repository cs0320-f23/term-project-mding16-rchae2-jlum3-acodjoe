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
import { Firestore } from 'firebase/firestore';

interface loginProps {
    firestore: Firestore
    auth: firebase.auth.Auth
}


export default function Page(props : loginProps) {

  // const firebaseConfig = {
  //   apiKey: process.env.NEXT_PUBLIC_LOGIN_API_KEY,
  //   authDomain: "termproj-d181a.firebaseapp.com",
  //   projectId: "termproj-d181a",
  //   storageBucket: "termproj-d181a.appspot.com",
  //   messagingSenderId: process.env.NEXT_PUBLIC_MSG,
  //   appId: process.env.NEXT_PUBLIC_APP,
  //   measurementId: process.env.NEXT_PUBLIC_MSR,
  // };

  const [id, setID] = useState("");
  const [user, setUser] = useState("");
  const [regions, setRegions] = useState({});
  const [loading, setLoading] = useState(false);


  // Initialize Firebase
  // var app = firebase.initializeApp(firebaseConfig);
  // var auth = firebase.auth();
  // var auth = getAuth(props.app)
  // const firestore = getFirestore(app);

  useEffect(
    () => {
      
        props.auth.onAuthStateChanged(async (user) => {
          if (user) {
            // User is signed in
            const userId = user.uid;
            const document = doc(props.firestore, "users", userId);
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
      }, [props.auth]
  )
  const Auth = () => {
    return (
      <AuthEmail auth={props.auth} loading={loading}></AuthEmail>
    )
  }

  const WelcomeLogin = () => {
    return(
      <div id="loginwrapper">
        <div id="welcomelogin">
          <div id="welcometext">
            WELCOME TO CHEFBEAR
          </div>
          <div>{Auth()}</div>
        </div>
      </div>
    )
  }
  const WelcomeBear = () => {
    return(
      <div id="welcomebear">welcomebear</div>
    )
  }
  return (
    <div id="welcome">
        {WelcomeBear()}
        {WelcomeLogin()}
    </div>
  );
}

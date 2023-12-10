"use client";
import React, { useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import AuthEmail from "./AuthEmail";
// import { signInWithGoogle } from "./AuthGoogle";

// const firebaseConfig = {
//   apiKey: "AIzaSyDeuY371vMKQAol7hl-jf0rk4PnnSqSnRs",
//   authDomain: "termproj-d181a.firebaseapp.com",
//   projectId: "termproj-d181a",
//   storageBucket: "termproj-d181a.appspot.com",
//   messagingSenderId: "961263025075",
//   appId: "1:961263025075:web:cabb7d919cac0c72ebe9c6",
//   measurementId: "G-LEFF59MXDX",
// };

// // Initialize Firebase
// var app = firebase.initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// var auth = firebase.auth();
// const provider = new GoogleAuthProvider();
// var auth2 = getAuth(app);

// export const signInWithGoogle = () => {
//   signInWithPopup(auth2, provider)
//     .then((result) => {
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profilePic = result.user.photoURL;

//       localStorage.setItem("name", name ?? "");
//       localStorage.setItem("email", email ?? "");
//       localStorage.setItem("profilePic", profilePic ?? "");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };


export default function Page() {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  var auth = firebase.auth();
  // const provider = new GoogleAuthProvider();

  useEffect(
    () => {
      // var unsubscribe = 
      auth.onAuthStateChanged((user) => {
        console.log("im actually so done right now")
        if (user) {
          console.log("here");
          // User is signed in
          setID(user.uid);
          setUser(user.email ?? "")
          console.log(user)
        } else {
          console.log("Authentication error:", user);
        }
      });

      // return () => unsubscribe();


  })

  return (
    <div>
      {/* <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button> */}
      <AuthEmail auth={auth}></AuthEmail>
    </div>
  );
}

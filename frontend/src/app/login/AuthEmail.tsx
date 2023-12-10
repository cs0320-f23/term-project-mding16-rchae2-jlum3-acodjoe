"use client";
import React, { useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import firebase from "firebase/compat/app";
import {
  getAuth,
  onAuthStateChanged,
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

interface authProps {
    auth: firebase.auth.Auth
    loading: boolean
}

export default function AuthEmail(props : authProps) {
  var uiConfig = {
    signInSuccessUrl: "/regions",
    signInFlow: "popup",
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      {
        provider: GoogleAuthProvider.PROVIDER_ID,
        clientId: `${process.env.NEXT_PUBLIC_CLIENT_ID}`,
        requireDisplayName: false,
      },
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: false,
      },
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: "your terms of service url",
    // Privacy policy url/callback.
    privacyPolicyUrl: function () {
      window.location.assign("<your-privacy-policy-url>");
    },
    callbacks: {
      signInSuccessWithAuthResult:(
        authObject: firebase.auth.UserCredential,
        redirectURL?: string
      ) => {
        // console.log(authObject)
        // console.log(redirectURL)
        return false
      },
    },
  };

  useEffect(
    () => {
       const ui =
        firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(props.auth);

      ui.start(".firebase-auth-container", uiConfig);
    },
    [props.auth]
  );

  return (
    <div>
      <div className="firebase-auth-container"></div>
    </div>
  );
}

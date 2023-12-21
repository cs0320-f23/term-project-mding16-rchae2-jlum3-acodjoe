"use client";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useContext,
} from "react";
import {
  getFirestore,
  addDoc,
  collection,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loggedIn } from "../../Atom.tsx";

/**
 * Type that defines user level for given region.
 */
type LevelsType = {
  AfriCarib: number;
  Asia: number;
  NorthAm: number;
  Euro: number;
};

/**
 * Props for test component, which was used to mock accessing and changing shared states.
 */
interface testProps {
  currentUserID: string;
  userEmail: string;
  regions: LevelsType;
  afriCarib: Map<number, string[]>;
  asian: Map<number, string[]>;
  europe: Map<number, string[]>;
  northAm: Map<number, string[]>;
  setRegions: Dispatch<SetStateAction<LevelsType>>;
  selectedRegion: string;
  setSelectRegion: Dispatch<SetStateAction<string>>;
}

/**
 * Testing page to ensure proper state access and changes.
 * 
 * @param props testProps
 * @returns component representing test page
 */
export default function Page(props: testProps) {
  const isLoggedIn = useRecoilValue(loggedIn);
  const setLoggedIn = useSetRecoilState(loggedIn);

  const nav = useNavigate();
  if (isLoggedIn === false) {
      nav("/"); 
  }

  //api call to get recipe steps, ingredients, etc.
  useEffect(() => {
    if (props.asian[props.regions.Asia] !== undefined) {
      for (const recipe of props.asian[props.regions.Asia]) {
        const document = doc(getFirestore(), "recipes", recipe); // getting the recipe from database
        getDoc(document).then((gotRecipe) => {
          console.log(gotRecipe.data().recipe); // name of recipe
          console.log(gotRecipe.data().ingredients); // list of ingredients
          console.log(gotRecipe.data().instructions); // list of instructions
        });
      }
    }
  }, [props.asian, props.regions.Asia]);

  //api call to update user level for given region -- this example increments the Asia level
  function onClick(): void {
    //update the database
    const fieldsToUpdate = {
      regions: {
        ...props.regions,
        Asia: props.regions.Asia + 1, // Update the Asia level
      },
    };
    updateDoc(
      doc(getFirestore(), "users", props.currentUserID),
      fieldsToUpdate
    );
    //update the state that stored regions and respective user level for that region
    props.setRegions({
      ...props.regions,
      Asia: props.regions.Asia + 1, // Update the Asia level
    });
  }

  useEffect(() => {
    console.log(props.selectedRegion);
  }, [props.selectedRegion]);

  return (
    <div>
      <div>user region selected {props.selectedRegion}</div>
      <div>user id {props.currentUserID}</div>
      <div>user email {props.userEmail}</div>
      <div>user africa level {props.regions.AfriCarib}</div>
      <div>user asia level {props.regions.Asia}</div>
      <div>user north america level {props.regions.NorthAm}</div>
      <div>user europe level {props.regions.Euro}</div>
      <div>
        africa recipes for africa level{" "}
        {props.afriCarib[props.regions.AfriCarib]}
      </div>
      <div>asia recipes for asia level {props.asian[props.regions.Asia]}</div>
      <div>
        europe recipes for europe level {props.europe[props.regions.Euro]}
      </div>
      <div>
        north america recipes for north america level{" "}
        {props.northAm[props.regions.NorthAm]}
      </div>
      <button
        style={{
          backgroundColor: "#7CFC00", 
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        Complete
      </button>
    </div>
  );
}

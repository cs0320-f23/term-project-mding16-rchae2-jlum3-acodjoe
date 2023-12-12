"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
// import { testProps } from "./src/app.tsx";

type LevelsType = {
  AfriCarib: number;
  Asia: number;
  NorthAm: number;
  Euro: number;
};

interface testProps {
  currentUserID: string;
  setID: Dispatch<SetStateAction<string>>;
  //   userEmail: string;
  //   regions: LevelsType;
  //   afriCarib: {};
  //   asian: {};
  //   europe: {};
  //   northAm: {};
}

export default function Page(props: testProps) {
  //   var [localUserEmail, setLocalUserEmail] = useState(props.userEmail);

//   useEffect(() => {
//     console.log(props);
//     props.setID("5");
//   }, [props.setID]);

  return <div>{props.currentUserID}</div>;
}

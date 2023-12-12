"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

export type LevelsType = {
  AfriCarib: number;
  Asia: number;
  NorthAm: number;
  Euro: number;
};

interface ContextProps {
  currentUserID: string;
  setID: Dispatch<SetStateAction<string>>;
  setUserEmail: Dispatch<SetStateAction<string>>;
  setRegions: Dispatch<SetStateAction<LevelsType>>;
  userEmail: string;
  regions: LevelsType;
  afriCarib: {};
  setAfriCarib: Dispatch<SetStateAction<{}>>;
  asian: {};
  setAsian: Dispatch<SetStateAction<{}>>;
  europe: {};
  setEurope: Dispatch<SetStateAction<{}>>;
  northAm: {};
  setNorthAm: Dispatch<SetStateAction<{}>>;
}

const GlobalContext = createContext<ContextProps>({
  currentUserID: "",
  setID: (): string => "",
  setUserEmail: (): string => "",
  setRegions: (): LevelsType => ({
    AfriCarib: 1,
    Asia: 1,
    NorthAm: 1,
    Euro: 1,
  }),
  userEmail: "",
  regions: {
    AfriCarib: 1,
    Asia: 1,
    NorthAm: 1,
    Euro: 1,
  },
  afriCarib: {},
  setAfriCarib: ({}) => {},
  asian: {},
  setAsian: ({}) => {},
  europe: {},
  setEurope: ({}) => {},
  northAm: {},
  setNorthAm: ({}) => {},
});

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
    const [currentUserID, setID] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [regions, setRegions] = useState<LevelsType>({
    AfriCarib: 1,
    Asia: 1,
    NorthAm: 1,
    Euro: 1,
    });

    //const [selectedRegion, setSelectRegion] = useState("");
    const [afriCarib, setAfriCarib] = useState({});
    const [asian, setAsian] = useState({});
    const [europe, setEurope] = useState({});
    const [northAm, setNorthAm] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        currentUserID,
        setID,
        setUserEmail,
        setRegions,
        userEmail,
        regions,
        afriCarib,
        setAfriCarib,
        asian,
        setAsian,
        europe,
        setEurope,
        northAm,
        setNorthAm
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

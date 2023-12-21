import { atom } from "recoil";
import { useRecoilValue, useSetRecoilState, RecoilRoot } from "recoil";

//state for user being logged in
export const loggedIn = atom<boolean>({ key: "loggedIn", default: false });

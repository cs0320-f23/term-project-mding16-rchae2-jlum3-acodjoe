import { atom } from "recoil";
import { useRecoilValue, useSetRecoilState, RecoilRoot } from "recoil";

export const loggedIn = atom<boolean>({ key: "loggedIn", default: false });
// export const setLoggedIn = useSetRecoilState(loggedIn);

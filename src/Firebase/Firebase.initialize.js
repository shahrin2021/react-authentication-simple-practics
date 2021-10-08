import { initializeApp } from "@firebase/app";
import firebaseConfig from "./Firebase.confic";

const initializeAuthentication= ()=>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;
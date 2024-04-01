import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAZgmVy_59hrTvwq5hP2BC8ylWFHa8mWmI",
  authDomain: "saloonsynjaved.firebaseapp.com",
  databaseURL: "https://saloonsynjaved-default-rtdb.firebaseio.com",
  projectId: "saloonsynjaved",
  storageBucket: "saloonsynjaved.appspot.com",
  messagingSenderId: "944035082952",
  appId: "1:944035082952:web:2aa04c7c24d6c469c92bfd"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const database = getDatabase(app);
export const refdb = ref;

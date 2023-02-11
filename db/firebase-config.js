import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlBaiprVjsajXIN1iOGJ_MFHUH-fdDCsY",
  authDomain: "pruebacoder-7401f.firebaseapp.com",
  projectId: "pruebacoder-7401f",
  storageBucket: "pruebacoder-7401f.appspot.com",
  messagingSenderId: "412566414182",
  appId: "1:412566414182:web:7c47af8ed481493cbfdea7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

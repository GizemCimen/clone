import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCpYs8OKqKnjD4RuMMPrzmHlCZ_XG2P6UA",
  authDomain: "twitter-clone-604fa.firebaseapp.com",
  projectId: "twitter-clone-604fa",
  storageBucket: "twitter-clone-604fa.appspot.com",
  messagingSenderId: "472960828703",
  appId: "1:472960828703:web:8162495f10148038ff9c2a",
  measurementId: "G-VN8DW4FQX9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;

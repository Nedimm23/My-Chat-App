import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyB6OEE7ZTbfb0B8Ptie7Cw4QosXV0Ph0Vo",
  authDomain: "react-chat-app-82beb.firebaseapp.com",
  databaseURL: "https://react-chat-app-82beb.firebaseio.com",
  projectId: "react-chat-app-82beb",
  storageBucket: "react-chat-app-82beb.appspot.com",
  messagingSenderId: "186975082540",
  appId: "1:186975082540:web:8fc54fc152ee8bc0385989",
  measurementId: "G-RWPBGM1QV6",
};
firebase.initializeApp(config);

export default firebase;

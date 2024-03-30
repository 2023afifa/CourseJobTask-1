import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD7oysr-dE60HwYafwxlr-veKd2KJGYufo",
    authDomain: "taskmanagement-593c5.firebaseapp.com",
    projectId: "taskmanagement-593c5",
    storageBucket: "taskmanagement-593c5.appspot.com",
    messagingSenderId: "355011398244",
    appId: "1:355011398244:web:bffdedaab064f32937ad71"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
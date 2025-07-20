// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyAMoIQVFyZgh8YjEIsvsyq7RslDaVHHcjU",
  authDomain: "netflix-clone-85154.firebaseapp.com",
  projectId: "netflix-clone-85154",
  storageBucket: "netflix-clone-85154.firebasestorage.app",
  messagingSenderId: "749206960018",
  appId: "1:749206960018:web:ceb60b2c6a89a3d167b34b",
  measurementId: "G-VY36S97NF5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};
const logout = () => {
  signOut(auth);
};
export { auth, db, signup, login, logout };

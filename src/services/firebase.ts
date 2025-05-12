
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  onAuthStateChanged,
  User
} from "firebase/auth";
import { useEffect, useState } from "react";

// Firebase configuration with provided API key
const firebaseConfig = {
  apiKey: "AIzaSyArgAqurxwfDtI2pkTE_Yy9qAj5uxwHuEg",
  authDomain: "referralhire-5d732.firebaseapp.com",
  projectId: "referralhire-5d732",
  storageBucket: "referralhire-5d732.appspot.com",
  messagingSenderId: "258397655234",
  appId: "1:258397655234:web:a92cb7335f2b7abff66a62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Auth functions
export const signInWithEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signUpWithEmail = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

export const signInWithFacebook = () => {
  return signInWithPopup(auth, facebookProvider);
};

export const logOut = () => {
  return signOut(auth);
};

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { currentUser, loading };
};

export default auth;

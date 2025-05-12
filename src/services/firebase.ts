
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

// Firebase configuration - the actual config will be provided by the user
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // To be replaced with user's API key
  authDomain: "YOUR_AUTH_DOMAIN", // To be replaced
  projectId: "YOUR_PROJECT_ID", // To be replaced
  storageBucket: "YOUR_STORAGE_BUCKET", // To be replaced
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // To be replaced
  appId: "YOUR_APP_ID" // To be replaced
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

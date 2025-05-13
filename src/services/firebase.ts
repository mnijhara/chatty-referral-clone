
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
  updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";

// Firebase configuration with provided API key
const firebaseConfig = {
  apiKey: "AIzaSyArgAqurxwfDtI2pkTE_Yy9qAj5uxwHuEg",
  authDomain: "referralhire-5d732.firebaseapp.com",
  projectId: "referralhire-5d732",
  storageBucket: "referralhire-5d732.appspot.com",
  messagingSenderId: "258397655234",
  appId: "1:258397655234:web:a92cb7335f2b7abff66a62"
};

// Initialize Firebase - prevent duplicate app initialization
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  // Use existing app instance if already initialized
  const existingApp = initializeApp(firebaseConfig, "referralhire");
  app = existingApp;
  console.log("Using existing Firebase app");
}

const auth = getAuth(app);

// Providers
const googleProvider = new GoogleAuthProvider();

// Add localhost and deployed domains to allowed list
const addHostToProvider = (provider: GoogleAuthProvider) => {
  // Set custom parameters for the provider
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  return provider;
};

// Auth functions
export const signInWithEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signUpWithEmail = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential;
};

export const signInWithGoogle = async () => {
  const updatedProvider = addHostToProvider(googleProvider);
  try {
    return await signInWithPopup(auth, updatedProvider);
  } catch (error: any) {
    // Handle domain authorization error specifically
    if (error.code === 'auth/unauthorized-domain') {
      console.error("This domain is not authorized in Firebase. Please add it in the Firebase console.", window.location.origin);
      toast({
        title: "Authentication Error",
        description: "Please use email sign-in instead. This domain is not authorized for Google sign-in.",
        variant: "destructive",
      });
      throw new Error("This domain is not authorized for Google sign-in. Please use email sign-in instead.");
    } else {
      throw error; // Rethrow other errors
    }
  }
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

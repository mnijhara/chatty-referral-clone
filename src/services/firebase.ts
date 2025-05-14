
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

// IMPORTANT: The domain below needs to be added to Firebase Auth console
// Under Authentication > Settings > Authorized domains
export const FIREBASE_AUTH_DOMAIN_TO_ADD = "referral-clone.lovable.app";

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
    // Check if the current domain is in the authorized domains list from Firebase
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/projects?key=${firebaseConfig.apiKey}`);
    const data = await response.json();
    
    const currentDomain = window.location.hostname;
    const isAuthorized = data.authorizedDomains && data.authorizedDomains.includes(currentDomain);
    
    console.log("Current domain:", currentDomain);
    console.log("Authorized domains:", data.authorizedDomains);
    console.log("Is current domain authorized:", isAuthorized);
    
    if (!isAuthorized) {
      // Domain is not authorized, show toast and suggest using email sign-in
      toast({
        title: "Google Sign-in Unavailable",
        description: "Please use email sign-in instead. Google authentication is currently unavailable on this domain.",
        variant: "destructive",
      });
      throw new Error("Domain not authorized for Google sign-in");
    }
    
    return await signInWithPopup(auth, updatedProvider);
  } catch (error: any) {
    // If it's an unauthorized domain error, show a nicer message
    if (error.code === 'auth/unauthorized-domain' || error.message === "Domain not authorized for Google sign-in") {
      console.error("This domain is not authorized in Firebase. Add this domain to the Firebase console:", window.location.origin);
      toast({
        title: "Google Sign-in Unavailable",
        description: "Please use email sign-in instead. Google authentication is currently unavailable on this domain.",
        variant: "destructive",
      });
      throw new Error("Please use email sign-in instead");
    } else {
      // For other errors, just pass them along
      toast({
        title: "Authentication Error",
        description: error.message || "An error occurred during sign in",
        variant: "destructive",
      });
      throw error;
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

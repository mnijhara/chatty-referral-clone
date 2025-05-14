
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
import { toast } from "@/components/ui/use-toast";

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

// IMPORTANT: These domains need to be added to Firebase Auth console
// Under Authentication > Settings > Authorized domains
export const FIREBASE_AUTH_DOMAINS_TO_ADD = [
  "referral-clone.lovable.app",
  "localhost"
];

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
    const currentDomain = window.location.hostname;
    
    // Log helpful information for debugging
    console.log("Attempting Google sign-in from domain:", currentDomain);
    console.log("Make sure this domain is added to Firebase Auth Console");
    console.log("Go to: Firebase Console > Authentication > Settings > Authorized domains");
    console.log("And add:", currentDomain);
    
    try {
      return await signInWithPopup(auth, updatedProvider);
    } catch (error: any) {
      // Handle domain authorization error specifically
      if (error.code === 'auth/unauthorized-domain') {
        console.error("Domain not authorized in Firebase:", currentDomain);
        toast({
          title: "Google Sign-in Failed",
          description: `This domain (${currentDomain}) is not authorized in Firebase. Please use email sign-in instead.`,
          variant: "destructive",
        });
        throw new Error("Please use email sign-in instead. Domain not authorized for Google sign-in.");
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
  } catch (error: any) {
    console.error("Google sign-in error:", error);
    throw error;
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

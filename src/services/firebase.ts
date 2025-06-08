
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

// Set custom parameters for the provider
const addHostToProvider = (provider: GoogleAuthProvider) => {
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  return provider;
};

// Check if user has admin role
export const checkAdminRole = async (user: User): Promise<boolean> => {
  try {
    const idTokenResult = await user.getIdTokenResult();
    return idTokenResult.claims.admin === true;
  } catch (error) {
    console.error("Error checking admin role:", error);
    return false;
  }
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
    const result = await signInWithPopup(auth, updatedProvider);
    return result;
  } catch (error: any) {
    console.error("Google sign-in error:", error);
    
    if (error.code === 'auth/unauthorized-domain') {
      toast({
        title: "Google Sign-in Failed",
        description: "Authentication domain is not authorized in Firebase. Please contact support or use email sign-in instead.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Authentication Error",
        description: error.message || "An error occurred during sign in",
        variant: "destructive",
      });
    }
    throw error;
  }
};

export const logOut = () => {
  return signOut(auth);
};

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        const adminStatus = await checkAdminRole(user);
        setIsAdmin(adminStatus);
      } else {
        setIsAdmin(false);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { currentUser, loading, isAdmin };
};

export default auth;


import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@/services/firebase";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import Companies from "./pages/Companies";
import CompanyDetail from "./pages/CompanyDetail";
import Referrers from "./pages/Referrers";
import ReferrerProfile from "./pages/ReferrerProfile";
import RequestReferral from "./pages/RequestReferral";
import Jobs from "./pages/Jobs";
import PostJob from "./pages/PostJob";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Guides from "./pages/Guides";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/AdminRoute";

// Create a new QueryClient instance with improved caching configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

// Improved Protected route component with loading state
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { currentUser, loading } = useAuth();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setIsCheckingAuth(true);
      } else {
        setIsCheckingAuth(false);
      }
    }, 200);
    
    return () => clearTimeout(timer);
  }, [loading]);
  
  if (isCheckingAuth && loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-brand"></div>
          <p className="mt-4 text-gray-600">Verifying authentication...</p>
        </div>
      </div>
    );
  }
  
  if (!currentUser) {
    return <Navigate to="/signin" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:id" element={<CompanyDetail />} />
            <Route path="/referrers" element={<Referrers />} />
            <Route path="/referrers/:id" element={<ReferrerProfile />} />
            <Route path="/request/:referrerId" element={<RequestReferral />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/post-job" element={<ProtectedRoute><PostJob /></ProtectedRoute>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

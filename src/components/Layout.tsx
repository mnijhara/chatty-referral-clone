
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toaster";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-6xl mx-auto">
      <Navbar />
      <main className="flex-grow px-3">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;

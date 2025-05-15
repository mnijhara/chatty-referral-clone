
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-6xl mx-auto">
      <Navbar />
      <main className="flex-grow px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;


import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b border-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-brand">Referral<span className="text-teal-500">Hire</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavLink 
            to="/companies" 
            className={({ isActive }) => 
              isActive ? "text-brand font-medium" : "text-gray-600 hover:text-brand"
            }
          >
            Companies
          </NavLink>
          <NavLink 
            to="/referrers" 
            className={({ isActive }) => 
              isActive ? "text-brand font-medium" : "text-gray-600 hover:text-brand"
            }
          >
            Referrers
          </NavLink>
          <NavLink 
            to="/how-it-works" 
            className={({ isActive }) => 
              isActive ? "text-brand font-medium" : "text-gray-600 hover:text-brand"
            }
          >
            How it Works
          </NavLink>
          <NavLink 
            to="/pricing" 
            className={({ isActive }) => 
              isActive ? "text-brand font-medium" : "text-gray-600 hover:text-brand"
            }
          >
            Pricing
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "text-brand font-medium" : "text-gray-600 hover:text-brand"
            }
          >
            About
          </NavLink>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link to="/signin">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden animation-fade-in">
          <div className="flex flex-col space-y-4 px-4 pt-4 pb-6 bg-white border-t border-gray-200">
            <NavLink 
              to="/companies" 
              className={({ isActive }) => 
                isActive ? "text-brand font-medium py-2" : "text-gray-600 hover:text-brand py-2"
              }
              onClick={toggleMenu}
            >
              Companies
            </NavLink>
            <NavLink 
              to="/referrers" 
              className={({ isActive }) => 
                isActive ? "text-brand font-medium py-2" : "text-gray-600 hover:text-brand py-2"
              }
              onClick={toggleMenu}
            >
              Referrers
            </NavLink>
            <NavLink 
              to="/how-it-works" 
              className={({ isActive }) => 
                isActive ? "text-brand font-medium py-2" : "text-gray-600 hover:text-brand py-2"
              }
              onClick={toggleMenu}
            >
              How it Works
            </NavLink>
            <NavLink 
              to="/pricing" 
              className={({ isActive }) => 
                isActive ? "text-brand font-medium py-2" : "text-gray-600 hover:text-brand py-2"
              }
              onClick={toggleMenu}
            >
              Pricing
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "text-brand font-medium py-2" : "text-gray-600 hover:text-brand py-2"
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/signin">
                <Button variant="outline" className="w-full">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut, CreditCard } from "lucide-react";
import { useAuth, logOut } from "@/services/firebase";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      toast({
        title: "Logged out successfully",
        description: "You have been logged out.",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Error logging out",
        description: "There was a problem logging out.",
        variant: "destructive",
      });
    }
  };

  // Get user initials for avatar fallback
  const getUserInitials = () => {
    if (currentUser?.displayName) {
      return currentUser.displayName
        .split(' ')
        .map(name => name[0])
        .join('')
        .toUpperCase();
    }
    return currentUser?.email?.substring(0, 2).toUpperCase() || 'U';
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
              isActive ? "text-brand font-medium" : "text-blue-600 hover:text-brand"
            }
          >
            Companies
          </NavLink>
          <NavLink 
            to="/referrers" 
            className={({ isActive }) => 
              isActive ? "text-brand font-medium" : "text-blue-600 hover:text-brand"
            }
          >
            Referrers
          </NavLink>
          <NavLink 
            to="/how-it-works" 
            className={({ isActive }) => 
              isActive ? "text-brand font-medium" : "text-blue-600 hover:text-brand"
            }
          >
            How it Works
          </NavLink>
          <NavLink 
            to="/pricing" 
            className={({ isActive }) => 
              isActive ? "text-brand font-medium" : "text-blue-600 hover:text-brand"
            }
          >
            Pricing
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "text-brand font-medium" : "text-blue-600 hover:text-brand"
            }
          >
            About
          </NavLink>
        </div>

        <div className="hidden md:flex space-x-4">
          {currentUser ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>{getUserInitials()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    {currentUser.displayName && (
                      <p className="font-medium">{currentUser.displayName}</p>
                    )}
                    {currentUser.email && (
                      <p className="w-[200px] truncate text-sm text-gray-500">{currentUser.email}</p>
                    )}
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="cursor-pointer flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="cursor-pointer flex items-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/signin">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
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
                isActive ? "text-brand font-medium py-2" : "text-blue-600 hover:text-brand py-2"
              }
              onClick={toggleMenu}
            >
              Companies
            </NavLink>
            <NavLink 
              to="/referrers" 
              className={({ isActive }) => 
                isActive ? "text-brand font-medium py-2" : "text-blue-600 hover:text-brand py-2"
              }
              onClick={toggleMenu}
            >
              Referrers
            </NavLink>
            <NavLink 
              to="/how-it-works" 
              className={({ isActive }) => 
                isActive ? "text-brand font-medium py-2" : "text-blue-600 hover:text-brand py-2"
              }
              onClick={toggleMenu}
            >
              How it Works
            </NavLink>
            <NavLink 
              to="/pricing" 
              className={({ isActive }) => 
                isActive ? "text-brand font-medium py-2" : "text-blue-600 hover:text-brand py-2"
              }
              onClick={toggleMenu}
            >
              Pricing
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "text-brand font-medium py-2" : "text-blue-600 hover:text-brand py-2"
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <div className="flex flex-col space-y-2 pt-2">
              {currentUser ? (
                <>
                  <Link to="/profile" className="flex items-center py-2" onClick={toggleMenu}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                  <Link to="/dashboard" className="flex items-center py-2" onClick={toggleMenu}>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                  <Button onClick={handleLogout} variant="outline" className="justify-start">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/signin">
                    <Button variant="outline" className="w-full">Sign In</Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

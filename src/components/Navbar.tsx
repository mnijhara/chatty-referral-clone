import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/services/firebase";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, User, Settings, Building, Shield, UserPlus, Briefcase, TrendingUp, DollarSign, Mail, BarChart3 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
  const { currentUser, signOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GR</span>
              </div>
              <span className="text-xl font-bold text-gray-900">GetReferred</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/companies" className="text-gray-700 hover:text-brand transition-colors">
              Companies
            </Link>
            <Link to="/referrers" className="text-gray-700 hover:text-brand transition-colors">
              Referrers
            </Link>
            <Link to="/jobs" className="text-gray-700 hover:text-brand transition-colors">
              Jobs
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-brand transition-colors">
              How it Works
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-brand transition-colors">
              Pricing
            </Link>
            
            <div className="flex items-center space-x-4">
              {currentUser ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={currentUser.photoURL || undefined} />
                        <AvatarFallback className="bg-brand text-white">
                          {currentUser.displayName?.[0] || currentUser.email?.[0]?.toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{currentUser.displayName}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {currentUser.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard" className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="cursor-pointer">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/post-job" className="cursor-pointer">
                        <Building className="mr-2 h-4 w-4" />
                        <span>Post Job</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link to="/signin">
                    <Button variant="ghost">Sign In</Button>
                  </Link>
                  <Link to="/signup">
                    <Button>Get Started</Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/companies" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Companies
            </Link>
            <Link to="/referrers" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Referrers
            </Link>
            <Link to="/jobs" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Jobs
            </Link>
            <Link to="/how-it-works" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              How it Works
            </Link>
            <Link to="/pricing" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Pricing
            </Link>
            
            {currentUser ? (
              <div className="border-t border-gray-200 pt-2 mt-2">
                <Link to="/dashboard" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                  Dashboard
                </Link>
                <Link to="/profile" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                  Profile
                </Link>
                <Link to="/post-job" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                  Post Job
                </Link>
                <Button 
                  variant="ghost" 
                  className="w-full text-left justify-start px-3 py-2" 
                  onClick={() => {
                    handleSignOut();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="border-t border-gray-200 pt-2 mt-2 space-y-1">
                <Link to="/signin" className="block px-3 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Sign In</Button>
                </Link>
                <Link to="/signup" className="block px-3 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

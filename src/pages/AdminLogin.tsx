
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Shield } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple admin credentials check (in real app, this would be handled by backend)
    if (email === "admin@getreferred.com" && password === "admin123") {
      localStorage.setItem("adminLoggedIn", "true");
      toast({
        title: "Admin login successful",
        description: "Welcome to the admin dashboard.",
      });
      navigate("/admin/dashboard");
    } else {
      toast({
        title: "Login failed",
        description: "Invalid admin credentials.",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto py-12 flex justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12 text-brand" />
          </div>
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>Enter admin credentials to access dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Admin Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="admin@getreferred.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Admin Login"}
            </Button>
          </form>
          <div className="mt-4 p-3 bg-gray-50 rounded text-sm text-gray-600">
            <strong>Demo credentials:</strong><br />
            Email: admin@getreferred.com<br />
            Password: admin123
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;

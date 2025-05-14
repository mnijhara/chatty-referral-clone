
import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "@/services/firebase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { getAuth, updateProfile } from "firebase/auth";
import { Input } from "@/components/ui/input";
import { Shield, Calendar, CreditCard } from "lucide-react";

const Profile = () => {
  const { currentUser, loading } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(currentUser?.displayName || "");
  const [updateLoading, setUpdateLoading] = useState(false);
  
  // Handle loading state and redirect if not authenticated
  if (loading) return <div className="container mx-auto py-12 flex justify-center">Loading...</div>;
  if (!currentUser) return <Navigate to="/signin" replace />;

  const getUserInitials = () => {
    if (currentUser?.displayName) {
      return currentUser.displayName
        .split(' ')
        .map(name => name[0])
        .join('')
        .toUpperCase();
    }
    return currentUser.email?.substring(0, 2).toUpperCase() || 'U';
  };

  const handleUpdateProfile = async () => {
    setUpdateLoading(true);
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      
      if (user) {
        await updateProfile(user, {
          displayName: displayName
        });
        
        toast({
          title: "Profile updated",
          description: "Your profile has been updated successfully.",
        });
      }
      setIsEditing(false);
    } catch (error: any) {
      toast({
        title: "Update failed",
        description: error.message || "Failed to update profile",
        variant: "destructive",
      });
    } finally {
      setUpdateLoading(false);
    }
  };
  
  const creationDate = currentUser.metadata.creationTime 
    ? new Date(currentUser.metadata.creationTime).toLocaleDateString() 
    : 'Unknown';

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>
        
        <div className="grid gap-6">
          {/* Profile Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="text-2xl">{getUserInitials()}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl">
                    {isEditing ? (
                      <Input 
                        value={displayName} 
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="mt-1"
                        placeholder="Enter your name"
                      />
                    ) : (
                      currentUser.displayName || "No name set"
                    )}
                  </CardTitle>
                  <CardDescription className="text-lg">{currentUser.email}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span>Account created on {creationDate}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <span>Authentication method: {currentUser.providerData[0]?.providerId === 'password' ? 'Email/Password' : 'Google'}</span>
                </div>
                
                <div className="flex items-center gap-2 mt-2">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <Link to="/dashboard" className="text-brand hover:underline">
                    View your referrals dashboard
                  </Link>
                </div>
                
                <Separator className="my-4" />
                
                {isEditing ? (
                  <div className="flex gap-2">
                    <Button onClick={handleUpdateProfile} disabled={updateLoading}>
                      {updateLoading ? "Saving..." : "Save Changes"}
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)} disabled={updateLoading}>
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;

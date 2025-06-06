import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/services/firebase";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import { CreditCard, Wallet, IndianRupee, TrendingUp, TrendingDown, UserPlus, Briefcase } from "lucide-react";

const Dashboard = () => {
  const { currentUser, loading } = useAuth();
  const [upiId, setUpiId] = useState("");
  const [userRole, setUserRole] = useState<"referrer" | "seeker">("referrer");
  
  // More realistic data for a new user
  const referrals = [
    { id: 1, name: "Rajesh Kumar", company: "Infosys", status: "Pending", date: "2025-01-05", payment: 0 },
    { id: 2, name: "Priya Sharma", company: "TCS", status: "Interview", date: "2024-12-28", payment: 0 },
  ];
  
  // Realistic job applications for a job seeker
  const applications = [
    { id: 1, position: "Software Engineer", company: "Google", referrer: "Amit Kumar", status: "Under Review", date: "2025-01-03" },
    { id: 2, position: "Data Analyst", company: "Microsoft", referrer: "Sneha Reddy", status: "Interview Scheduled", date: "2024-12-30" },
  ];
  
  // More realistic stats for a new user
  const totalReferrals = referrals.length;
  const pendingReferrals = referrals.filter(r => r.status === "Pending").length;
  const hiredReferrals = referrals.filter(r => r.status === "Hired").length;
  const totalEarnings = referrals.reduce((sum, r) => sum + r.payment, 0);
  
  // For UPI ID submission
  const handleUpiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "UPI ID Updated",
      description: `Your UPI ID has been updated to ${upiId}`,
    });
  };

  // Toggle user role
  const toggleUserRole = () => {
    const newRole = userRole === "referrer" ? "seeker" : "referrer";
    setUserRole(newRole);
    toast({
      title: "User Role Changed",
      description: `You are now viewing the dashboard as a ${newRole === "referrer" ? "Referrer" : "Job Seeker"}`,
    });
  };

  // Handle loading state and redirect if not authenticated
  if (loading) return <div className="container mx-auto py-8 flex justify-center">Loading...</div>;
  if (!currentUser) return <Navigate to="/signin" replace />;

  return (
    <div className="container mx-auto py-6 px-3">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">My Dashboard</h1>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={toggleUserRole}
          className="flex items-center gap-2"
        >
          {userRole === "referrer" ? 
            <><UserPlus size={16} /> Switch to Job Seeker View</> : 
            <><Briefcase size={16} /> Switch to Referrer View</>
          }
        </Button>
      </div>
      
      {userRole === "referrer" ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {/* Stats Cards with realistic numbers */}
            <Card className="shadow-sm">
              <CardHeader className="p-3">
                <CardTitle className="text-xs font-medium text-muted-foreground">Total Referrals</CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold">{totalReferrals}</div>
                  <TrendingUp className="h-4 w-4 text-teal-500" />
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {totalReferrals > 5 ? 'Standard charges apply' : `${5 - totalReferrals} free referrals remaining`}
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm">
              <CardHeader className="p-3">
                <CardTitle className="text-xs font-medium text-muted-foreground">Pending Referrals</CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold">{pendingReferrals}</div>
                  <TrendingDown className="h-4 w-4 text-amber-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm">
              <CardHeader className="p-3">
                <CardTitle className="text-xs font-medium text-muted-foreground">Successful Hires</CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold">{hiredReferrals}</div>
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm">
              <CardHeader className="p-3">
                <CardTitle className="text-xs font-medium text-muted-foreground">Total Earnings</CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold">₹{totalEarnings.toLocaleString()}</div>
                  <IndianRupee className="h-4 w-4 text-brand" />
                </div>
                {totalEarnings === 0 && (
                  <p className="text-xs text-muted-foreground mt-0.5">Complete referrals to earn</p>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Main content area */}
            <div className="md:col-span-3">
              <Tabs defaultValue="referrals" className="space-y-3">
                <TabsList className="mb-2">
                  <TabsTrigger value="referrals" className="text-xs">Referrals</TabsTrigger>
                  <TabsTrigger value="payments" className="text-xs">Payments</TabsTrigger>
                </TabsList>
                
                <TabsContent value="referrals">
                  <Card className="shadow-sm">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-base">My Referrals</CardTitle>
                      <CardDescription className="text-xs">
                        Track the status of all your referrals
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-3">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="text-xs">Name</TableHead>
                              <TableHead className="text-xs">Company</TableHead>
                              <TableHead className="text-xs">Status</TableHead>
                              <TableHead className="text-xs">Date</TableHead>
                              <TableHead className="text-xs">Payment</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {referrals.map(referral => (
                              <TableRow key={referral.id}>
                                <TableCell className="text-xs">{referral.name}</TableCell>
                                <TableCell className="text-xs">{referral.company}</TableCell>
                                <TableCell>
                                  <span className={`px-1.5 py-0.5 rounded-full text-xs ${
                                    referral.status === "Hired" ? "bg-green-100 text-green-800" :
                                    referral.status === "Accepted" ? "bg-blue-100 text-blue-800" :
                                    referral.status === "Interview" ? "bg-purple-100 text-purple-800" :
                                    "bg-amber-100 text-amber-800"
                                  }`}>
                                    {referral.status}
                                  </span>
                                </TableCell>
                                <TableCell className="text-xs">{referral.date}</TableCell>
                                <TableCell className="text-xs">
                                  {referral.payment > 0 ? `₹${referral.payment.toLocaleString()}` : '-'}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="payments">
                  <Card className="shadow-sm">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-base">Payment History</CardTitle>
                      <CardDescription className="text-xs">
                        Track all your earnings from successful referrals
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-3">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="text-xs">Date</TableHead>
                              <TableHead className="text-xs">Referral</TableHead>
                              <TableHead className="text-xs">Company</TableHead>
                              <TableHead className="text-xs">Amount</TableHead>
                              <TableHead className="text-xs">Status</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {referrals.filter(r => r.payment > 0).map(payment => (
                              <TableRow key={payment.id}>
                                <TableCell className="text-xs">{payment.date}</TableCell>
                                <TableCell className="text-xs">{payment.name}</TableCell>
                                <TableCell className="text-xs">{payment.company}</TableCell>
                                <TableCell className="text-xs">₹{payment.payment.toLocaleString()}</TableCell>
                                <TableCell>
                                  <span className="px-1.5 py-0.5 rounded-full text-xs bg-green-100 text-green-800">
                                    Completed
                                  </span>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar with payment options */}
            <div>
              <Card className="mb-4 shadow-sm">
                <CardHeader className="p-3">
                  <CardTitle className="text-base">Payment Methods</CardTitle>
                  <CardDescription className="text-xs">
                    How you want to receive payments
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 pt-0 space-y-2">
                  <div className="flex items-center space-x-3 p-2 rounded-md border">
                    <IndianRupee className="h-4 w-4 text-brand" />
                    <div className="flex-1">
                      <h4 className="text-xs font-medium">UPI Payment</h4>
                      <p className="text-xs text-muted-foreground">Direct bank transfers</p>
                    </div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-2 rounded-md border bg-muted/40">
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                    <div className="flex-1">
                      <h4 className="text-xs font-medium">Bank Transfer</h4>
                      <p className="text-xs text-muted-foreground">Coming soon</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-2 rounded-md border bg-muted/40">
                    <Wallet className="h-4 w-4 text-muted-foreground" />
                    <div className="flex-1">
                      <h4 className="text-xs font-medium">Digital Wallet</h4>
                      <p className="text-xs text-muted-foreground">Coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardHeader className="p-3">
                  <CardTitle className="text-base">UPI Details</CardTitle>
                  <CardDescription className="text-xs">
                    Add your UPI ID to receive payments
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <form onSubmit={handleUpiSubmit}>
                    <div className="space-y-2">
                      <Label htmlFor="upiId" className="text-xs">Your UPI ID</Label>
                      <Input 
                        id="upiId" 
                        placeholder="name@bank" 
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        className="h-8 text-xs"
                      />
                      <p className="text-xs text-muted-foreground">
                        Example: yourname@upi
                      </p>
                    </div>
                    <Button type="submit" className="w-full mt-3 h-8 text-xs">
                      Save UPI Details
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="p-3 pt-0 flex flex-col items-start">
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground block mb-0.5">Free Referrals Promotion</span>
                    No charges for your first 5 referrals!
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </>
      ) : (
        // Job seeker view with realistic data
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <Card className="shadow-sm">
              <CardHeader className="p-3">
                <CardTitle className="text-xs font-medium text-muted-foreground">Total Applications</CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold">{applications.length}</div>
                  <Briefcase className="h-4 w-4 text-blue-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm">
              <CardHeader className="p-3">
                <CardTitle className="text-xs font-medium text-muted-foreground">Under Review</CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold">{applications.filter(a => a.status === "Under Review").length}</div>
                  <TrendingDown className="h-4 w-4 text-amber-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm">
              <CardHeader className="p-3">
                <CardTitle className="text-xs font-medium text-muted-foreground">Interviews</CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold">{applications.filter(a => a.status === "Interview Scheduled").length}</div>
                  <TrendingUp className="h-4 w-4 text-purple-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm">
              <CardHeader className="p-3">
                <CardTitle className="text-xs font-medium text-muted-foreground">Offers</CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold">{applications.filter(a => a.status === "Offer Received").length}</div>
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3">
              <Card className="shadow-sm">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-base">My Applications</CardTitle>
                  <CardDescription className="text-xs">
                    Track all your job applications and referral requests
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-xs">Position</TableHead>
                          <TableHead className="text-xs">Company</TableHead>
                          <TableHead className="text-xs">Referrer</TableHead>
                          <TableHead className="text-xs">Status</TableHead>
                          <TableHead className="text-xs">Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {applications.map(app => (
                          <TableRow key={app.id}>
                            <TableCell className="text-xs">{app.position}</TableCell>
                            <TableCell className="text-xs">{app.company}</TableCell>
                            <TableCell className="text-xs">{app.referrer}</TableCell>
                            <TableCell>
                              <span className={`px-1.5 py-0.5 rounded-full text-xs ${
                                app.status === "Offer Received" ? "bg-green-100 text-green-800" :
                                app.status === "Interview Scheduled" ? "bg-purple-100 text-purple-800" :
                                app.status === "Under Review" ? "bg-blue-100 text-blue-800" :
                                "bg-red-100 text-red-800"
                              }`}>
                                {app.status}
                              </span>
                            </TableCell>
                            <TableCell className="text-xs">{app.date}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="shadow-sm">
                <CardHeader className="p-3">
                  <CardTitle className="text-base">Find Referrers</CardTitle>
                  <CardDescription className="text-xs">
                    Get referred to your dream companies
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 pt-0 space-y-3">
                  <p className="text-xs">Browse through our network of industry professionals willing to refer qualified candidates.</p>
                  
                  <Button asChild className="w-full h-8 text-xs">
                    <a href="/referrers">Browse Referrers</a>
                  </Button>
                  
                  <Button asChild variant="outline" className="w-full h-8 text-xs">
                    <a href="/companies">Browse Companies</a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="mt-4 shadow-sm">
                <CardHeader className="p-3">
                  <CardTitle className="text-base">Application Tips</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <ul className="space-y-2 text-xs">
                    <li className="flex gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                      <span>Update your profile with relevant skills</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                      <span>Personalize your referral requests</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                      <span>Follow up within a week of applying</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                      <span>Keep your resume updated & tailored</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;

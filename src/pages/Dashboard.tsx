
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
import { CreditCard, Wallet, IndianRupee, TrendingUp, TrendingDown } from "lucide-react";

const Dashboard = () => {
  const { currentUser, loading } = useAuth();
  const [upiId, setUpiId] = useState("");
  
  // Mock data for referrals
  const referrals = [
    { id: 1, name: "Ajay Sharma", company: "TCS", status: "Pending", date: "2025-05-10", payment: 0 },
    { id: 2, name: "Priya Patel", company: "Infosys", status: "Accepted", date: "2025-05-08", payment: 5000 },
    { id: 3, name: "Vikram Singh", company: "Wipro", status: "Interview", date: "2025-05-05", payment: 0 },
    { id: 4, name: "Neha Gupta", company: "HCL", status: "Hired", date: "2025-04-28", payment: 10000 },
    { id: 5, name: "Rajesh Kumar", company: "Tech Mahindra", status: "Hired", date: "2025-04-20", payment: 8000 },
  ];
  
  // Stats calculation
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

  // Handle loading state and redirect if not authenticated
  if (loading) return <div className="container mx-auto py-12 flex justify-center">Loading...</div>;
  if (!currentUser) return <Navigate to="/signin" replace />;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">My Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Stats Cards */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Referrals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{totalReferrals}</div>
              <TrendingUp className="h-6 w-6 text-teal-500" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {totalReferrals > 5 ? 'Standard charges apply' : `${5 - totalReferrals} free referrals remaining`}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Referrals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{pendingReferrals}</div>
              <TrendingDown className="h-6 w-6 text-amber-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Successful Hires</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{hiredReferrals}</div>
              <TrendingUp className="h-6 w-6 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">₹{totalEarnings.toLocaleString()}</div>
              <IndianRupee className="h-6 w-6 text-brand" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Main content area */}
        <div className="md:col-span-3">
          <Tabs defaultValue="referrals">
            <TabsList className="mb-4">
              <TabsTrigger value="referrals">Referrals</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
            </TabsList>
            
            <TabsContent value="referrals">
              <Card>
                <CardHeader>
                  <CardTitle>My Referrals</CardTitle>
                  <CardDescription>
                    Track the status of all your referrals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Payment</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {referrals.map(referral => (
                        <TableRow key={referral.id}>
                          <TableCell>{referral.name}</TableCell>
                          <TableCell>{referral.company}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              referral.status === "Hired" ? "bg-green-100 text-green-800" :
                              referral.status === "Accepted" ? "bg-blue-100 text-blue-800" :
                              referral.status === "Interview" ? "bg-purple-100 text-purple-800" :
                              "bg-amber-100 text-amber-800"
                            }`}>
                              {referral.status}
                            </span>
                          </TableCell>
                          <TableCell>{referral.date}</TableCell>
                          <TableCell>
                            {referral.payment > 0 ? `₹${referral.payment.toLocaleString()}` : '-'}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="payments">
              <Card>
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                  <CardDescription>
                    Track all your earnings from successful referrals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Referral</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {referrals.filter(r => r.payment > 0).map(payment => (
                        <TableRow key={payment.id}>
                          <TableCell>{payment.date}</TableCell>
                          <TableCell>{payment.name}</TableCell>
                          <TableCell>{payment.company}</TableCell>
                          <TableCell>₹{payment.payment.toLocaleString()}</TableCell>
                          <TableCell>
                            <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                              Completed
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Sidebar with payment options */}
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>
                How you want to receive payments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4 p-3 rounded-lg border">
                <IndianRupee className="h-5 w-5 text-brand" />
                <div className="flex-1">
                  <h4 className="font-medium">UPI Payment</h4>
                  <p className="text-sm text-muted-foreground">Direct bank transfers</p>
                </div>
                <div className="h-4 w-4 rounded-full bg-green-500"></div>
              </div>
              
              <div className="flex items-center space-x-4 p-3 rounded-lg border bg-muted/40">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <h4 className="font-medium">Bank Transfer</h4>
                  <p className="text-sm text-muted-foreground">Coming soon</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-3 rounded-lg border bg-muted/40">
                <Wallet className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <h4 className="font-medium">Digital Wallet</h4>
                  <p className="text-sm text-muted-foreground">Coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>UPI Details</CardTitle>
              <CardDescription>
                Add your UPI ID to receive payments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpiSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="upiId">Your UPI ID</Label>
                  <Input 
                    id="upiId" 
                    placeholder="name@bank" 
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Example: yourname@upi
                  </p>
                </div>
                <Button type="submit" className="w-full mt-4">
                  Save UPI Details
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground block mb-1">Free Referrals Promotion</span>
                No charges for your first 5 referrals!
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

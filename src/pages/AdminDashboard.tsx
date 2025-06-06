
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
import { Users, Building2, DollarSign, TrendingUp, LogOut, UserCheck, UserX } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminStatus = localStorage.getItem("adminLoggedIn");
    setIsAdmin(adminStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    toast({
      title: "Logged out",
      description: "You have been logged out from admin panel.",
    });
    navigate("/admin/login");
  };

  // Mock admin data
  const stats = {
    totalUsers: 15742,
    totalReferrers: 3847,
    totalCompanies: 245,
    totalReferrals: 8923,
    revenue: 2847500,
    activeReferrals: 423
  };

  const recentUsers = [
    { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", type: "Job Seeker", status: "Active", joinDate: "2025-01-10" },
    { id: 2, name: "Priya Patel", email: "priya@tech.com", type: "Referrer", status: "Active", joinDate: "2025-01-09" },
    { id: 3, name: "Amit Kumar", email: "amit@startup.in", type: "Job Seeker", status: "Pending", joinDate: "2025-01-08" },
    { id: 4, name: "Sneha Reddy", email: "sneha@corp.com", type: "Referrer", status: "Active", joinDate: "2025-01-07" },
    { id: 5, name: "Vikram Singh", email: "vikram@tech.in", type: "Job Seeker", status: "Suspended", joinDate: "2025-01-06" },
  ];

  const recentReferrals = [
    { id: 1, candidate: "Rajesh Kumar", referrer: "Priya Patel", company: "Google", status: "Hired", amount: 25000 },
    { id: 2, candidate: "Neha Gupta", referrer: "Amit Singh", company: "Microsoft", status: "Interview", amount: 0 },
    { id: 3, candidate: "Arjun Verma", referrer: "Sneha Reddy", company: "Amazon", status: "Pending", amount: 0 },
    { id: 4, candidate: "Kavya Sharma", referrer: "Rahul Patel", company: "Meta", status: "Hired", amount: 30000 },
    { id: 5, candidate: "Rohan Gupta", referrer: "Ananya Singh", company: "Apple", status: "Rejected", amount: 0 },
  ];

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="container mx-auto py-6 px-3">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-600">Manage GetReferred platform</p>
        </div>
        <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
          <LogOut size={16} />
          Logout
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Users</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
              <Users className="h-5 w-5 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Referrers</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{stats.totalReferrers.toLocaleString()}</div>
              <UserCheck className="h-5 w-5 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Companies</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{stats.totalCompanies}</div>
              <Building2 className="h-5 w-5 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Referrals</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{stats.totalReferrals.toLocaleString()}</div>
              <TrendingUp className="h-5 w-5 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Referrals</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{stats.activeReferrals}</div>
              <UserX className="h-5 w-5 text-amber-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Revenue</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">₹{(stats.revenue / 100000).toFixed(1)}L</div>
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Users */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
            <CardDescription>Latest user registrations</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentUsers.map(user => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.type}</TableCell>
                    <TableCell>
                      <Badge variant={
                        user.status === "Active" ? "default" : 
                        user.status === "Pending" ? "secondary" : "destructive"
                      }>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-gray-500">{user.joinDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recent Referrals */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Referrals</CardTitle>
            <CardDescription>Latest referral activities</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Candidate</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentReferrals.map(referral => (
                  <TableRow key={referral.id}>
                    <TableCell className="font-medium">{referral.candidate}</TableCell>
                    <TableCell>{referral.company}</TableCell>
                    <TableCell>
                      <Badge variant={
                        referral.status === "Hired" ? "default" : 
                        referral.status === "Interview" ? "secondary" : 
                        referral.status === "Pending" ? "outline" : "destructive"
                      }>
                        {referral.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {referral.amount > 0 ? `₹${referral.amount.toLocaleString()}` : '-'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;

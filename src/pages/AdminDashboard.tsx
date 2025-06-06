import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Shield, LogOut, Users, Briefcase, TrendingUp, DollarSign, UserPlus, Building2, Mail, BarChart3
} from "lucide-react";

const AdminDashboard = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminLogin = () => {
      const adminLoggedIn = localStorage.getItem("adminLoggedIn");
      setIsAdminLoggedIn(adminLoggedIn === "true");
      
      if (adminLoggedIn !== "true") {
        navigate("/admin/login");
      }
    };

    checkAdminLogin();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin/login");
  };

  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Total Users", value: "2,847", change: "+12%", icon: Users },
    { label: "Active Jobs", value: "156", change: "+23%", icon: Briefcase },
    { label: "Successful Referrals", value: "1,234", change: "+18%", icon: TrendingUp },
    { label: "Monthly Revenue", value: "₹4.2L", change: "+31%", icon: DollarSign },
  ];

  const usersData = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "User", status: "Active", joined: "2023-01-15" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "User", status: "Active", joined: "2023-02-20" },
    { id: 3, name: "Alice Johnson", email: "alice.j@example.com", role: "Admin", status: "Active", joined: "2023-03-10" },
    { id: 4, name: "Bob Williams", email: "bob.w@example.com", role: "User", status: "Suspended", joined: "2023-04-05" },
  ];

  const referralsData = [
    { id: 1, candidate: "Eve Brown", position: "Software Engineer", company: "TechCorp", referrer: "John Doe", status: "Approved", date: "2024-01-20" },
    { id: 2, candidate: "Charlie Green", position: "Product Manager", company: "Innovation Labs", referrer: "Jane Smith", status: "Pending", date: "2024-01-18" },
    { id: 3, candidate: "Grace White", position: "UX Designer", company: "DesignHub", referrer: "Alice Johnson", status: "Approved", date: "2024-01-15" },
    { id: 4, candidate: "David Black", position: "Data Scientist", company: "DataTech", referrer: "Bob Williams", status: "Pending", date: "2024-01-12" },
  ];

  const jobsData = [
    { id: 1, title: "Senior Software Engineer", company: "TechCorp", applicants: 45, status: "Active", posted: "2024-01-15" },
    { id: 2, title: "Product Manager", company: "Innovation Labs", applicants: 32, status: "Active", posted: "2024-01-14" },
    { id: 3, title: "UX Designer", company: "DesignHub", applicants: 28, status: "Paused", posted: "2024-01-13" },
    { id: 4, title: "Data Scientist", company: "DataTech", applicants: 38, status: "Active", posted: "2024-01-12" },
    { id: 5, title: "DevOps Engineer", company: "CloudSystems", applicants: 22, status: "Closed", posted: "2024-01-10" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-4">
              <Shield className="h-8 w-8 text-brand" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600">Manage your referral platform</p>
              </div>
            </div>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
                  </div>
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-brand" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("overview")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "overview"
                    ? "border-brand text-brand"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("users")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "users"
                    ? "border-brand text-brand"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Users
              </button>
              <button
                onClick={() => setActiveTab("jobs")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "jobs"
                    ? "border-brand text-brand"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Jobs
              </button>
              <button
                onClick={() => setActiveTab("referrals")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "referrals"
                    ? "border-brand text-brand"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Referrals
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">New user registration: john.doe@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Job posted: Senior Developer at TechCorp</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Referral request submitted for Google</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Payment processed: ₹25,000 referral bonus</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start" variant="outline">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add New Admin User
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Building2 className="h-4 w-4 mr-2" />
                  Verify Company
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Announcement
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "users" && (
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage registered users and their accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {usersData.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant={user.role === "Admin" ? "default" : "secondary"}>
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.joined}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">Edit</Button>
                          <Button size="sm" variant="outline">Suspend</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {activeTab === "jobs" && (
          <Card>
            <CardHeader>
              <CardTitle>Job Management</CardTitle>
              <CardDescription>Manage job postings and applications</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Applicants</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Posted Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobsData.map((job) => (
                    <TableRow key={job.id}>
                      <TableCell className="font-medium">{job.title}</TableCell>
                      <TableCell>{job.company}</TableCell>
                      <TableCell>{job.applicants}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            job.status === "Active" ? "default" : 
                            job.status === "Paused" ? "secondary" : 
                            "outline"
                          }
                        >
                          {job.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{job.posted}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">View</Button>
                          <Button size="sm" variant="outline">Edit</Button>
                          <Button size="sm" variant="outline">
                            {job.status === "Active" ? "Pause" : "Activate"}
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {activeTab === "referrals" && (
          <Card>
            <CardHeader>
              <CardTitle>Referral Management</CardTitle>
              <CardDescription>Track and manage referral requests</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Candidate</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Referrer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {referralsData.map((referral) => (
                    <TableRow key={referral.id}>
                      <TableCell className="font-medium">{referral.candidate}</TableCell>
                      <TableCell>{referral.position}</TableCell>
                      <TableCell>{referral.company}</TableCell>
                      <TableCell>{referral.referrer}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            referral.status === "Approved" ? "default" : 
                            referral.status === "Pending" ? "secondary" : 
                            "outline"
                          }
                        >
                          {referral.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{referral.date}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">Review</Button>
                          <Button size="sm" variant="outline">Contact</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

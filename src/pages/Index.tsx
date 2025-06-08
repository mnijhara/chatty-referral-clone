
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  Building2, 
  TrendingUp, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  Search,
  Briefcase,
  DollarSign,
  Clock,
  Award,
  Target,
  Zap
} from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for companies
  const featuredCompanies = [
    { id: 1, name: "Google", logo: "/placeholder.svg", referrers: 45, activeJobs: 23 },
    { id: 2, name: "Microsoft", logo: "/placeholder.svg", referrers: 38, activeJobs: 18 },
    { id: 3, name: "Amazon", logo: "/placeholder.svg", referrers: 52, activeJobs: 31 },
    { id: 4, name: "Meta", logo: "/placeholder.svg", referrers: 29, activeJobs: 15 },
  ];

  // Mock data for top referrers
  const topReferrers = [
    { id: 1, name: "Priya Sharma", company: "Google", title: "Senior SDE", rating: 4.9, referrals: 28 },
    { id: 2, name: "Rahul Kumar", company: "Microsoft", title: "Product Manager", rating: 4.8, referrals: 22 },
    { id: 3, name: "Sneha Reddy", company: "Amazon", title: "Data Scientist", rating: 4.9, referrals: 35 },
  ];

  const stats = [
    { label: "Active Referrers", value: "2,500+", icon: Users },
    { label: "Companies", value: "500+", icon: Building2 },
    { label: "Success Rate", value: "85%", icon: TrendingUp },
    { label: "Average Rating", value: "4.8", icon: Star },
  ];

  const benefits = [
    {
      icon: Target,
      title: "9x Higher Success Rate",
      description: "Get referred and increase your chances of landing an interview by 9 times"
    },
    {
      icon: Zap,
      title: "Skip the Queue",
      description: "Bypass traditional applications and get your resume directly to hiring managers"
    },
    {
      icon: Award,
      title: "Quality Referrers",
      description: "Connect with verified employees from top companies who want to help"
    },
    {
      icon: DollarSign,
      title: "Earn Referral Bonuses",
      description: "Referrers earn bonuses when their referrals get hired - everyone wins"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-cyan-400/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-2xl">
                <Users className="h-10 w-10" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Referred</span> to Your Dream Job
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Connect with employees at top companies who can refer you directly. Skip traditional applications and increase your interview chances by 9x through employee referrals.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search companies, roles, or referrers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg bg-white/95 backdrop-blur-md border-0 shadow-xl rounded-2xl"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link to="/companies">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                  Browse Companies
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/referrers">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold bg-white/10 border-white/20 text-white hover:bg-white/20 shadow-xl">
                  Find Referrers
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Why Choose GetReferred?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your job search with the power of employee referrals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-20 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Featured Companies
            </h2>
            <p className="text-xl text-gray-600">
              Get referred to top companies hiring now
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredCompanies.map((company) => (
              <Card key={company.id} className="hover:shadow-lg transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{company.name}</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{company.referrers} referrers</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{company.activeJobs} active jobs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/companies">
              <Button size="lg" variant="outline">
                View All Companies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Referrers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Top Referrers
            </h2>
            <p className="text-xl text-gray-600">
              Connect with verified professionals ready to help
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {topReferrers.map((referrer) => (
              <Card key={referrer.id} className="hover:shadow-lg transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        {referrer.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold">{referrer.name}</h3>
                      <p className="text-sm text-gray-600">{referrer.title}</p>
                      <p className="text-sm text-gray-500">{referrer.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span>{referrer.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span>{referrer.referrals} referrals</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/referrers">
              <Button size="lg" variant="outline">
                View All Referrers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              How GetReferred Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get referred in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Find Your Company</h3>
              <p className="text-gray-600">
                Browse our network of 500+ companies and find the one you want to work for
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Connect with Referrers</h3>
              <p className="text-gray-600">
                Connect with verified employees who can refer you directly to hiring managers
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-red-600 text-white flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Interviewed</h3>
              <p className="text-gray-600">
                Skip the resume black hole and get your application directly to decision makers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Get <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Referred</span>?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of professionals who have transformed their job search with GetReferred
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/companies">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/post-job">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold bg-white/10 border-white/20 text-white hover:bg-white/20">
                Post a Job
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

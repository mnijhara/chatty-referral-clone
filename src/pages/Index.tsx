
import { useState } from "react";
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
  Zap,
  Shield,
  MessageSquare,
  BarChart3,
  Handshake
} from "lucide-react";
import { referrers, companies } from "@/utils/placeholderData";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Real data from placeholder
  const featuredCompanies = companies.slice(0, 8);
  const topReferrers = referrers.slice(0, 6);

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
      icon: Shield,
      title: "Verified Referrers",
      description: "All referrers are verified employees with proven track records"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Clear pricing with money-back guarantee if referral doesn't result in interview"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Find Your Target Company",
      description: "Browse 500+ companies or search for specific roles and companies you want to work for",
      icon: Search
    },
    {
      step: "2", 
      title: "Connect with Verified Referrers",
      description: "Choose from verified employees based on their success rate, department, and reviews",
      icon: Handshake
    },
    {
      step: "3",
      title: "Get Direct Access",
      description: "Receive personalized referral with direct submission to hiring managers",
      icon: Target
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      content: "Got my dream job at Google through GetReferred. The referrer was incredibly helpful and guided me through the entire process.",
      rating: 5
    },
    {
      name: "Rajesh Kumar", 
      role: "Product Manager at Microsoft",
      content: "As a referrer, I've helped 15+ people land jobs. The platform makes it easy to connect with quality candidates.",
      rating: 5
    },
    {
      name: "Sneha Reddy",
      role: "Data Scientist at Amazon", 
      content: "The referral process was smooth and transparent. Got an interview within 2 weeks of applying.",
      rating: 5
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-cyan-400/20"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-white/5 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-400/10 rounded-full animate-bounce"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-2xl">
                <Users className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Get <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Referred</span> to Your Dream Job
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Connect with verified employees at top companies. Skip traditional applications and increase your interview chances by 9x through employee referrals.
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-6 top-6 h-6 w-6 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search companies, roles, or referrers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-16 pr-6 py-6 text-xl bg-white/95 backdrop-blur-md border-0 shadow-2xl rounded-2xl"
                />
                <Button className="absolute right-2 top-2 px-8 py-4 text-lg">
                  Search
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <Link to="/companies">
                <Button size="lg" className="px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300">
                  Browse Companies
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/referrers">
                <Button variant="outline" size="lg" className="px-12 py-6 text-xl font-semibold bg-white/10 border-white/20 text-white hover:bg-white/20 shadow-2xl">
                  Find Referrers
                </Button>
              </Link>
            </div>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="h-10 w-10 text-cyan-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/80 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Why Choose GetReferred?
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Transform your job search with the power of employee referrals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105">
                <CardHeader className="pb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced */}
      <section className="py-24 bg-gradient-to-r from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              How GetReferred Works
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Get referred in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center mx-auto mb-8 text-2xl font-bold shadow-xl">
                  {step.step}
                </div>
                <div className="mb-6">
                  <step.icon className="h-12 w-12 mx-auto text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-6">{step.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-10 right-0 transform translate-x-1/2">
                    <ArrowRight className="h-8 w-8 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Companies - Enhanced */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Featured Companies
            </h2>
            <p className="text-2xl text-gray-600">
              Get referred to top companies hiring now
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-12">
            {featuredCompanies.map((company) => (
              <Link key={company.id} to={`/companies/${company.id}`}>
                <Card className="hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center mx-auto mb-6">
                      <Building2 className="h-10 w-10 text-gray-600" />
                    </div>
                    <h3 className="font-semibold text-xl mb-3">{company.name}</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center justify-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{company.employees} employees</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        <span>{company.industry}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/companies">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                View All Companies
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Referrers - Enhanced */}
      <section className="py-24 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Top Referrers
            </h2>
            <p className="text-2xl text-gray-600">
              Connect with verified professionals ready to help
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {topReferrers.map((referrer) => (
              <Link key={referrer.id} to={`/referrers/${referrer.id}`}>
                <Card className="hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg">
                          {referrer.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{referrer.name}</h3>
                        <p className="text-gray-600">{referrer.role}</p>
                        <p className="text-blue-600 font-medium">{referrer.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                        <span className="font-medium">4.9</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-5 w-5 text-gray-500" />
                        <span>{referrer.successfulReferrals} referrals</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Verified</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/referrers">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                View All Referrers
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-2xl text-gray-600">
              Hear from professionals who transformed their careers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Get <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Referred</span>?
            </h2>
            <p className="text-2xl text-white/90 mb-12 leading-relaxed">
              Join thousands of professionals who have transformed their job search with GetReferred
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <Link to="/companies">
                <Button size="lg" className="px-12 py-6 text-xl font-semibold shadow-2xl">
                  Start Your Journey
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/post-job">
                <Button variant="outline" size="lg" className="px-12 py-6 text-xl font-semibold bg-white/10 border-white/20 text-white hover:bg-white/20 shadow-2xl">
                  Post a Job
                </Button>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6" />
                <span className="text-lg">Secure & Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6" />
                <span className="text-lg">Money-back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-6 w-6" />
                <span className="text-lg">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

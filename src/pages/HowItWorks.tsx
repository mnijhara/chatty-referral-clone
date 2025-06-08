
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Search, 
  Users, 
  MessageCircle, 
  FileText, 
  CheckCircle, 
  Briefcase,
  Building2,
  UserCheck,
  DollarSign,
  ArrowRight,
  Star,
  Target,
  Clock,
  Award
} from "lucide-react";

const HowItWorks = () => {
  const jobSeekerSteps = [
    {
      icon: Search,
      title: "Discover Companies",
      description: "Browse our network of 500+ top companies and find roles that match your skills and interests.",
      details: ["Search by company, role, or industry", "Filter by location and experience level", "View company culture and benefits"]
    },
    {
      icon: Users,
      title: "Find Referrers",
      description: "Connect with verified employees who can refer you directly to hiring managers.",
      details: ["View referrer profiles and ratings", "See their success rate and experience", "Check availability and response time"]
    },
    {
      icon: MessageCircle,
      title: "Request Referral",
      description: "Send a personalized referral request with your resume and why you're a great fit.",
      details: ["Craft a compelling message", "Attach your updated resume", "Highlight relevant experience"]
    },
    {
      icon: CheckCircle,
      title: "Get Referred",
      description: "Receive your referral and track your application progress through our platform.",
      details: ["Real-time application updates", "Direct communication with referrer", "Interview preparation support"]
    }
  ];

  const referrerSteps = [
    {
      icon: UserCheck,
      title: "Join as Referrer",
      description: "Sign up and verify your employment at participating companies.",
      details: ["Quick verification process", "Set your availability and preferences", "Choose industries you're familiar with"]
    },
    {
      icon: FileText,
      title: "Review Requests",
      description: "Browse referral requests from qualified candidates in your network.",
      details: ["View candidate profiles and resumes", "Check skill matches for open roles", "Read personalized messages"]
    },
    {
      icon: Building2,
      title: "Submit Referrals",
      description: "Refer qualified candidates through your company's internal system.",
      details: ["Use company referral portal", "Add your endorsement", "Track referral status"]
    },
    {
      icon: DollarSign,
      title: "Earn Rewards",
      description: "Get paid referral bonuses when your candidates are successfully hired.",
      details: ["Transparent bonus structure", "Quick payout process", "Track your earnings"]
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "9x Higher Success Rate",
      stat: "85%",
      description: "Success rate for referred candidates vs traditional applications"
    },
    {
      icon: Clock,
      title: "Faster Hiring Process",
      stat: "31%",
      description: "Faster time-to-hire compared to standard recruitment"
    },
    {
      icon: Award,
      title: "Quality Matches",
      stat: "4.8/5",
      description: "Average satisfaction rating from both candidates and referrers"
    },
    {
      icon: DollarSign,
      title: "Referral Bonuses",
      stat: "₹50K+",
      description: "Average referral bonus paid to successful referrers"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-cyan-400/20"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-2xl">
                <Briefcase className="h-10 w-10" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              How <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">GetReferred</span> Works
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover how our platform connects job seekers with employee referrers to create win-win opportunities for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{benefit.stat}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Job Seekers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-blue-600 border-blue-200">
              For Job Seekers
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Get Referred in 4 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your job search with the power of employee referrals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {jobSeekerSteps.map((step, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center absolute -top-3 -right-3 text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4">
                    {step.description}
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/companies">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                Start Your Job Search
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* For Referrers */}
      <section className="py-20 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-green-600 border-green-200">
              For Referrers
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Earn Money by Helping Others
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help talented professionals join your company while earning referral bonuses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {referrerSteps.map((step, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-600 text-white flex items-center justify-center absolute -top-3 -right-3 text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4">
                    {step.description}
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/signup">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold">
                Become a Referrer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from our GetReferred community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-0 bg-white/90 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <h3 className="font-semibold">Arjun Patel</h3>
                  <p className="text-gray-600">Software Engineer at Google</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "GetReferred completely changed my job search. After months of applying through traditional channels with no luck, I got referred through the platform and landed my dream job at Google within 3 weeks!"
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                ))}
              </div>
            </Card>

            <Card className="p-8 border-0 bg-white/90 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div>
                  <h3 className="font-semibold">Priya Sharma</h3>
                  <p className="text-gray-600">Senior Manager at Microsoft</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "As a referrer, I've helped 15+ talented professionals join Microsoft. It feels great to help others while earning referral bonuses. The platform makes the entire process seamless."
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of professionals who have transformed their careers with GetReferred
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/companies">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                Find Your Dream Job
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold bg-white/10 border-white/20 text-white hover:bg-white/20">
                Become a Referrer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;

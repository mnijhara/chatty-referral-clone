
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { companies, referrers } from "@/utils/placeholderData";
import CompanyCard from "@/components/CompanyCard";
import ReferrerCard from "@/components/ReferrerCard";
import { Handshake, GraduationCap, Trophy, ArrowRight, Star, CheckCircle, Users, Building2 } from "lucide-react";

const Index = () => {
  const featuredCompanies = companies.slice(0, 4);
  const featuredReferrers = referrers.slice(0, 4);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Generate reliable avatar - using more diverse professional images
  const generateAvatar = (name: string, isFemale: boolean, index: number) => {
    // Use Unsplash images with diverse professional photos
    const femaleAvatars = [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      "https://images.unsplash.com/photo-1560535733-540e0b0068b9"
    ];
    
    const maleAvatars = [
      "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    ];
    
    // Fallback images
    const fallbackFemaleImage = "https://ui-avatars.com/api/?name=F&background=f0f0f0&color=333";
    const fallbackMaleImage = "https://ui-avatars.com/api/?name=M&background=f0f0f0&color=333";
    
    return isFemale 
      ? (femaleAvatars[index % 4] || fallbackFemaleImage)
      : (maleAvatars[index % 4] || fallbackMaleImage);
  };

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Enhanced Hero Section with premium gradients and animations */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Multi-layer background with animated gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-cyan-400/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')] bg-cover bg-center opacity-10"></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-bounce blur-sm"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-400/10 rounded-full animate-bounce delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                Get Referred to Your
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Dream Company
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Connect with employees at top companies who can refer you directly, 
                increasing your chances of landing an interview by up to 
                <span className="font-bold text-cyan-400"> 9x</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                <Link to="/companies" onClick={scrollToTop}>
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300">
                    Browse Companies
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/referrers" onClick={scrollToTop}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 backdrop-blur-sm px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                    Find Referrers
                    <Users className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section with glassmorphism */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/50 relative">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 text-center group hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">9x</div>
              <p className="text-gray-700 font-medium">Higher chance of getting an interview with a referral</p>
              <div className="mt-4 flex justify-center">
                <Star className="h-6 w-6 text-yellow-500" />
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 text-center group hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 delay-100">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">500+</div>
              <p className="text-gray-700 font-medium">Referrers from top companies</p>
              <div className="mt-4 flex justify-center">
                <Building2 className="h-6 w-6 text-purple-500" />
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 text-center group hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 delay-200">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">85%</div>
              <p className="text-gray-700 font-medium">Success rate for referral requests</p>
              <div className="mt-4 flex justify-center">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonial Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Hear from our happy customers who landed their dream jobs through reliable referrals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-white to-gray-50/80 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group transform hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gradient-to-r from-cyan-400 to-blue-500 p-0.5">
                  <img 
                    src={generateAvatar("Priya Sharma", true, 0)} 
                    alt="Priya Sharma" 
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://via.placeholder.com/150?text=Priya+S";
                    }}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">Priya Sharma</h3>
                  <p className="text-sm text-gray-600">Software Engineer at MakeMyTrip</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "Thanks to Referral Hire, I got a direct referral to MakeMyTrip and received an interview call within 2 days. I'm now working at my dream company!"
              </p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50/80 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group transform hover:-translate-y-1 delay-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gradient-to-r from-purple-400 to-pink-500 p-0.5">
                  <img 
                    src={generateAvatar("Rahul Verma", false, 1)} 
                    alt="Rahul Verma" 
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://via.placeholder.com/150?text=Rahul+V";
                    }}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">Rahul Verma</h3>
                  <p className="text-sm text-gray-600">Product Manager at Reliance Industries</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "After months of applying to jobs with no response, I got referred through this platform and landed a role at Reliance within weeks!"
              </p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50/80 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group transform hover:-translate-y-1 delay-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gradient-to-r from-green-400 to-emerald-500 p-0.5">
                  <img 
                    src={generateAvatar("Anjali Desai", true, 2)} 
                    alt="Anjali Desai" 
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://via.placeholder.com/150?text=Anjali+D";
                    }}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">Anjali Desai</h3>
                  <p className="text-sm text-gray-600">UI Designer at Tata Group</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "The referral I received through this platform helped me bypass the regular application process. I'm now leading design projects at Tata Group!"
              </p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Companies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Featured Companies</h2>
              <p className="text-gray-600 mt-2">Top companies looking for talented professionals</p>
            </div>
            <Link to="/companies" onClick={scrollToTop} className="text-blue-600 hover:text-blue-700 flex items-center font-semibold text-lg group">
              View All
              <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCompanies.map((company, index) => (
              <div key={company.id} className="transform hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 100}ms`}}>
                <CompanyCard
                  id={company.id}
                  name={company.name}
                  logo={company.logo}
                  industry={company.industry}
                  location={company.location}
                  referrersCount={company.referrersCount}
                  openPositions={company.openPositions}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/50 to-purple-50/50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Getting referred to your dream company has never been easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-gradient-to-br from-white to-cyan-50/80 rounded-2xl hover:shadow-2xl transition-all duration-500 border border-cyan-100 group transform hover:-translate-y-2">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Handshake className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Find a Referrer</h3>
              <p className="text-gray-600 leading-relaxed">
                Search for employees at your target companies who are open to providing referrals.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-white to-purple-50/80 rounded-2xl hover:shadow-2xl transition-all duration-500 border border-purple-100 group transform hover:-translate-y-2 delay-100">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <GraduationCap className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Submit Your Request</h3>
              <p className="text-gray-600 leading-relaxed">
                Send your resume and a personalized note to the referrer explaining why you're a good fit.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-white to-green-50/80 rounded-2xl hover:shadow-2xl transition-all duration-500 border border-green-100 group transform hover:-translate-y-2 delay-200">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Trophy className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Get Referred</h3>
              <p className="text-gray-600 leading-relaxed">
                If the referrer approves your request, they'll submit your referral through their company's system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Referrers Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Featured Referrers</h2>
              <p className="text-gray-600 mt-2">Connect with top professionals ready to help</p>
            </div>
            <Link to="/referrers" onClick={scrollToTop} className="text-purple-600 hover:text-purple-700 flex items-center font-semibold text-lg group">
              View All
              <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredReferrers.map((referrer, index) => (
              <div key={referrer.id} className="transform hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 100}ms`}}>
                <ReferrerCard
                  id={referrer.id}
                  name={referrer.name}
                  avatar={referrer.avatar}
                  company={referrer.company}
                  companyLogo={referrer.companyLogo}
                  role={referrer.role}
                  yearsAtCompany={referrer.yearsAtCompany}
                  successfulReferrals={referrer.successfulReferrals}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-cyan-400/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-400/10 rounded-full animate-bounce"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Get <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Referred?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Don't let your dream job slip away. Connect with referrers and increase your chances of landing an interview today.
            </p>
            <div className="flex justify-center">
              <Link to="/referrers" onClick={scrollToTop}>
                <Button size="lg" className="px-12 py-4 text-xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Find Referrers Now
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

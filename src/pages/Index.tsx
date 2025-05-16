
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { companies, referrers } from "@/utils/placeholderData";
import CompanyCard from "@/components/CompanyCard";
import ReferrerCard from "@/components/ReferrerCard";
import { Handshake, GraduationCap, Trophy } from "lucide-react";

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
    <div className="flex flex-col">
      {/* Hero Section with improved background and contrast */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand/90 to-brand/70 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-60 z-[1]"></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white animation-fade-in drop-shadow-lg">
              Get Referred to Your Dream Company
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 animation-fade-in drop-shadow-md">
              Connect with employees at top companies who can refer you directly,
              increasing your chances of landing an interview by up to 9x.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animation-fade-in">
              <Link to="/companies" onClick={scrollToTop}>
                <Button size="lg" className="w-full sm:w-auto">
                  Browse Companies
                </Button>
              </Link>
              <Link to="/referrers" onClick={scrollToTop}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white border-white/50">
                  Find Referrers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section - Improved layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Success Stories</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Hear from our happy customers who landed their dream jobs through reliable referrals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200">
                  <img 
                    src={generateAvatar("Priya Sharma", true, 0)} 
                    alt="Priya Sharma" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://via.placeholder.com/150?text=Priya+S";
                    }}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Priya Sharma</h3>
                  <p className="text-sm text-gray-600">Software Engineer at MakeMyTrip</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Thanks to Referral Hire, I got a direct referral to MakeMyTrip and received an interview call within 2 days. I'm now working at my dream company!"
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200">
                  <img 
                    src={generateAvatar("Rahul Verma", false, 1)} 
                    alt="Rahul Verma" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://via.placeholder.com/150?text=Rahul+V";
                    }}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Rahul Verma</h3>
                  <p className="text-sm text-gray-600">Product Manager at Reliance Industries</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "After months of applying to jobs with no response, I got referred through this platform and landed a role at Reliance within weeks!"
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200">
                  <img 
                    src={generateAvatar("Anjali Desai", true, 2)} 
                    alt="Anjali Desai" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://via.placeholder.com/150?text=Anjali+D";
                    }}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Anjali Desai</h3>
                  <p className="text-sm text-gray-600">UI Designer at Tata Group</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The referral I received through this platform helped me bypass the regular application process. I'm now leading design projects at Tata Group!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced visual appeal */}
      <section className="py-16 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-brand/5 to-brand/10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-brand mb-3">9x</div>
              <p className="text-gray-600">Higher chance of getting an interview with a referral</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-brand mb-3">500+</div>
              <p className="text-gray-600">Referrers from top companies</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-brand mb-3">85%</div>
              <p className="text-gray-600">Success rate for referral requests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companies - Improved spacing and hover effects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Companies</h2>
            <Link to="/companies" onClick={scrollToTop} className="text-brand hover:underline flex items-center">
              View All
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCompanies.map((company) => (
              <CompanyCard
                key={company.id}
                id={company.id}
                name={company.name}
                logo={company.logo}
                industry={company.industry}
                location={company.location}
                referrersCount={company.referrersCount}
                openPositions={company.openPositions}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Referrer Success Story - More engaging layout */}
      <section className="py-16 bg-brand/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold mb-4">Top Referrers Make a Difference</h2>
              <p className="text-gray-700 mb-6">
                Our platform's top referrers have helped hundreds of qualified candidates 
                land interviews and jobs at the best companies.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img 
                    src={generateAvatar("Aditya Sharma", false, 0)} 
                    alt="Aditya Sharma" 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://via.placeholder.com/150?text=Aditya+S";
                    }}
                  />
                  <div>
                    <h3 className="font-semibold">Aditya Sharma</h3>
                    <p className="text-sm text-gray-600">Senior Engineer at Mahindra Group</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "I've referred 12 qualified candidates through Referral Hire, and 10 of them 
                  got hired! It feels great to help talented professionals find opportunities 
                  while also earning referral bonuses."
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Professional at work" 
                className="rounded-lg shadow-md w-full h-96 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://via.placeholder.com/640x480?text=Professional+At+Work";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Referrers - Improved layout and hover effects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Referrers</h2>
            <Link to="/referrers" onClick={scrollToTop} className="text-brand hover:underline flex items-center">
              View All
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredReferrers.map((referrer) => (
              <ReferrerCard
                key={referrer.id}
                id={referrer.id}
                name={referrer.name}
                avatar={referrer.avatar}
                company={referrer.company}
                companyLogo={referrer.companyLogo}
                role={referrer.role}
                yearsAtCompany={referrer.yearsAtCompany}
                successfulReferrals={referrer.successfulReferrals}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced visual presentation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">
              Getting referred to your dream company has never been easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                <Handshake className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Find a Referrer</h3>
              <p className="text-gray-600">
                Search for employees at your target companies who are open to providing referrals.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Submit Your Request</h3>
              <p className="text-gray-600">
                Send your resume and a personalized note to the referrer explaining why you're a good fit.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                <Trophy className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Referred</h3>
              <p className="text-gray-600">
                If the referrer approves your request, they'll submit your referral through their company's system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Success Image Section - Enhanced visual appeal */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Professional working"
                className="rounded-lg shadow-md h-96 w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://via.placeholder.com/640x480?text=Professional+Working";
                }}
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold mb-4">Work at Top Companies</h2>
              <p className="text-gray-700 mb-6">
                Our platform connects you with insiders at the most desirable employers, 
                from established global leaders to innovative organizations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">✓</span>
                  <span>Get referred to roles that match your skills and experience.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">✓</span>
                  <span>Bypass the traditional application process and get noticed.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">✓</span>
                  <span>Receive insider tips to help you ace your interviews.</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/companies" onClick={scrollToTop}>
                  <Button>Find Your Next Opportunity</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced visual appeal */}
      <section className="py-16 bg-brand/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Referred?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Don't let your dream job slip away. Connect with referrers and increase your chances of landing an interview today.
            </p>
            <div className="flex justify-center">
              <Link to="/referrers" onClick={scrollToTop}>
                <Button size="lg" className="px-8">Find Referrers Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

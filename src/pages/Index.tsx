
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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="hero-gradient text-white py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-brand/90 to-brand/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center"></div>
        {/* Dark overlay to improve text visibility */}
        <div className="absolute inset-0 bg-black opacity-80 z-[1]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animation-fade-in drop-shadow-lg">
              Get Referred to Your Dream Company
            </h1>
            <p className="text-lg md:text-xl mb-8 animation-fade-in drop-shadow-md">
              Connect with employees at top tech companies who can refer you directly,
              increasing your chances of landing an interview by up to 9x.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animation-fade-in">
              <Link to="/companies" onClick={scrollToTop}>
                <Button size="lg" className="w-full sm:w-auto">
                  Browse Companies
                </Button>
              </Link>
              <Link to="/referrers" onClick={scrollToTop}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/20 hover:bg-white/30">
                  Find Referrers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">Success Stories</h2>
            <p className="text-gray-600 mt-2">Hear from our happy customers who landed their dream jobs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200">
                  <img 
                    src={generateIndianAvatar("Priya Sharma", true, 0)} 
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
                  <p className="text-sm text-gray-600">Software Engineer at TCS</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Thanks to Referral Hire, I got a direct referral to TCS and received an interview call within 2 days. I'm now working at my dream company!"
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200">
                  <img 
                    src={generateIndianAvatar("Rahul Verma", false, 1)} 
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
                  <p className="text-sm text-gray-600">Product Manager at Paytm</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "After months of applying to jobs with no response, I got referred through this platform and landed a role at Paytm within weeks!"
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200">
                  <img 
                    src={generateIndianAvatar("Anjali Desai", true, 2)} 
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
                  <p className="text-sm text-gray-600">UI Designer at MindTree</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The referral I received through this platform helped me bypass the regular application process. I'm now leading design projects at MindTree!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-brand mb-2">9x</div>
              <p className="text-gray-600">Higher chance of getting an interview with a referral</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-brand mb-2">500+</div>
              <p className="text-gray-600">Referrers from top tech companies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-brand mb-2">85%</div>
              <p className="text-gray-600">Success rate for referral requests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Companies</h2>
            <Link to="/companies" onClick={scrollToTop} className="text-brand hover:underline">
              View All →
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

      {/* Referrer Success Story */}
      <section className="py-16 bg-brand/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold mb-4">Top Referrers Make a Difference</h2>
              <p className="text-gray-700 mb-6">
                Our platform's top referrers have helped hundreds of qualified candidates 
                land interviews and jobs at India's best companies.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img 
                    src={generateIndianAvatar("Aditya Sharma", false, 0)} 
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
                    <p className="text-sm text-gray-600">Senior Engineer at InfoTech Solutions</p>
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
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                alt="Indian professional at work" 
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

      {/* Featured Referrers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Referrers</h2>
            <Link to="/referrers" onClick={scrollToTop} className="text-brand hover:underline">
              View All →
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

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">
              Getting referred to your dream company has never been easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                <Handshake className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Find a Referrer</h3>
              <p className="text-gray-600">
                Search for employees at your target companies who are open to providing referrals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Submit Your Request</h3>
              <p className="text-gray-600">
                Send your resume and a personalized note to the referrer explaining why you're a good fit.
              </p>
            </div>
            <div className="text-center">
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

      {/* Job Success Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Professional working"
                className="rounded-lg shadow-md h-96 w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://via.placeholder.com/640x480?text=Professional+Working";
                }}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Work at Top Companies</h2>
              <p className="text-gray-700 mb-6">
                Our platform connects you with insiders at the most desirable employers, 
                from established tech giants to innovative startups.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-1">✓</span>
                  <span>Get referred to roles that match your skills and experience.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-1">✓</span>
                  <span>Bypass the traditional application process and get noticed.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-1">✓</span>
                  <span>Receive insider tips to help you ace your interviews.</span>
                </li>
              </ul>
              <Link to="/companies" onClick={scrollToTop} className="inline-block mt-8">
                <Button>Find Your Next Opportunity</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Referred?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Don't let your dream job slip away. Connect with referrers and increase your chances of landing an interview today.
            </p>
            <div className="flex justify-center">
              <Link to="/referrers" onClick={scrollToTop}>
                <Button size="lg">Find Referrers Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

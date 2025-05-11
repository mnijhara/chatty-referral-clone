
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { companies, referrers } from "@/utils/placeholderData";
import CompanyCard from "@/components/CompanyCard";
import ReferrerCard from "@/components/ReferrerCard";

const Index = () => {
  const featuredCompanies = companies.slice(0, 4);
  const featuredReferrers = referrers.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animation-fade-in">
              Get Referred to Your Dream Company
            </h1>
            <p className="text-lg md:text-xl mb-8 animation-fade-in">
              Connect with employees at top companies who can refer you directly,
              increasing your chances of landing an interview by up to 9x.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animation-fade-in">
              <Link to="/companies">
                <Button size="lg" className="w-full sm:w-auto">
                  Browse Companies
                </Button>
              </Link>
              <Link to="/referrers">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20">
                  Find Referrers
                </Button>
              </Link>
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
            <Link to="/companies" className="text-brand hover:underline">
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

      {/* Featured Referrers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Referrers</h2>
            <Link to="/referrers" className="text-brand hover:underline">
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
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Find a Referrer</h3>
              <p className="text-gray-600">
                Search for employees at your target companies who are open to providing referrals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Submit Your Request</h3>
              <p className="text-gray-600">
                Send your resume and a personalized note to the referrer explaining why you're a good fit.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Referred</h3>
              <p className="text-gray-600">
                If the referrer approves your request, they'll submit your referral through their company's system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Referred?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Don't let your dream job slip away. Connect with referrers and increase your chances of landing an interview today.
            </p>
            <div className="flex justify-center">
              <Link to="/referrers">
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

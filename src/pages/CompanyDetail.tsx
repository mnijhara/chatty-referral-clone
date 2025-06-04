
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { getCompanyById, getReferrersByCompanyId } from "@/utils/placeholderData";
import ReferrerCard from "@/components/ReferrerCard";
import LogoGenerator from "@/components/LogoGenerator";
import { ExternalLink } from "lucide-react";

const CompanyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const company = getCompanyById(id || "");
  const referrers = getReferrersByCompanyId(id || "");

  if (!company) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Company Not Found</h1>
        <p className="mb-6">The company you are looking for does not exist.</p>
        <Link to="/companies">
          <Button>Back to Companies</Button>
        </Link>
      </div>
    );
  }

  const getColorIndex = (companyName: string) => {
    let hash = 0;
    for (let i = 0; i < companyName.length; i++) {
      const char = companyName.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash) % 8;
  };

  const formatWebsiteUrl = (url: string | undefined) => {
    if (!url || url === '') return '';
    
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    return `https://${url}`;
  };

  const websiteUrl = formatWebsiteUrl(company.website);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-md p-4 flex items-center justify-center">
          <LogoGenerator 
            companyName={company.name}
            size="lg"
            colorIndex={getColorIndex(company.name)}
            className="w-full h-full"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{company.name}</h1>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-600 mb-4">
            <div>{company.industry}</div>
            <div>•</div>
            <div>{company.location}</div>
            <div>•</div>
            <div>{company.size} employees</div>
            <div>•</div>
            <div>Founded {company.founded}</div>
          </div>
          <div className="flex gap-4">
            {websiteUrl && (
              <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <span>Visit Website</span>
                  <ExternalLink size={16} />
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">About</h2>
        <p className="text-gray-700">{company.description}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-6">
          Referrers at {company.name} ({referrers.length})
        </h2>
        
        {referrers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {referrers.map((referrer) => (
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
        ) : (
          <div className="text-center py-10 bg-gray-50 rounded-lg">
            <p className="text-lg text-gray-600 mb-6">
              No referrers available for this company yet.
            </p>
            <Link to="/companies" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="outline">Explore Other Companies</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyDetail;

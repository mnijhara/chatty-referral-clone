
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getReferrerById, getCompanyById } from "@/utils/placeholderData";
import AvatarGenerator from "@/components/AvatarGenerator";
import LogoGenerator from "@/components/LogoGenerator";

const ReferrerProfile = () => {
  const { id } = useParams<{ id: string }>();
  const referrer = getReferrerById(id || "");
  const company = referrer ? getCompanyById(referrer.companyId) : undefined;

  if (!referrer) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Referrer Not Found</h1>
        <p className="mb-6">The referrer you are looking for does not exist.</p>
        <Link to="/referrers">
          <Button>Back to Referrers</Button>
        </Link>
      </div>
    );
  }

  const getColorIndex = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      const char = name.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash) % 8;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
            <AvatarGenerator 
              name={referrer.name}
              size="xl"
              colorIndex={getColorIndex(referrer.name)}
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{referrer.name}</h1>
            <div className="flex items-center mb-4">
              <LogoGenerator 
                companyName={referrer.company}
                size="sm"
                colorIndex={getColorIndex(referrer.company)}
                className="mr-2"
              />
              <Link to={`/companies/${referrer.companyId}`} className="text-lg text-gray-700 hover:text-brand">
                {referrer.company}
              </Link>
              <span className="mx-2">•</span>
              <span className="text-gray-700">{referrer.role}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="bg-blue-50 text-blue-700">
                {referrer.department}
              </Badge>
              <Badge variant="outline" className="bg-gray-50 text-gray-700">
                {referrer.yearsAtCompany} {referrer.yearsAtCompany === 1 ? 'year' : 'years'} at company
              </Badge>
              {referrer.successfulReferrals > 0 && (
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  {referrer.successfulReferrals} Successful Referrals
                </Badge>
              )}
            </div>
            <div className="flex gap-4 mt-4">
              <Link to={`/request/${referrer.id}`}>
                <Button>Request Referral</Button>
              </Link>
              <a href={referrer.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-gray-700">{referrer.bio}</p>
          </CardContent>
        </Card>

        {company && (
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Company</h2>
                <Link to={`/companies/${company.id}`} className="text-brand hover:underline text-sm">
                  View Company Profile
                </Link>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-md p-2 flex items-center justify-center">
                  <LogoGenerator 
                    companyName={company.name}
                    size="md"
                    colorIndex={getColorIndex(company.name)}
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{company.name}</h3>
                  <div className="text-sm text-gray-600">{company.industry} • {company.location}</div>
                </div>
              </div>
              
              <p className="text-gray-700 text-sm mb-4">{company.description}</p>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-blue-50 text-blue-700">
                  {company.referrersCount} Referrers
                </Badge>
                {company.openPositions > 0 && (
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    {company.openPositions} Open Positions
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mt-8 text-center">
          <Link to={`/request/${referrer.id}`}>
            <Button size="lg">Request a Referral</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReferrerProfile;

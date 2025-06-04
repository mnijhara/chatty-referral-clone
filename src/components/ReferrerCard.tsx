
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AvatarGenerator from "./AvatarGenerator";
import LogoGenerator from "./LogoGenerator";

interface ReferrerCardProps {
  id: string;
  name: string;
  avatar: string;
  company: string;
  companyLogo: string;
  role: string;
  yearsAtCompany: number;
  successfulReferrals: number;
}

const ReferrerCard = ({
  id,
  name,
  avatar,
  company,
  companyLogo,
  role,
  yearsAtCompany,
  successfulReferrals
}: ReferrerCardProps) => {
  const getCompanyIdFromName = (companyName: string) => {
    const companyMap: Record<string, string> = {
      "InfoTech Solutions": "1",
      "Wipro Limited": "2",
      "Tata Consultancy Services": "3",
      "MindTree Studios": "4",
      "L&T Infotech": "5",
      "Paytm": "6",
      "Apollo Health": "7",
      "Zee Digital": "8"
    };
    
    return companyMap[companyName] || "";
  };

  const companyId = getCompanyIdFromName(company);
  
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Generate consistent color indices
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
    <Card className="h-full hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <AvatarGenerator 
              name={name}
              colorIndex={getColorIndex(name)}
              className="border border-gray-200"
            />
            <div>
              <h3 className="font-semibold">
                <Link 
                  to={`/referrers/${id}`} 
                  className="hover:text-brand hover:underline"
                  onClick={scrollToTop}
                >
                  {name}
                </Link>
              </h3>
              <div className="flex items-center mt-1">
                <LogoGenerator 
                  companyName={company}
                  size="sm"
                  colorIndex={getColorIndex(company)}
                  className="mr-1 border border-gray-200"
                />
                <Link 
                  to={`/companies/${companyId}`} 
                  className="text-sm text-gray-600 hover:text-brand hover:underline"
                  onClick={scrollToTop}
                >
                  {company}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="text-sm">
            <span className="font-medium">{role}</span>
            <span className="text-gray-500 ml-2">• {yearsAtCompany} {yearsAtCompany === 1 ? 'year' : 'years'}</span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {successfulReferrals > 0 && (
              <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">
                {successfulReferrals} Successful Referrals
              </Badge>
            )}
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <Link 
            to={`/referrers/${id}`} 
            className="text-sm text-brand hover:underline"
            onClick={scrollToTop}
          >
            View Profile
          </Link>
          <Link to={`/request/${id}`} onClick={scrollToTop}>
            <Button size="sm">Request Referral</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferrerCard;

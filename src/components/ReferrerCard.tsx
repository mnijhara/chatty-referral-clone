
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
  // Extract companyId from the first referrer with this company name in the imports
  const getCompanyIdFromName = (companyName: string) => {
    // This is a placeholder implementation - in a real app, you would
    // either pass the companyId as a prop or look it up from a context/store
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
  
  return (
    <Card className="h-full hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={avatar}
                alt={`${name}'s profile`}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">{name}</h3>
              <div className="flex items-center mt-1">
                <div className="w-4 h-4 mr-1">
                  <img
                    src={companyLogo}
                    alt={`${company} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => { 
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; 
                      target.src = "https://via.placeholder.com/40?text=Co"; 
                    }}
                  />
                </div>
                <Link 
                  to={`/companies/${companyId}`} 
                  className="text-sm text-gray-600 hover:text-brand hover:underline"
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
          <Link to={`/referrers/${id}`} className="text-sm text-brand hover:underline">
            View Profile
          </Link>
          <Link to={`/request/${id}`}>
            <Button size="sm">Request Referral</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferrerCard;

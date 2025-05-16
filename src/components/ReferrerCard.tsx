
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "@/components/ui/use-toast";

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
  
  // Get name initials for fallback
  const getInitials = (personName: string) => {
    return personName
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };
  
  const initials = getInitials(name);
  
  // Generate company logo placeholder
  const generateCompanyPlaceholder = (companyName: string) => {
    // Extract the first letter or first two letters from each word for the company initials
    const initials = companyName
      .split(' ')
      .map(word => word[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
    
    // Generate consistent colorful background 
    const colors = [
      "6366f1", // Indigo
      "3b82f6", // Blue
      "0ea5e9", // Sky blue
      "10b981", // Green
      "8b5cf6", // Violet
      "ec4899", // Pink
      "f43f5e", // Rose
      "f59e0b", // Amber
    ];
    
    const colorIndex = companyName.split('').reduce(
      (sum, char) => sum + char.charCodeAt(0), 0
    ) % colors.length;
    
    // Use a consistent company logo placeholder with company initials
    return `https://ui-avatars.com/api/?name=${initials}&size=80&background=${colors[colorIndex]}&color=ffffff&bold=true&format=svg`;
  };
  
  // Get company logo with reliable fallback
  const logoUrl = companyLogo && companyLogo.startsWith('http') 
    ? companyLogo 
    : generateCompanyPlaceholder(company);
  
  // Use react-router's scrollToTop instead of window direct manipulation
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // No need to preventDefault as we're using Link which correctly handles SPA routing
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <Card className="h-full hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12 border border-gray-200">
              <AvatarImage
                src={avatar}
                alt={`${name}'s profile`}
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = `https://ui-avatars.com/api/?name=${initials}&size=200&background=f0f0f0&color=333`;
                }}
              />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
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
                <div className="w-5 h-5 mr-1 bg-gray-50 rounded-sm overflow-hidden flex items-center justify-center border border-gray-200">
                  <img
                    src={logoUrl}
                    alt={`${company} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => { 
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; 
                      target.src = generateCompanyPlaceholder(company);
                    }}
                  />
                </div>
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

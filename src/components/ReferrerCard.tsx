
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
  
  // Generate avatar based on gender (determined by name)
  const generateAvatarPlaceholder = (personName: string, seed: number = 0) => {
    // List of common Indian female names to detect gender
    const commonFemaleNames = ["priya", "anjali", "anika", "meera", "divya", "sita", "lakshmi", "sunita", "neha", "asha", "nisha", "pooja", "kavita"];
    const firstName = personName.split(' ')[0].toLowerCase();
    const isFemale = commonFemaleNames.some(name => firstName.includes(name));
    
    // Specific Indian-looking avatars based on gender (moved to reliable CDN)
    const femaleIndianAvatars = [
      "https://i.ibb.co/P64vGQ9/indian-woman-1.jpg",
      "https://i.ibb.co/f1BXhrY/indian-woman-2.jpg",
      "https://i.ibb.co/cw6mYZv/indian-woman-3.jpg",
      "https://i.ibb.co/PQHB2CZ/indian-woman-4.jpg"
    ];
    
    const maleIndianAvatars = [
      "https://i.ibb.co/NTsGFyZ/indian-man-1.jpg",
      "https://i.ibb.co/ZHTf6p2/indian-man-2.jpg",
      "https://i.ibb.co/TwhHdbh/indian-man-3.jpg",
      "https://i.ibb.co/CnC1CQS/indian-man-4.jpg"
    ];
    
    // Fallback images if the above don't load
    const fallbackFemaleImage = "https://xsgames.co/randomusers/assets/avatars/female/1.jpg";
    const fallbackMaleImage = "https://xsgames.co/randomusers/assets/avatars/male/1.jpg";
    
    // Use name to deterministically select an avatar (ensures same name gets same avatar)
    const avatarSeed = personName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) + seed;
    const index = avatarSeed % 4; // Choose one of 4 avatars based on name
    
    const primaryAvatar = isFemale ? femaleIndianAvatars[index] : maleIndianAvatars[index];
    const fallbackAvatar = isFemale ? fallbackFemaleImage : fallbackMaleImage;
    
    return { primaryAvatar, fallbackAvatar, initials: personName.split(' ').map(n => n[0]).join('').toUpperCase() };
  };

  // Generate company logo placeholder
  const generateCompanyPlaceholder = (companyName: string) => {
    const initials = companyName.split(' ')
      .map(word => word[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
    
    return `https://ui-avatars.com/api/?name=${initials}&background=f3f4f6&color=6366f1&size=40`;
  };

  // Use reliable images or fallbacks
  const { primaryAvatar, fallbackAvatar, initials } = generateAvatarPlaceholder(name, id.charCodeAt(0));
  const logoUrl = companyLogo && companyLogo.startsWith('http') ? companyLogo : generateCompanyPlaceholder(company);
  
  const scrollToTop = () => {
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
            <Avatar className="w-12 h-12">
              <AvatarImage
                src={primaryAvatar}
                alt={`${name}'s profile`}
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = fallbackAvatar;
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
                <div className="w-4 h-4 mr-1">
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

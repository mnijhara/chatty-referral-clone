
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
  
  // Enhanced avatar generation specifically for Indian professionals
  const generateIndianAvatar = (personName: string) => {
    // Extensive list of common Indian female names for better gender detection
    const commonFemaleNames = [
      "priya", "anjali", "anika", "meera", "divya", "sita", "lakshmi", "sunita", 
      "neha", "asha", "nisha", "pooja", "kavita", "radha", "geeta", "anita", 
      "deepa", "kiran", "manju", "seema", "ritu", "suman", "sarika", "rekha",
      "jyoti", "shanti", "savita", "usha", "padma", "rani", "lata", "vani"
    ];
    
    const firstName = personName.split(' ')[0].toLowerCase();
    const isFemale = commonFemaleNames.some(name => firstName.includes(name));
    
    // Calculate a consistent hash from the name to always get the same avatar for the same name
    const nameHash = personName.split('').reduce((acc, char, idx) => acc + char.charCodeAt(0) * (idx + 1), 0);
    
    // More diverse and reliable Indian avatar collections
    // Female Indian professionals
    const femaleIndianAvatars = [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", // South Asian woman with dark hair
      "https://images.unsplash.com/photo-1592621385612-4d211978a5f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", // Indian woman smiling
      "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", // Professional Indian woman
      "https://images.unsplash.com/photo-1573497019236-61f12a5cba85?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", // Indian businesswoman
      "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", // Professional with glasses
      "https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"  // Indian tech professional
    ];
    
    // Male Indian professionals
    const maleIndianAvatars = [
      "https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", // Indian man in formal attire
      "https://images.unsplash.com/photo-1618375531912-867984bdfd87?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", // Professional Indian male
      "https://images.unsplash.com/photo-1562904403-a5106bef8319?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", // Indian tech worker
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", // Professional with glasses
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", // Indian businessman
      "https://images.unsplash.com/photo-1624797432677-6f803a98acb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"  // Tech professional
    ];
    
    // Select a consistent avatar based on the name hash
    const avatarArray = isFemale ? femaleIndianAvatars : maleIndianAvatars;
    const selectedIndex = nameHash % avatarArray.length;
    const selectedAvatar = avatarArray[selectedIndex];
    
    // Generate fallback initials from the name
    const initials = personName
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
    
    // Create a fallback URL with the person's initials
    const fallbackAvatar = `https://ui-avatars.com/api/?name=${initials}&background=f3f4f6&color=6366f1&size=128`;
    
    return {
      primaryAvatar: selectedAvatar,
      fallbackAvatar,
      initials
    };
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

  // Get avatar resources based on name
  const { primaryAvatar, fallbackAvatar, initials } = generateIndianAvatar(name);
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

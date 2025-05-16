import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "@/components/ui/use-toast";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
  
  // Improved avatar generation implementation with more diverse profiles
  const getAvatar = (personName: string) => {
    // Generic professional avatars - not specific to any ethnicity
    const genericProfessionalAvatars = {
      male: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop", // Generic professional male 1
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop", // Generic professional male 2
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop", // Generic professional male 3
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop", // Generic professional male 4
        "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop", // Generic professional male 5
      ],
      female: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop", // Generic professional female 1
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop", // Generic professional female 2
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop", // Generic professional female 3
        "https://images.unsplash.com/photo-1560535733-540e0b0068b9?w=300&h=300&fit=crop", // Generic professional female 4
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop", // Generic professional female 5
      ]
    };
    
    // Map specific names to specific gender for the sample data
    const knownPeople: Record<string, string> = {
      "Aditya Sharma": "male",
      "Priya Patel": "female",
      "Vikram Mehta": "male",
      "Anjali Desai": "female",
      "Rahul Verma": "male",
      "Divya Singh": "female",
      "Karthik Rao": "male",
      "Nisha Agarwal": "female",
      "Sanjay Gupta": "male",
      "Meera Reddy": "female",
      "Arjun Nair": "male",
      "Neha Malhotra": "female"
    };
    
    // Get name initials for fallback
    const initials = personName
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
    
    // Determine gender for this person (default to male if unknown)
    const gender = knownPeople[personName] || "male";
    
    // Generate a name hash that remains consistent for the same name
    const nameHash = Array.from(personName).reduce(
      (acc, char, idx) => acc + char.charCodeAt(0) * (idx + 1), 0
    );
    
    // Select an avatar from the appropriate gender collection based on name hash
    const avatarCollection = gender === "female" ? genericProfessionalAvatars.female : genericProfessionalAvatars.male;
    const selectedIndex = nameHash % avatarCollection.length;
    
    // Create a reliable fallback
    const fallbackUrl = `https://ui-avatars.com/api/?name=${initials}&size=200&background=f0f0f0&color=333`;
    
    // If the provided avatar is valid, use it, otherwise use our selected one
    const primaryAvatar = avatar && avatar.startsWith('http') ? avatar : avatarCollection[selectedIndex];
    
    return {
      primaryAvatar,
      fallbackUrl,
      initials,
      gender
    };
  };

  // Generate more reliable company logo placeholder
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

  // Get avatar resources using our improved implementation
  const { primaryAvatar, fallbackUrl, initials, gender } = getAvatar(name);
  
  // Get company logo with reliable fallback
  const logoUrl = companyLogo && companyLogo.startsWith('http') 
    ? companyLogo 
    : generateCompanyPlaceholder(company);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const handleImageError = () => {
    toast({
      description: `Failed to load image for ${name}`,
      variant: "destructive",
      duration: 3000,
    });
  };
  
  return (
    <Card className="h-full hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12 border border-gray-200">
              <AvatarImage
                src={primaryAvatar}
                alt={`${name}'s profile`}
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = fallbackUrl;
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

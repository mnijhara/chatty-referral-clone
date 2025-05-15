
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
  
  // Improved avatar generation implementation with more reliable gender detection
  const getAvatar = (personName: string) => {
    // Analyze name for more reliable gender detection
    const nameParts = personName.toLowerCase().split(' ');
    
    // Common Indian first names for better gender detection
    const femaleFirstNames = [
      "priya", "anjali", "anika", "divya", "sita", "lakshmi", "sunita", 
      "neha", "asha", "nisha", "pooja", "kavita", "radha", "geeta", "anita", 
      "deepa", "kiran", "manju", "seema", "ritu", "suman", "sarika", "rekha",
      "jyoti", "padma", "rani", "lata", "vani", "meera", "shreya", "nisha",
      "patel", "sonam", "kritika", "radhika", "swati", "manisha", "shilpa",
      "archana", "amrita", "sangeeta", "divya", "sneha", "laxmi", "savita",
      "vidya", "bharti", "aishwarya", "raveena", "kajol", "alia", "deepika",
      "soha", "kareena", "karisma", "madhuri", "shilpa", "juhi", "sonali"
    ];

    const maleFirstNames = [
      "rahul", "amit", "aditya", "vikram", "vivek", "sanjay", "rajesh",
      "suresh", "mahesh", "ramesh", "mukesh", "dinesh", "ajay", "vijay",
      "sanjay", "vinod", "anand", "arvind", "ravi", "mohan", "krishna",
      "karthik", "nitin", "sandeep", "deepak", "manoj", "arjun", "rakesh",
      "prakash", "raj", "sunil", "anil", "ashok", "jatin", "lalit", "manish",
      "naveen", "pranav", "rajiv", "rohit", "sachin", "sameer", "shekhar",
      "shyam", "varun", "venkat", "vikas", "yash", "kunal", "gaurav", "aarav"
    ];

    // Check first name against our lists
    const firstName = nameParts[0];
    let isFemale = femaleFirstNames.includes(firstName);
    let isMale = maleFirstNames.includes(firstName);
    
    // If inconclusive from first name, check other name parts for gender indicators
    if (!isFemale && !isMale) {
      isFemale = femaleFirstNames.some(name => nameParts.includes(name));
      isMale = maleFirstNames.some(name => nameParts.includes(name));
    }
    
    // Default to male if still inconclusive (or use a more sophisticated approach)
    const determineGender = isFemale ? "female" : "male";
    
    // Get name initials for fallback
    const initials = personName
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
    
    // Select gender-appropriate avatar collections
    // Female avatars - diverse and professional collection
    const femaleAvatars = [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&h=300&fit=crop"
    ];
    
    // Male avatars - diverse and professional collection
    const maleAvatars = [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=300&h=300&fit=crop"
    ];

    // Generate a name hash that remains consistent for the same name
    const nameHash = Array.from(personName).reduce(
      (acc, char, idx) => acc + char.charCodeAt(0) * (idx + 1), 0
    );
    
    // Select an avatar from the appropriate gender collection based on name hash
    const avatarCollection = determineGender === "female" ? femaleAvatars : maleAvatars;
    const selectedIndex = nameHash % avatarCollection.length;
    
    // Create a reliable fallback
    const fallbackUrl = `https://ui-avatars.com/api/?name=${initials}&size=200&background=f0f0f0&color=333`;
    
    // If the provided avatar is valid, use it, otherwise use our selected one
    const primaryAvatar = avatar && avatar.startsWith('http') ? avatar : avatarCollection[selectedIndex];
    
    return {
      primaryAvatar,
      fallbackUrl,
      initials,
      gender: determineGender
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

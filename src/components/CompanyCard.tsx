
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CompanyCardProps {
  id: string;
  name: string;
  logo: string;
  industry: string;
  location: string;
  referrersCount: number;
  openPositions: number;
}

const CompanyCard = ({ 
  id, 
  name, 
  logo, 
  industry, 
  location, 
  referrersCount, 
  openPositions 
}: CompanyCardProps) => {
  // Generate a better company logo placeholder based on company name
  const generatePlaceholder = (companyName: string) => {
    // Extract first letter or first two letters of words for better initials
    const initials = companyName.split(' ')
      .map(word => word[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
    
    // Generate a colorful background based on company name
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
    
    // Use the company name to deterministically select a color
    const colorIndex = companyName.split('').reduce(
      (sum, char) => sum + char.charCodeAt(0), 0
    ) % colors.length;
    
    return `https://ui-avatars.com/api/?name=${initials}&background=${colors[colorIndex]}&color=ffffff&size=100&bold=true&format=svg`;
  };

  // Use a reliable image or fallback
  const logoUrl = logo && logo.startsWith('http') ? logo : generatePlaceholder(name);

  // Custom Link wrapper that scrolls to top when clicked
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link to={`/companies/${id}`} onClick={handleClick}>
      <Card className="h-full hover:shadow-sm transition-shadow duration-200 border-gray-100">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center rounded bg-gray-50 p-0 overflow-hidden">
              <img 
                src={logoUrl} 
                alt={`${name} logo`} 
                className="max-w-full max-h-full w-full h-full object-cover" 
                onError={(e) => { 
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; 
                  target.src = generatePlaceholder(name);
                }}
              />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-base">{name}</h3>
              <div className="flex items-center space-x-1 text-xs text-gray-500 mt-0.5">
                <span>{industry}</span>
                <span>•</span>
                <span>{location}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-2 flex flex-wrap gap-1">
            <Badge variant="outline" className="bg-blue-50/50 text-blue-600 text-xs hover:bg-blue-100/50 px-1.5 py-0">
              {referrersCount} Referrers
            </Badge>
            {openPositions > 0 && (
              <Badge variant="outline" className="bg-green-50/50 text-green-600 text-xs hover:bg-green-100/50 px-1.5 py-0">
                {openPositions} Jobs
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CompanyCard;

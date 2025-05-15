
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
  // Generate a placeholder based on company name
  const generatePlaceholder = (companyName: string) => {
    const initials = companyName.split(' ')
      .map(word => word[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
    
    return `https://ui-avatars.com/api/?name=${initials}&background=f1f1f1&color=8E9196&size=100`;
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
            <div className="w-12 h-12 flex items-center justify-center rounded bg-gray-50 p-1">
              <img 
                src={logoUrl} 
                alt={`${name} logo`} 
                className="max-w-full max-h-full object-contain" 
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

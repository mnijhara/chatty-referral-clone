
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LogoGenerator from "./LogoGenerator";

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
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Generate a consistent color index based on company name
  const getColorIndex = (companyName: string) => {
    let hash = 0;
    for (let i = 0; i < companyName.length; i++) {
      const char = companyName.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash) % 8;
  };

  return (
    <Link to={`/companies/${id}`} onClick={handleClick}>
      <Card className="h-full hover:shadow-md transition-shadow duration-200 border-gray-100">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <LogoGenerator 
              companyName={name}
              colorIndex={getColorIndex(name)}
              className="border border-gray-200"
            />
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

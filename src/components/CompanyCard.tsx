
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
  return (
    <Link to={`/companies/${id}`}>
      <Card className="h-full hover:shadow-md transition-shadow duration-200">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-md bg-gray-100 p-2">
              <img 
                src={logo} 
                alt={`${name} logo`} 
                className="max-w-full max-h-full object-contain" 
                onError={(e) => { 
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; 
                  target.src = "https://via.placeholder.com/150?text=" + name.substring(0, 2); 
                }}
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{name}</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                <span>{industry}</span>
                <span>•</span>
                <span>{location}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
              {referrersCount} Referrers
            </Badge>
            {openPositions > 0 && (
              <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">
                {openPositions} Open Positions
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CompanyCard;

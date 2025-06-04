
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LogoGenerator from "./LogoGenerator";
import { MapPin, Users, Briefcase } from "lucide-react";

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
    <Link to={`/companies/${id}`} onClick={handleClick} className="block group">
      <Card className="h-full bg-gradient-to-br from-white to-gray-50/80 hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 overflow-hidden relative group-hover:-translate-y-2">
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/30 group-hover:to-purple-50/30 transition-all duration-500"></div>
        
        <CardContent className="p-6 relative z-10">
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative">
              <LogoGenerator 
                companyName={name}
                colorIndex={getColorIndex(name)}
                size="lg"
                className="shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded bg-gradient-to-r from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/20 group-hover:to-purple-400/20 transition-all duration-300"></div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-900 transition-colors duration-300 truncate">{name}</h3>
              <div className="flex items-center space-x-1 text-sm text-gray-600 mt-1">
                <Briefcase className="h-3 w-3" />
                <span className="truncate">{industry}</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-gray-500 mt-0.5">
                <MapPin className="h-3 w-3" />
                <span className="truncate">{location}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant="outline" 
              className="bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border-blue-200 hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 px-3 py-1 text-xs font-medium"
            >
              <Users className="h-3 w-3 mr-1" />
              {referrersCount} Referrers
            </Badge>
            {openPositions > 0 && (
              <Badge 
                variant="outline" 
                className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-green-200 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 px-3 py-1 text-xs font-medium"
              >
                <Briefcase className="h-3 w-3 mr-1" />
                {openPositions} Jobs
              </Badge>
            )}
          </div>

          {/* Hover indicator */}
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CompanyCard;

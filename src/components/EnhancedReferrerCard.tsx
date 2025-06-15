
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AvatarGenerator from "./AvatarGenerator";
import LogoGenerator from "./LogoGenerator";
import { 
  Star, 
  Users, 
  Clock, 
  MapPin, 
  Briefcase, 
  CheckCircle, 
  MessageSquare,
  Award 
} from "lucide-react";

interface EnhancedReferrerCardProps {
  id: string;
  name: string;
  avatar?: string;
  company: string;
  companyLogo?: string;
  role: string;
  department: string;
  yearsAtCompany: number;
  successfulReferrals: number;
  rating?: number;
  responseTime?: number;
  location?: string;
  specialties?: string[];
  isVerified?: boolean;
  isPremium?: boolean;
}

const EnhancedReferrerCard = ({
  id,
  name,
  avatar,
  company,
  companyLogo,
  role,
  department,
  yearsAtCompany,
  successfulReferrals,
  rating = 4.8,
  responseTime = 12,
  location = "Remote",
  specialties = [],
  isVerified = true,
  isPremium = false
}: EnhancedReferrerCardProps) => {
  const getColorIndex = (text: string) => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash) % 8;
  };

  const getSuccessRate = () => {
    return Math.min(95, 65 + (successfulReferrals * 2));
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/95 backdrop-blur-sm hover:scale-105 relative overflow-hidden">
      {isPremium && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-400 to-orange-500 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
          Premium
        </div>
      )}
      
      <CardContent className="p-6">
        {/* Header with Avatar and Basic Info */}
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <AvatarGenerator 
              name={name}
              size="lg"
              colorIndex={getColorIndex(name)}
            />
            {isVerified && (
              <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                <CheckCircle className="h-3 w-3 text-white" />
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg text-gray-900 truncate">{name}</h3>
            <p className="text-gray-600 text-sm truncate">{role}</p>
            <div className="flex items-center gap-2 mt-1">
              <LogoGenerator 
                companyName={company}
                size="sm"
                colorIndex={getColorIndex(company)}
              />
              <span className="text-blue-600 font-medium text-sm truncate">{company}</span>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{successfulReferrals}</div>
            <div className="text-xs text-gray-600">Referrals</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{getSuccessRate()}%</div>
            <div className="text-xs text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="font-medium">{rating}</span>
            <span>• {yearsAtCompany} years at {company}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>Responds in ~{responseTime} hours</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Briefcase className="h-4 w-4" />
            <span>{department}</span>
          </div>
        </div>

        {/* Specialties */}
        {specialties.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-1">
              {specialties.slice(0, 3).map((specialty, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {specialty}
                </Badge>
              ))}
              {specialties.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{specialties.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link to={`/referrers/${id}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full">
              View Profile
            </Button>
          </Link>
          <Link to={`/request-referral/${id}`} className="flex-1">
            <Button size="sm" className="w-full">
              <MessageSquare className="h-4 w-4 mr-2" />
              Connect
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-100">
          {isVerified && (
            <div className="flex items-center gap-1 text-xs text-green-600">
              <CheckCircle className="h-3 w-3" />
              <span>Verified</span>
            </div>
          )}
          {rating >= 4.5 && (
            <div className="flex items-center gap-1 text-xs text-yellow-600">
              <Award className="h-3 w-3" />
              <span>Top Rated</span>
            </div>
          )}
          {responseTime <= 24 && (
            <div className="flex items-center gap-1 text-xs text-blue-600">
              <Clock className="h-3 w-3" />
              <span>Quick Response</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default EnhancedReferrerCard;

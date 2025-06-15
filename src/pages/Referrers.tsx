
import { useState } from "react";
import { referrers, companies } from "@/utils/placeholderData";
import ReferrerCard from "@/components/ReferrerCard";
import SearchBox from "@/components/SearchBox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Users, Star, Briefcase, Filter, Grid, List, TrendingUp, Award, MapPin } from "lucide-react";

const Referrers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [companyFilter, setCompanyFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [experienceFilter, setExperienceFilter] = useState([0, 15]);
  const [sortBy, setSortBy] = useState("successRate");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const uniqueCompanies = [...new Set(referrers.map(r => r.company))];
  const departments = [...new Set(referrers.map(r => r.department))];
  const locations = [...new Set(referrers.map(r => r.location || "Remote"))];

  const filteredReferrers = referrers
    .filter(referrer => 
      referrer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      referrer.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      referrer.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      referrer.department.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(referrer => 
      companyFilter === "all" || referrer.company === companyFilter
    )
    .filter(referrer => 
      departmentFilter === "all" || referrer.department === departmentFilter
    )
    .filter(referrer => 
      locationFilter === "all" || (referrer.location || "Remote") === locationFilter
    )
    .filter(referrer => 
      referrer.yearsAtCompany >= experienceFilter[0] && 
      referrer.yearsAtCompany <= experienceFilter[1]
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "successRate":
          return b.successfulReferrals - a.successfulReferrals;
        case "experience":
          return b.yearsAtCompany - a.yearsAtCompany;
        case "rating":
          return (b.rating || 4.5) - (a.rating || 4.5);
        case "responseTime":
          return (a.responseTime || 24) - (b.responseTime || 24);
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      {/* Enhanced Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-blue-400/20"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-400/10 rounded-full animate-bounce"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-2xl">
                <Users className="h-10 w-10" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Connect with <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expert Referrers</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Get referred by experienced professionals working at top companies. Build meaningful connections that can transform your career.
            </p>
            <div className="flex justify-center items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{referrers.length} Verified Referrers</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>{referrers.reduce((sum, r) => sum + r.successfulReferrals, 0)} Successful Referrals</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>4.9 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Enhanced Search and Filters */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8 mb-12">
          <div className="space-y-8">
            <SearchBox
              value={searchQuery}
              onChange={setSearchQuery}
              onSearch={handleSearch}
              placeholder="Search referrers by name, company, role, or department..."
              className="w-full"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Company</label>
                <Select value={companyFilter} onValueChange={setCompanyFilter}>
                  <SelectTrigger className="bg-white/90 border-gray-200">
                    <SelectValue placeholder="All Companies" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Companies</SelectItem>
                    {uniqueCompanies.map(company => (
                      <SelectItem key={company} value={company}>{company}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Department</label>
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger className="bg-white/90 border-gray-200">
                    <SelectValue placeholder="All Departments" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    {departments.map(dept => (
                      <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Location</label>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger className="bg-white/90 border-gray-200">
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Sort By</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="bg-white/90 border-gray-200">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="successRate">Success Rate</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="experience">Most Experience</SelectItem>
                    <SelectItem value="responseTime">Response Time</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="flex-1"
                >
                  <Grid className="h-4 w-4 mr-2" />
                  Grid
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="flex-1"
                >
                  <List className="h-4 w-4 mr-2" />
                  List
                </Button>
              </div>
            </div>

            {/* Experience Range Filter */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">
                Years of Experience: {experienceFilter[0]} - {experienceFilter[1]}+ years
              </label>
              <Slider
                value={experienceFilter}
                onValueChange={setExperienceFilter}
                max={15}
                min={0}
                step={1}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Enhanced Results Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {filteredReferrers.length} Verified Referrers
            </h2>
            <p className="text-gray-600 mt-1">Connect with professionals ready to help you succeed</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {companyFilter !== "all" && (
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {companyFilter}
              </Badge>
            )}
            {departmentFilter !== "all" && (
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {departmentFilter}
              </Badge>
            )}
            {locationFilter !== "all" && (
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                <MapPin className="h-3 w-3 mr-1" />
                {locationFilter}
              </Badge>
            )}
          </div>
        </div>

        {/* Enhanced Referrers Grid/List */}
        {filteredReferrers.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1"
          }`}>
            {filteredReferrers.map((referrer, index) => (
              <div 
                key={referrer.id} 
                className="transform hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{animationDelay: `${index * 50}ms`}}
              >
                <ReferrerCard
                  id={referrer.id}
                  name={referrer.name}
                  avatar={referrer.avatar}
                  company={referrer.company}
                  companyLogo={referrer.companyLogo}
                  role={referrer.role}
                  yearsAtCompany={referrer.yearsAtCompany}
                  successfulReferrals={referrer.successfulReferrals}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center mx-auto mb-8">
              <Users className="h-16 w-16 text-gray-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">No referrers found</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-8 text-lg">
              Try adjusting your search criteria or filters to find more referrers.
            </p>
            <Button onClick={() => {
              setSearchQuery("");
              setCompanyFilter("all");
              setDepartmentFilter("all");
              setLocationFilter("all");
              setExperienceFilter([0, 15]);
            }}>
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Quick Stats */}
        {filteredReferrers.length > 0 && (
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Referrer Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {Math.round(filteredReferrers.reduce((sum, r) => sum + r.successfulReferrals, 0) / filteredReferrers.length)}
                </div>
                <div className="text-gray-600">Avg. Successful Referrals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {Math.round(filteredReferrers.reduce((sum, r) => sum + r.yearsAtCompany, 0) / filteredReferrers.length)}
                </div>
                <div className="text-gray-600">Avg. Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {uniqueCompanies.filter(company => 
                    filteredReferrers.some(r => r.company === company)
                  ).length}
                </div>
                <div className="text-gray-600">Companies Represented</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">4.9</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Referrers;

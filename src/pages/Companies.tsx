import { useState } from "react";
import { companies } from "@/utils/placeholderData";
import CompanyCard from "@/components/CompanyCard";
import SearchBox from "@/components/SearchBox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Users, Filter, Grid, List } from "lucide-react";

const Companies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const industries = [...new Set(companies.map(company => company.industry))];
  const locations = [...new Set(companies.map(company => company.location.split(", ")[1]))]; // Get state only

  const filteredCompanies = companies
    .filter(company => 
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(company => 
      industryFilter === "all" || company.industry === industryFilter
    )
    .filter(company => 
      locationFilter === "all" || company.location.includes(locationFilter)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "referrers":
          return b.referrersCount - a.referrersCount;
        case "jobs":
          return b.openPositions - a.openPositions;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-cyan-400/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-400/10 rounded-full animate-bounce"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-2xl">
                <Building2 className="h-10 w-10" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Discover <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Top Companies</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Find your dream company from our curated list of top employers across India. Get direct referrals from employees working there.
            </p>
            <div className="flex justify-center items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                <span>{companies.length} Companies</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{companies.reduce((sum, c) => sum + c.referrersCount, 0)} Referrers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Enhanced Search and Filters */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8 mb-12">
          <div className="space-y-6">
            <SearchBox
              value={searchQuery}
              onChange={setSearchQuery}
              onSearch={handleSearch}
              placeholder="Search companies by name or industry..."
              className="w-full"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select value={industryFilter} onValueChange={setIndustryFilter}>
                <SelectTrigger className="bg-white/90 border-gray-200">
                  <SelectValue placeholder="Filter by Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="bg-white/90 border-gray-200">
                  <SelectValue placeholder="Filter by Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-white/90 border-gray-200">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Company Name</SelectItem>
                  <SelectItem value="referrers">Most Referrers</SelectItem>
                  <SelectItem value="jobs">Most Jobs</SelectItem>
                </SelectContent>
              </Select>

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
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {filteredCompanies.length} Companies Found
            </h2>
            <p className="text-gray-600 mt-1">Discover opportunities at leading companies</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Filter className="h-4 w-4" />
            <span>Filtered by {industryFilter !== "all" ? industryFilter : "all industries"}</span>
          </div>
        </div>

        {/* Companies Grid/List */}
        {filteredCompanies.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1"
          }`}>
            {filteredCompanies.map((company, index) => (
              <div 
                key={company.id} 
                className="transform hover:scale-105 transition-all duration-300"
                style={{animationDelay: `${index * 50}ms`}}
              >
                <CompanyCard
                  id={company.id}
                  name={company.name}
                  logo={company.logo}
                  industry={company.industry}
                  location={company.location}
                  referrersCount={company.referrersCount}
                  openPositions={company.openPositions}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center mx-auto mb-6">
              <Building2 className="h-12 w-12 text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No companies found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Try adjusting your search criteria or filters to find more companies.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Companies;

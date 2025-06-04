
import { useState } from "react";
import { referrers, companies } from "@/utils/placeholderData";
import ReferrerCard from "@/components/ReferrerCard";
import SearchBox from "@/components/SearchBox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Users, Star, Briefcase, Filter, Grid, List } from "lucide-react";

const Referrers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [companyFilter, setCompanyFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const uniqueCompanies = [...new Set(referrers.map(r => r.company))];
  const departments = [...new Set(referrers.map(r => r.department))];

  const filteredReferrers = referrers
    .filter(referrer => 
      referrer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      referrer.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      referrer.role.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(referrer => 
      companyFilter === "all" || referrer.company === companyFilter
    )
    .filter(referrer => 
      departmentFilter === "all" || referrer.department === departmentFilter
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "referrals":
          return b.successfulReferrals - a.successfulReferrals;
        case "experience":
          return b.yearsAtCompany - a.yearsAtCompany;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      {/* Hero Section */}
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
                <span>{referrers.length} Referrers</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>{referrers.reduce((sum, r) => sum + r.successfulReferrals, 0)} Successful Referrals</span>
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
              placeholder="Search referrers by name, company, or role..."
              className="w-full"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select value={companyFilter} onValueChange={setCompanyFilter}>
                <SelectTrigger className="bg-white/90 border-gray-200">
                  <SelectValue placeholder="Filter by Company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Companies</SelectItem>
                  {uniqueCompanies.map(company => (
                    <SelectItem key={company} value={company}>{company}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="bg-white/90 border-gray-200">
                  <SelectValue placeholder="Filter by Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map(dept => (
                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-white/90 border-gray-200">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="referrals">Most Referrals</SelectItem>
                  <SelectItem value="experience">Most Experience</SelectItem>
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
              {filteredReferrers.length} Referrers Available
            </h2>
            <p className="text-gray-600 mt-1">Connect with professionals ready to help you succeed</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Filter className="h-4 w-4" />
            <span>Filtered by {companyFilter !== "all" ? companyFilter : "all companies"}</span>
          </div>
        </div>

        {/* Referrers Grid/List */}
        {filteredReferrers.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1"
          }`}>
            {filteredReferrers.map((referrer, index) => (
              <div 
                key={referrer.id} 
                className="transform hover:scale-105 transition-all duration-300"
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
          <div className="text-center py-16">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center mx-auto mb-6">
              <Users className="h-12 w-12 text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No referrers found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Try adjusting your search criteria or filters to find more referrers.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Referrers;

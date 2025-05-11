
import { useState } from "react";
import { companies } from "@/utils/placeholderData";
import CompanyCard from "@/components/CompanyCard";
import SearchBox from "@/components/SearchBox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Companies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState("all");

  const industries = ["all", ...new Set(companies.map((company) => company.industry))];

  const filteredCompanies = companies.filter((company) => {
    const matchesSearch =
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesIndustry = industryFilter === "all" || company.industry === industryFilter;

    return matchesSearch && matchesIndustry;
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Companies</h1>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <SearchBox placeholder="Search companies..." onSearch={handleSearch} />

        <div className="w-full md:w-auto">
          <Select
            value={industryFilter}
            onValueChange={(value) => setIndustryFilter(value)}
          >
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filter by industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry === "all" ? "All Industries" : industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredCompanies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <CompanyCard
              key={company.id}
              id={company.id}
              name={company.name}
              logo={company.logo}
              industry={company.industry}
              location={company.location}
              referrersCount={company.referrersCount}
              openPositions={company.openPositions}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No companies found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Companies;


import { useState } from "react";
import { referrers, companies } from "@/utils/placeholderData";
import ReferrerCard from "@/components/ReferrerCard";
import SearchBox from "@/components/SearchBox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Referrers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [companyFilter, setCompanyFilter] = useState("all");

  const companyOptions = [
    { value: "all", label: "All Companies" },
    ...companies.map((company) => ({
      value: company.id,
      label: company.name,
    })),
  ];

  const filteredReferrers = referrers.filter((referrer) => {
    const matchesSearch =
      referrer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      referrer.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      referrer.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      referrer.department.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCompany = companyFilter === "all" || referrer.companyId === companyFilter;

    return matchesSearch && matchesCompany;
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Referrers</h1>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <SearchBox placeholder="Search referrers..." onSearch={handleSearch} />

        <div className="w-full md:w-auto">
          <Select
            value={companyFilter}
            onValueChange={(value) => setCompanyFilter(value)}
          >
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filter by company" />
            </SelectTrigger>
            <SelectContent>
              {companyOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredReferrers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReferrers.map((referrer) => (
            <ReferrerCard
              key={referrer.id}
              id={referrer.id}
              name={referrer.name}
              avatar={referrer.avatar}
              company={referrer.company}
              companyLogo={referrer.companyLogo}
              role={referrer.role}
              yearsAtCompany={referrer.yearsAtCompany}
              successfulReferrals={referrer.successfulReferrals}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No referrers found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Referrers;

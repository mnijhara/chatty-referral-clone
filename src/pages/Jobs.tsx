
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Briefcase, MapPin, Clock, DollarSign, Users, Building2, Search, Filter } from "lucide-react";

// Mock job data
const jobs = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "TechCorp Solutions",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "Mid Level (2-5 years)",
    salary: "₹12-18 LPA",
    department: "Engineering",
    referralBonus: "₹75,000",
    description: "Join our dynamic team to build scalable web applications using modern technologies...",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    postedDate: "2024-01-15",
    applicants: 45,
    referrers: 8
  },
  {
    id: "2",
    title: "Product Manager",
    company: "Innovation Labs",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "Senior Level (5-8 years)",
    salary: "₹20-30 LPA",
    department: "Product",
    referralBonus: "₹1,00,000",
    description: "Lead product strategy and roadmap for our flagship SaaS platform...",
    skills: ["Product Strategy", "Analytics", "Agile", "User Research"],
    postedDate: "2024-01-14",
    applicants: 32,
    referrers: 12
  },
  {
    id: "3",
    title: "UX Designer",
    company: "DesignHub",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "Mid Level (2-5 years)",
    salary: "₹8-14 LPA",
    department: "Design",
    referralBonus: "₹50,000",
    description: "Create intuitive and beautiful user experiences for our mobile and web applications...",
    skills: ["Figma", "Prototyping", "User Research", "Design Systems"],
    postedDate: "2024-01-13",
    applicants: 28,
    referrers: 6
  },
  {
    id: "4",
    title: "Data Scientist",
    company: "DataTech Analytics",
    location: "Pune, India",
    type: "Full-time",
    experience: "Senior Level (5-8 years)",
    salary: "₹15-25 LPA",
    department: "Data Science",
    referralBonus: "₹80,000",
    description: "Build ML models and derive insights from large datasets to drive business decisions...",
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
    postedDate: "2024-01-12",
    applicants: 38,
    referrers: 10
  }
];

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const departments = [...new Set(jobs.map(job => job.department))];
  const locations = [...new Set(jobs.map(job => job.location.split(", ")[0]))];
  const types = [...new Set(jobs.map(job => job.type))];

  const filteredJobs = jobs
    .filter(job => 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .filter(job => 
      departmentFilter === "all" || job.department === departmentFilter
    )
    .filter(job => 
      locationFilter === "all" || job.location.includes(locationFilter)
    )
    .filter(job => 
      typeFilter === "all" || job.type === typeFilter
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "salary":
          return parseInt(b.salary.split("-")[1]) - parseInt(a.salary.split("-")[1]);
        case "applicants":
          return b.applicants - a.applicants;
        case "referrers":
          return b.referrers - a.referrers;
        default:
          return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
      }
    });

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "1 day ago";
    return `${diffDays} days ago`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-cyan-400/20"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-2xl">
                <Briefcase className="h-10 w-10" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Dream Job</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Browse job opportunities from top companies and get referred by employees. Increase your chances of landing an interview by 9x with employee referrals.
            </p>
            <div className="flex justify-center items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                <span>{jobs.length} Active Jobs</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{jobs.reduce((sum, job) => sum + job.referrers, 0)} Referrers Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8 mb-12">
          <div className="space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search jobs by title, company, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg bg-white/90 border-gray-200"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="bg-white/90 border-gray-200">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map(dept => (
                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="bg-white/90 border-gray-200">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="bg-white/90 border-gray-200">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {types.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-white/90 border-gray-200">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="salary">Highest Salary</SelectItem>
                  <SelectItem value="applicants">Most Applied</SelectItem>
                  <SelectItem value="referrers">Most Referrers</SelectItem>
                </SelectContent>
              </Select>

              <Link to="/post-job">
                <Button className="w-full h-10">
                  <Building2 className="h-4 w-4 mr-2" />
                  Post a Job
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {filteredJobs.length} Jobs Found
            </h2>
            <p className="text-gray-600 mt-1">Find opportunities that match your skills</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Filter className="h-4 w-4" />
            <span>Filtered results</span>
          </div>
        </div>

        {/* Job Listings */}
        {filteredJobs.length > 0 ? (
          <div className="grid gap-6">
            {filteredJobs.map((job, index) => (
              <Card 
                key={job.id} 
                className="hover:shadow-lg transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            <Link to={`/jobs/${job.id}`} className="hover:text-brand transition-colors">
                              {job.title}
                            </Link>
                          </h3>
                          <div className="flex items-center gap-4 text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              <Building2 className="h-4 w-4" />
                              <span className="font-medium">{job.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{getTimeAgo(job.postedDate)}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">
                          {job.department}
                        </Badge>
                      </div>

                      <p className="text-gray-700 line-clamp-2">{job.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {job.skills.slice(0, 4).map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-700">
                            {skill}
                          </Badge>
                        ))}
                        {job.skills.length > 4 && (
                          <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                            +{job.skills.length - 4} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{job.applicants} applicants</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          <span>{job.referrers} referrers available</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between items-end gap-4 min-w-fit">
                      {job.referralBonus && (
                        <div className="text-right">
                          <div className="text-sm text-gray-600">Referral Bonus</div>
                          <div className="text-lg font-bold text-green-600">{job.referralBonus}</div>
                        </div>
                      )}
                      
                      <div className="flex gap-3">
                        <Link to={`/jobs/${job.id}`}>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </Link>
                        <Link to={`/jobs/${job.id}/referrers`}>
                          <Button size="sm">
                            <Users className="h-4 w-4 mr-2" />
                            Get Referral
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="h-12 w-12 text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No jobs found</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
              Try adjusting your search criteria or filters to find more opportunities.
            </p>
            <Link to="/post-job">
              <Button>
                <Building2 className="h-4 w-4 mr-2" />
                Post the First Job
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;

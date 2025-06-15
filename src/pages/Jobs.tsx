
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Briefcase, MapPin, Clock, DollarSign, Users, Building2, Search, Filter, Star, Award, TrendingUp } from "lucide-react";

// Enhanced job data with more realistic details
const jobs = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "TechCorp Solutions",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "Mid Level (3-6 years)",
    salary: "₹15-25 LPA",
    salaryMin: 15,
    salaryMax: 25,
    department: "Engineering",
    referralBonus: "₹75,000",
    description: "Join our dynamic team to build scalable web applications using modern technologies. Work with React, Node.js, and AWS to create innovative solutions.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    postedDate: "2024-01-15",
    applicants: 45,
    referrers: 8,
    urgency: "high",
    remote: true,
    rating: 4.8,
    companySize: "1000-5000"
  },
  {
    id: "2", 
    title: "Product Manager",
    company: "Innovation Labs",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "Senior Level (5-8 years)",
    salary: "₹25-40 LPA",
    salaryMin: 25,
    salaryMax: 40,
    department: "Product",
    referralBonus: "₹1,00,000",
    description: "Lead product strategy and roadmap for our flagship SaaS platform. Drive product vision and work cross-functionally with engineering and design teams.",
    skills: ["Product Strategy", "Analytics", "Agile", "User Research", "SQL"],
    postedDate: "2024-01-14",
    applicants: 32,
    referrers: 12,
    urgency: "medium",
    remote: false,
    rating: 4.9,
    companySize: "500-1000"
  },
  {
    id: "3",
    title: "UX Designer",
    company: "DesignHub",
    location: "Hyderabad, India", 
    type: "Full-time",
    experience: "Mid Level (2-5 years)",
    salary: "₹12-20 LPA",
    salaryMin: 12,
    salaryMax: 20,
    department: "Design",
    referralBonus: "₹50,000",
    description: "Create intuitive and beautiful user experiences for our mobile and web applications. Work with design systems and conduct user research.",
    skills: ["Figma", "Prototyping", "User Research", "Design Systems", "Adobe Creative Suite"],
    postedDate: "2024-01-13",
    applicants: 28,
    referrers: 6,
    urgency: "low",
    remote: true,
    rating: 4.7,
    companySize: "100-500"
  },
  {
    id: "4",
    title: "Data Scientist",
    company: "DataTech Analytics",
    location: "Pune, India",
    type: "Full-time", 
    experience: "Senior Level (4-7 years)",
    salary: "₹18-30 LPA",
    salaryMin: 18,
    salaryMax: 30,
    department: "Data Science",
    referralBonus: "₹80,000",
    description: "Build ML models and derive insights from large datasets to drive business decisions. Work with Python, TensorFlow, and cloud platforms.",
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "AWS", "Statistics"],
    postedDate: "2024-01-12",
    applicants: 38,
    referrers: 10,
    urgency: "high",
    remote: true,
    rating: 4.6,
    companySize: "1000-5000"
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "CloudFirst Inc",
    location: "Chennai, India",
    type: "Full-time",
    experience: "Mid Level (3-5 years)", 
    salary: "₹16-24 LPA",
    salaryMin: 16,
    salaryMax: 24,
    department: "Engineering",
    referralBonus: "₹65,000",
    description: "Manage cloud infrastructure and CI/CD pipelines. Work with Kubernetes, Docker, and AWS to ensure scalable and reliable deployments.",
    skills: ["AWS", "Kubernetes", "Docker", "Jenkins", "Terraform", "Linux"],
    postedDate: "2024-01-11",
    applicants: 52,
    referrers: 15,
    urgency: "medium",
    remote: false,
    rating: 4.5,
    companySize: "500-1000"
  },
  {
    id: "6",
    title: "Frontend Developer",
    company: "WebCraft Studios",
    location: "Remote",
    type: "Full-time",
    experience: "Junior Level (1-3 years)",
    salary: "₹8-15 LPA",
    salaryMin: 8,
    salaryMax: 15,
    department: "Engineering", 
    referralBonus: "₹40,000",
    description: "Build responsive and interactive web applications using modern frontend technologies. Focus on React, TypeScript, and modern CSS frameworks.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "GraphQL"],
    postedDate: "2024-01-10",
    applicants: 67,
    referrers: 8,
    urgency: "low",
    remote: true,
    rating: 4.4,
    companySize: "50-100"
  }
];

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [experienceFilter, setExperienceFilter] = useState("all");
  const [remoteFilter, setRemoteFilter] = useState("all");
  const [urgencyFilter, setUrgencyFilter] = useState("all");
  const [salaryRange, setSalaryRange] = useState([8, 40]);
  const [sortBy, setSortBy] = useState("newest");

  const departments = [...new Set(jobs.map(job => job.department))];
  const locations = [...new Set(jobs.map(job => job.location.split(", ")[0]))];
  const types = [...new Set(jobs.map(job => job.type))];
  const experienceLevels = [...new Set(jobs.map(job => job.experience.split(" ")[0] + " " + job.experience.split(" ")[1]))];

  const filteredJobs = jobs
    .filter(job => 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase())
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
    .filter(job => 
      experienceFilter === "all" || job.experience.startsWith(experienceFilter)
    )
    .filter(job => 
      remoteFilter === "all" || 
      (remoteFilter === "remote" && job.remote) ||
      (remoteFilter === "onsite" && !job.remote)
    )
    .filter(job =>
      urgencyFilter === "all" || job.urgency === urgencyFilter
    )
    .filter(job => 
      job.salaryMin >= salaryRange[0] && job.salaryMax <= salaryRange[1]
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "salary":
          return b.salaryMax - a.salaryMax;
        case "applicants":
          return a.applicants - b.applicants;
        case "referrers":
          return b.referrers - a.referrers;
        case "rating":
          return b.rating - a.rating;
        case "urgency":
          const urgencyOrder = { high: 3, medium: 2, low: 1 };
          return urgencyOrder[b.urgency] - urgencyOrder[a.urgency];
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

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Enhanced Hero Section */}
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
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <span>85% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Enhanced Search and Filters */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8 mb-12">
          <div className="space-y-8">
            <div className="relative">
              <Search className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
              <Input
                placeholder="Search jobs by title, company, skills, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-white/90 border-gray-200"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <label className="text-sm font-medium text-gray-700">Experience Level</label>
                <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                  <SelectTrigger className="bg-white/90 border-gray-200">
                    <SelectValue placeholder="All Levels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Experience Levels</SelectItem>
                    {experienceLevels.map(level => (
                      <SelectItem key={level} value={level}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Work Type</label>
                <Select value={remoteFilter} onValueChange={setRemoteFilter}>
                  <SelectTrigger className="bg-white/90 border-gray-200">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="onsite">On-site</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700">
                  Salary Range: ₹{salaryRange[0]} - ₹{salaryRange[1]} LPA
                </label>
                <Slider
                  value={salaryRange}
                  onValueChange={setSalaryRange}
                  max={50}
                  min={5}
                  step={1}
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Urgency</label>
                  <Select value={urgencyFilter} onValueChange={setUrgencyFilter}>
                    <SelectTrigger className="bg-white/90 border-gray-200">
                      <SelectValue placeholder="All Urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Urgency</SelectItem>
                      <SelectItem value="high">High Priority</SelectItem>
                      <SelectItem value="medium">Medium Priority</SelectItem>
                      <SelectItem value="low">Low Priority</SelectItem>
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
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="salary">Highest Salary</SelectItem>
                      <SelectItem value="referrers">Most Referrers</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="urgency">Most Urgent</SelectItem>
                      <SelectItem value="applicants">Least Competition</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Results Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {filteredJobs.length} Jobs Found
            </h2>
            <p className="text-gray-600 mt-1">Find opportunities that match your skills and preferences</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/post-job">
              <Button className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Post a Job
              </Button>
            </Link>
          </div>
        </div>

        {/* Enhanced Job Listings */}
        {filteredJobs.length > 0 ? (
          <div className="grid gap-8">
            {filteredJobs.map((job, index) => (
              <Card 
                key={job.id} 
                className="hover:shadow-2xl transition-all duration-500 border-0 bg-white/95 backdrop-blur-sm hover:scale-[1.02] animate-fade-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row justify-between gap-6">
                    <div className="flex-1 space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-3">
                            <h3 className="text-2xl font-bold text-gray-900 flex-1">
                              <Link to={`/jobs/${job.id}`} className="hover:text-brand transition-colors">
                                {job.title}
                              </Link>
                            </h3>
                            <Badge className={getUrgencyColor(job.urgency)} variant="secondary">
                              {job.urgency} priority
                            </Badge>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                            <div className="flex items-center gap-2">
                              <Building2 className="h-4 w-4" />
                              <span className="font-medium">{job.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                              {job.remote && <Badge variant="secondary" className="bg-blue-100 text-blue-700">Remote</Badge>}
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>{getTimeAgo(job.postedDate)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span>{job.rating}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 whitespace-nowrap">
                          {job.department}
                        </Badge>
                      </div>

                      <p className="text-gray-700 leading-relaxed">{job.description}</p>

                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {job.skills.slice(0, 5).map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-700">
                              {skill}
                            </Badge>
                          ))}
                          {job.skills.length > 5 && (
                            <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                              +{job.skills.length - 5} more
                            </Badge>
                          )}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            <DollarSign className="h-4 w-4 text-green-600" />
                            <span className="font-medium">{job.salary}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Users className="h-4 w-4 text-blue-600" />
                            <span>{job.applicants} applicants</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Award className="h-4 w-4 text-purple-600" />
                            <span>{job.referrers} referrers</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Briefcase className="h-4 w-4 text-orange-600" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between items-end gap-6 min-w-fit">
                      {job.referralBonus && (
                        <div className="text-right bg-green-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-600">Referral Bonus</div>
                          <div className="text-2xl font-bold text-green-600">{job.referralBonus}</div>
                          <div className="text-xs text-gray-500 mt-1">for successful hire</div>
                        </div>
                      )}
                      
                      <div className="flex flex-col gap-3 w-full min-w-[200px]">
                        <Link to={`/jobs/${job.id}`}>
                          <Button variant="outline" size="sm" className="w-full">
                            View Details
                          </Button>
                        </Link>
                        <Link to={`/jobs/${job.id}/referrers`}>
                          <Button size="sm" className="w-full">
                            <Users className="h-4 w-4 mr-2" />
                            Get Referral ({job.referrers})
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
          <div className="text-center py-20">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center mx-auto mb-8">
              <Briefcase className="h-16 w-16 text-gray-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">No jobs found</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-8 text-lg">
              Try adjusting your search criteria or filters to find more opportunities.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => {
                setSearchQuery("");
                setDepartmentFilter("all");
                setLocationFilter("all");
                setExperienceFilter("all");
                setRemoteFilter("all");
                setUrgencyFilter("all");
                setSalaryRange([8, 40]);
              }}>
                Clear All Filters
              </Button>
              <Link to="/post-job">
                <Button variant="outline">
                  <Building2 className="h-4 w-4 mr-2" />
                  Post the First Job
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Job Market Insights */}
        {filteredJobs.length > 0 && (
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Job Market Insights</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  ₹{Math.round(filteredJobs.reduce((sum, job) => sum + (job.salaryMin + job.salaryMax) / 2, 0) / filteredJobs.length)}L
                </div>
                <div className="text-gray-600">Average Salary</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {Math.round(filteredJobs.reduce((sum, job) => sum + job.referrers, 0) / filteredJobs.length)}
                </div>
                <div className="text-gray-600">Avg. Referrers/Job</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {Math.round(filteredJobs.reduce((sum, job) => sum + job.applicants, 0) / filteredJobs.length)}
                </div>
                <div className="text-gray-600">Avg. Applications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {filteredJobs.filter(job => job.remote).length}
                </div>
                <div className="text-gray-600">Remote Opportunities</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;

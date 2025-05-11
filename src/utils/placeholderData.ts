
export interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  description: string;
  location: string;
  website: string;
  size: string;
  founded: number;
  referrersCount: number;
  openPositions: number;
}

export interface Referrer {
  id: string;
  name: string;
  avatar: string;
  company: string;
  companyId: string;
  companyLogo: string;
  role: string;
  department: string;
  yearsAtCompany: number;
  bio: string;
  linkedin: string;
  successfulReferrals: number;
}

// Sample company logos - using placeholder.com for demo purposes
const companyLogoPlaceholders = [
  "https://via.placeholder.com/150/0284c7/FFFFFF?text=TechCorp",
  "https://via.placeholder.com/150/14b8a6/FFFFFF?text=DataSys",
  "https://via.placeholder.com/150/6366f1/FFFFFF?text=CloudFlex",
  "https://via.placeholder.com/150/ec4899/FFFFFF?text=CreativeStudio",
  "https://via.placeholder.com/150/f59e0b/FFFFFF?text=BuildCo",
  "https://via.placeholder.com/150/10b981/FFFFFF?text=FinTech",
  "https://via.placeholder.com/150/8b5cf6/FFFFFF?text=HealthAI",
  "https://via.placeholder.com/150/ef4444/FFFFFF?text=MediaWorks"
];

// Sample avatar placeholders
const avatarPlaceholders = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=4",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=6",
  "https://i.pravatar.cc/150?img=7",
  "https://i.pravatar.cc/150?img=8",
  "https://i.pravatar.cc/150?img=9",
  "https://i.pravatar.cc/150?img=10",
  "https://i.pravatar.cc/150?img=11",
  "https://i.pravatar.cc/150?img=12"
];

export const companies: Company[] = [
  {
    id: "1",
    name: "TechCorp",
    logo: companyLogoPlaceholders[0],
    industry: "Technology",
    description: "A leading technology company specializing in software development and cloud solutions.",
    location: "San Francisco, CA",
    website: "https://techcorp.example.com",
    size: "1000-5000",
    founded: 2005,
    referrersCount: 12,
    openPositions: 8
  },
  {
    id: "2",
    name: "DataSys",
    logo: companyLogoPlaceholders[1],
    industry: "Data Analytics",
    description: "DataSys transforms business data into actionable insights through advanced analytics platforms.",
    location: "Boston, MA",
    website: "https://datasys.example.com",
    size: "500-1000",
    founded: 2010,
    referrersCount: 7,
    openPositions: 5
  },
  {
    id: "3",
    name: "CloudFlex",
    logo: companyLogoPlaceholders[2],
    industry: "Cloud Services",
    description: "CloudFlex provides scalable cloud infrastructure and services for businesses of all sizes.",
    location: "Seattle, WA",
    website: "https://cloudflex.example.com",
    size: "1000-5000",
    founded: 2012,
    referrersCount: 9,
    openPositions: 11
  },
  {
    id: "4",
    name: "CreativeStudio",
    logo: companyLogoPlaceholders[3],
    industry: "Design & Media",
    description: "A creative studio specializing in digital design, branding, and interactive media experiences.",
    location: "Los Angeles, CA",
    website: "https://creativestudio.example.com",
    size: "100-500",
    founded: 2015,
    referrersCount: 4,
    openPositions: 3
  },
  {
    id: "5",
    name: "BuildCo",
    logo: companyLogoPlaceholders[4],
    industry: "Construction",
    description: "BuildCo is revolutionizing the construction industry with sustainable practices and innovative designs.",
    location: "Chicago, IL",
    website: "https://buildco.example.com",
    size: "5000-10000",
    founded: 1995,
    referrersCount: 6,
    openPositions: 4
  },
  {
    id: "6",
    name: "FinTech Innovations",
    logo: companyLogoPlaceholders[5],
    industry: "Financial Technology",
    description: "A fintech company focused on modernizing financial services through technology.",
    location: "New York, NY",
    website: "https://fintech.example.com",
    size: "500-1000",
    founded: 2016,
    referrersCount: 8,
    openPositions: 7
  },
  {
    id: "7",
    name: "HealthAI",
    logo: companyLogoPlaceholders[6],
    industry: "Healthcare",
    description: "HealthAI is applying artificial intelligence to improve healthcare outcomes and patient care.",
    location: "Austin, TX",
    website: "https://healthai.example.com",
    size: "100-500",
    founded: 2018,
    referrersCount: 5,
    openPositions: 9
  },
  {
    id: "8",
    name: "MediaWorks",
    logo: companyLogoPlaceholders[7],
    industry: "Media & Entertainment",
    description: "MediaWorks creates engaging content and digital media solutions for brands worldwide.",
    location: "Miami, FL",
    website: "https://mediaworks.example.com",
    size: "100-500",
    founded: 2014,
    referrersCount: 3,
    openPositions: 2
  }
];

export const referrers: Referrer[] = [
  {
    id: "1",
    name: "Alex Johnson",
    avatar: avatarPlaceholders[0],
    company: "TechCorp",
    companyId: "1",
    companyLogo: companyLogoPlaceholders[0],
    role: "Senior Software Engineer",
    department: "Engineering",
    yearsAtCompany: 4,
    bio: "I've been at TechCorp for 4 years, focusing on backend systems and cloud architecture. Happy to help candidates who are interested in our engineering openings.",
    linkedin: "https://linkedin.com/in/alexjohnson",
    successfulReferrals: 7
  },
  {
    id: "2",
    name: "Sarah Chen",
    avatar: avatarPlaceholders[1],
    company: "DataSys",
    companyId: "2",
    companyLogo: companyLogoPlaceholders[1],
    role: "Data Scientist",
    department: "Analytics",
    yearsAtCompany: 3,
    bio: "Working with machine learning models and big data at DataSys. If you're passionate about data science, I'd love to help you join our team.",
    linkedin: "https://linkedin.com/in/sarahchen",
    successfulReferrals: 5
  },
  {
    id: "3",
    name: "Michael Park",
    avatar: avatarPlaceholders[2],
    company: "CloudFlex",
    companyId: "3",
    companyLogo: companyLogoPlaceholders[2],
    role: "Product Manager",
    department: "Product",
    yearsAtCompany: 2,
    bio: "Product manager focused on cloud infrastructure products. I enjoy mentoring and helping people navigate the job application process.",
    linkedin: "https://linkedin.com/in/michaelpark",
    successfulReferrals: 4
  },
  {
    id: "4",
    name: "Jessica Taylor",
    avatar: avatarPlaceholders[3],
    company: "CreativeStudio",
    companyId: "4",
    companyLogo: companyLogoPlaceholders[3],
    role: "Creative Director",
    department: "Design",
    yearsAtCompany: 5,
    bio: "Leading the design team at CreativeStudio. We're always looking for talented designers with a passion for innovation.",
    linkedin: "https://linkedin.com/in/jessicataylor",
    successfulReferrals: 6
  },
  {
    id: "5",
    name: "David Wilson",
    avatar: avatarPlaceholders[4],
    company: "TechCorp",
    companyId: "1",
    companyLogo: companyLogoPlaceholders[0],
    role: "Engineering Manager",
    department: "Engineering",
    yearsAtCompany: 6,
    bio: "Managing front-end development teams at TechCorp. I've helped many talented engineers join our company over the years.",
    linkedin: "https://linkedin.com/in/davidwilson",
    successfulReferrals: 9
  },
  {
    id: "6",
    name: "Amanda Rodriguez",
    avatar: avatarPlaceholders[5],
    company: "FinTech Innovations",
    companyId: "6",
    companyLogo: companyLogoPlaceholders[5],
    role: "Software Developer",
    department: "Engineering",
    yearsAtCompany: 2,
    bio: "Working on innovative payment solutions at FinTech Innovations. I'm happy to refer motivated developers who want to work in fintech.",
    linkedin: "https://linkedin.com/in/amandarodriguez",
    successfulReferrals: 3
  },
  {
    id: "7",
    name: "James Lee",
    avatar: avatarPlaceholders[6],
    company: "HealthAI",
    companyId: "7",
    companyLogo: companyLogoPlaceholders[6],
    role: "AI Researcher",
    department: "R&D",
    yearsAtCompany: 3,
    bio: "Researching applications of AI in healthcare at HealthAI. If you're interested in using technology to improve patient outcomes, let's connect.",
    linkedin: "https://linkedin.com/in/jameslee",
    successfulReferrals: 2
  },
  {
    id: "8",
    name: "Olivia Garcia",
    avatar: avatarPlaceholders[7],
    company: "DataSys",
    companyId: "2",
    companyLogo: companyLogoPlaceholders[1],
    role: "Product Marketing Manager",
    department: "Marketing",
    yearsAtCompany: 4,
    bio: "Leading product marketing initiatives at DataSys. I'm passionate about helping marketers join our fast-growing team.",
    linkedin: "https://linkedin.com/in/oliviagarcia",
    successfulReferrals: 5
  },
  {
    id: "9",
    name: "Ryan Brown",
    avatar: avatarPlaceholders[8],
    company: "CloudFlex",
    companyId: "3",
    companyLogo: companyLogoPlaceholders[2],
    role: "DevOps Engineer",
    department: "Operations",
    yearsAtCompany: 3,
    bio: "Building and maintaining cloud infrastructure at CloudFlex. Happy to refer skilled DevOps professionals.",
    linkedin: "https://linkedin.com/in/ryanbrown",
    successfulReferrals: 4
  },
  {
    id: "10",
    name: "Emma Wilson",
    avatar: avatarPlaceholders[9],
    company: "MediaWorks",
    companyId: "8",
    companyLogo: companyLogoPlaceholders[7],
    role: "Content Strategist",
    department: "Content",
    yearsAtCompany: 2,
    bio: "Developing content strategies for major brands at MediaWorks. If you're a creative storyteller, I'd be happy to help you join our team.",
    linkedin: "https://linkedin.com/in/emmawilson",
    successfulReferrals: 3
  },
  {
    id: "11",
    name: "Daniel Kim",
    avatar: avatarPlaceholders[10],
    company: "TechCorp",
    companyId: "1",
    companyLogo: companyLogoPlaceholders[0],
    role: "UX Designer",
    department: "Design",
    yearsAtCompany: 3,
    bio: "Creating user-centered designs at TechCorp. Looking to refer designers who are passionate about solving complex problems.",
    linkedin: "https://linkedin.com/in/danielkim",
    successfulReferrals: 4
  },
  {
    id: "12",
    name: "Sophia Martinez",
    avatar: avatarPlaceholders[11],
    company: "BuildCo",
    companyId: "5",
    companyLogo: companyLogoPlaceholders[4],
    role: "Project Manager",
    department: "Operations",
    yearsAtCompany: 5,
    bio: "Managing construction projects at BuildCo. Happy to refer project managers and construction professionals to our growing team.",
    linkedin: "https://linkedin.com/in/sophiamartinez",
    successfulReferrals: 6
  }
];

export const getCompanyById = (id: string): Company | undefined => {
  return companies.find(company => company.id === id);
};

export const getReferrerById = (id: string): Referrer | undefined => {
  return referrers.find(referrer => referrer.id === id);
};

export const getReferrersByCompanyId = (companyId: string): Referrer[] => {
  return referrers.filter(referrer => referrer.companyId === companyId);
};

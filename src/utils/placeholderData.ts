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

// Updated company logos with more reliable image sources
const companyLogoPlaceholders = [
  "https://logo.clearbit.com/infosys.com",
  "https://logo.clearbit.com/wipro.com",
  "https://logo.clearbit.com/tcs.com",
  "https://logo.clearbit.com/mindtree.com",
  "https://logo.clearbit.com/larsentoubro.com",
  "https://logo.clearbit.com/paytm.com",
  "https://logo.clearbit.com/apollohospitals.com",
  "https://logo.clearbit.com/zee.com"
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
    name: "InfoTech Solutions",
    logo: companyLogoPlaceholders[0],
    industry: "Information Technology",
    description: "A leading IT services company providing software development and digital transformation solutions across India.",
    location: "Bangalore, Karnataka",
    website: "https://infotech.example.com",
    size: "1000-5000",
    founded: 2005,
    referrersCount: 12,
    openPositions: 8
  },
  {
    id: "2",
    name: "Wipro Limited",
    logo: companyLogoPlaceholders[1],
    industry: "IT Services",
    description: "Wipro Limited is a leading global information technology, consulting and business process services company headquartered in Bangalore.",
    location: "Bangalore, Karnataka",
    website: "https://wipro.com",
    size: "10000+",
    founded: 1945,
    referrersCount: 7,
    openPositions: 15
  },
  {
    id: "3",
    name: "Tata Consultancy Services",
    logo: companyLogoPlaceholders[2],
    industry: "IT Services & Consulting",
    description: "TCS is an Indian multinational information technology services and consulting company, providing business solutions to global clients.",
    location: "Mumbai, Maharashtra",
    website: "https://tcs.com",
    size: "10000+",
    founded: 1968,
    referrersCount: 9,
    openPositions: 11
  },
  {
    id: "4",
    name: "MindTree Studios",
    logo: companyLogoPlaceholders[3],
    industry: "Digital Solutions",
    description: "A digital design and engineering studio specializing in enterprise software, customer experience and innovation.",
    location: "Pune, Maharashtra",
    website: "https://mindtree.com",
    size: "1000-5000",
    founded: 2010,
    referrersCount: 4,
    openPositions: 3
  },
  {
    id: "5",
    name: "L&T Infotech",
    logo: companyLogoPlaceholders[4],
    industry: "Technology Consulting",
    description: "L&T Infotech is a global technology consulting and digital solutions company helping enterprises worldwide reimagine business processes.",
    location: "Chennai, Tamil Nadu",
    website: "https://larsentoubro.com",
    size: "5000-10000",
    founded: 1997,
    referrersCount: 6,
    openPositions: 4
  },
  {
    id: "6",
    name: "Paytm",
    logo: companyLogoPlaceholders[5],
    industry: "Financial Technology",
    description: "India's leading digital payments and financial technology company, transforming the way people pay and bank.",
    location: "Noida, Uttar Pradesh",
    website: "https://paytm.com",
    size: "5000-10000",
    founded: 2010,
    referrersCount: 8,
    openPositions: 7
  },
  {
    id: "7",
    name: "Apollo Health",
    logo: companyLogoPlaceholders[6],
    industry: "Healthcare",
    description: "Apollo Health is applying artificial intelligence to improve healthcare outcomes and patient care across India.",
    location: "Hyderabad, Telangana",
    website: "https://apollohospitals.com",
    size: "1000-5000",
    founded: 2015,
    referrersCount: 5,
    openPositions: 9
  },
  {
    id: "8",
    name: "Zee Digital",
    logo: companyLogoPlaceholders[7],
    industry: "Media & Entertainment",
    description: "Zee Digital creates engaging content and digital media solutions for audiences across India.",
    location: "Mumbai, Maharashtra",
    website: "https://zee.com",
    size: "1000-5000",
    founded: 2012,
    referrersCount: 3,
    openPositions: 2
  }
];

export const referrers: Referrer[] = [
  {
    id: "1",
    name: "Aditya Sharma",
    avatar: avatarPlaceholders[0],
    company: "InfoTech Solutions",
    companyId: "1",
    companyLogo: companyLogoPlaceholders[0],
    role: "Senior Software Engineer",
    department: "Engineering",
    yearsAtCompany: 4,
    bio: "I've been at InfoTech for 4 years, focusing on backend systems and cloud architecture. Happy to help candidates who are interested in our engineering openings.",
    linkedin: "https://linkedin.com/in/adityasharma",
    successfulReferrals: 7
  },
  {
    id: "2",
    name: "Priya Patel",
    avatar: avatarPlaceholders[1],
    company: "Wipro Limited",
    companyId: "2",
    companyLogo: companyLogoPlaceholders[1],
    role: "Data Scientist",
    department: "Analytics",
    yearsAtCompany: 3,
    bio: "Working with machine learning models and big data at Wipro. If you're passionate about data science and AI, I'd love to help you join our team.",
    linkedin: "https://linkedin.com/in/priyapatel",
    successfulReferrals: 5
  },
  {
    id: "3",
    name: "Vikram Mehta",
    avatar: avatarPlaceholders[2],
    company: "Tata Consultancy Services",
    companyId: "3",
    companyLogo: companyLogoPlaceholders[2],
    role: "Product Manager",
    department: "Product",
    yearsAtCompany: 2,
    bio: "Product manager focused on financial technology products at TCS. I enjoy mentoring and helping people navigate the job application process.",
    linkedin: "https://linkedin.com/in/vikrammehta",
    successfulReferrals: 4
  },
  {
    id: "4",
    name: "Anjali Desai",
    avatar: avatarPlaceholders[3],
    company: "MindTree Studios",
    companyId: "4",
    companyLogo: companyLogoPlaceholders[3],
    role: "Creative Director",
    department: "Design",
    yearsAtCompany: 5,
    bio: "Leading the UX/UI design team at MindTree Studios. We're always looking for talented designers with a passion for innovation.",
    linkedin: "https://linkedin.com/in/anjalidesai",
    successfulReferrals: 6
  },
  {
    id: "5",
    name: "Rahul Verma",
    avatar: avatarPlaceholders[4],
    company: "InfoTech Solutions",
    companyId: "1",
    companyLogo: companyLogoPlaceholders[0],
    role: "Engineering Manager",
    department: "Engineering",
    yearsAtCompany: 6,
    bio: "Managing front-end development teams at InfoTech. I've helped many talented engineers join our company over the years.",
    linkedin: "https://linkedin.com/in/rahulverma",
    successfulReferrals: 9
  },
  {
    id: "6",
    name: "Divya Singh",
    avatar: avatarPlaceholders[5],
    company: "Paytm",
    companyId: "6",
    companyLogo: companyLogoPlaceholders[5],
    role: "Software Developer",
    department: "Engineering",
    yearsAtCompany: 2,
    bio: "Working on innovative payment solutions at Paytm. I'm happy to refer motivated developers who want to work in fintech.",
    linkedin: "https://linkedin.com/in/divyasingh",
    successfulReferrals: 3
  },
  {
    id: "7",
    name: "Karthik Rao",
    avatar: avatarPlaceholders[6],
    company: "Apollo Health",
    companyId: "7",
    companyLogo: companyLogoPlaceholders[6],
    role: "AI Researcher",
    department: "R&D",
    yearsAtCompany: 3,
    bio: "Researching applications of AI in healthcare at Apollo. If you're interested in using technology to improve patient outcomes, let's connect.",
    linkedin: "https://linkedin.com/in/karthikrao",
    successfulReferrals: 2
  },
  {
    id: "8",
    name: "Nisha Agarwal",
    avatar: avatarPlaceholders[7],
    company: "Wipro Limited",
    companyId: "2",
    companyLogo: companyLogoPlaceholders[1],
    role: "Product Marketing Manager",
    department: "Marketing",
    yearsAtCompany: 4,
    bio: "Leading product marketing initiatives at Wipro. I'm passionate about helping marketers join our fast-growing team.",
    linkedin: "https://linkedin.com/in/nishaagarwal",
    successfulReferrals: 5
  },
  {
    id: "9",
    name: "Sanjay Gupta",
    avatar: avatarPlaceholders[8],
    company: "Tata Consultancy Services",
    companyId: "3",
    companyLogo: companyLogoPlaceholders[2],
    role: "DevOps Engineer",
    department: "Operations",
    yearsAtCompany: 3,
    bio: "Building and maintaining cloud infrastructure at TCS. Happy to refer skilled DevOps professionals.",
    linkedin: "https://linkedin.com/in/sanjaygupta",
    successfulReferrals: 4
  },
  {
    id: "10",
    name: "Meera Reddy",
    avatar: avatarPlaceholders[9],
    company: "Zee Digital",
    companyId: "8",
    companyLogo: companyLogoPlaceholders[7],
    role: "Content Strategist",
    department: "Content",
    yearsAtCompany: 2,
    bio: "Developing content strategies for major brands at Zee Digital. If you're a creative storyteller, I'd be happy to help you join our team.",
    linkedin: "https://linkedin.com/in/meerareddy",
    successfulReferrals: 3
  },
  {
    id: "11",
    name: "Arjun Nair",
    avatar: avatarPlaceholders[10],
    company: "InfoTech Solutions",
    companyId: "1",
    companyLogo: companyLogoPlaceholders[0],
    role: "UX Designer",
    department: "Design",
    yearsAtCompany: 3,
    bio: "Creating user-centered designs at InfoTech. Looking to refer designers who are passionate about solving complex problems.",
    linkedin: "https://linkedin.com/in/arjunnair",
    successfulReferrals: 4
  },
  {
    id: "12",
    name: "Neha Malhotra",
    avatar: avatarPlaceholders[11],
    company: "L&T Infotech",
    companyId: "5",
    companyLogo: companyLogoPlaceholders[4],
    role: "Project Manager",
    department: "Operations",
    yearsAtCompany: 5,
    bio: "Managing technology projects at L&T Infotech. Happy to refer project managers and IT professionals to our growing team.",
    linkedin: "https://linkedin.com/in/nehamalhotra",
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


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

// Using more reliable svg placeholders instead of standard image URLs
const generateLogoPlaceholder = (name: string, bgColor = "3b82f6") => {
  const initials = name.split(' ')
    .map(word => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  
  return `https://ui-avatars.com/api/?name=${initials}&background=${bgColor}&color=ffffff&size=100&bold=true&format=svg`;
};

const companyLogoPlaceholders = [
  generateLogoPlaceholder("InfoTech Solutions", "6366f1"),
  generateLogoPlaceholder("Wipro Limited", "3b82f6"),
  generateLogoPlaceholder("TCS", "0ea5e9"),
  generateLogoPlaceholder("MindTree", "10b981"),
  generateLogoPlaceholder("L&T", "8b5cf6"),
  generateLogoPlaceholder("Paytm", "ec4899"),
  generateLogoPlaceholder("Apollo", "f43f5e"),
  generateLogoPlaceholder("Zee", "f59e0b")
];

// These avatars are more carefully selected to ensure consistency in gender and diversity
const maleAvatars = [
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=300&fit=crop", // Male 1 
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop", // Male 2
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop", // Male 3
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop", // Male 4
  "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=300&h=300&fit=crop", // Male 5
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop"  // Male 6
];

const femaleAvatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop", // Female 1
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop", // Female 2
  "https://images.unsplash.com/photo-1548142813-c348350df52b?w=300&h=300&fit=crop", // Female 3
  "https://images.unsplash.com/photo-1535468850893-d6e543fbd7f5?w=300&h=300&fit=crop", // Female 4
  "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=300&h=300&fit=crop", // Female 5
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop"  // Female 6
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
    avatar: maleAvatars[0],
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
    avatar: femaleAvatars[0],
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
    avatar: maleAvatars[1],
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
    avatar: femaleAvatars[1],
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
    avatar: maleAvatars[2],
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
    avatar: femaleAvatars[2],
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
    avatar: maleAvatars[3],
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
    avatar: femaleAvatars[3],
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
    avatar: maleAvatars[4],
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
    avatar: femaleAvatars[4],
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
    avatar: maleAvatars[5],
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
    avatar: femaleAvatars[5],
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

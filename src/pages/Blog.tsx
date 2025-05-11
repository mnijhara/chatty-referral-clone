
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SearchBox from "@/components/SearchBox";

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "How to Get Noticed by Recruiters in 2025",
    excerpt: "Learn the latest strategies for standing out in a crowded job market and catching recruiters' attention.",
    category: "Job Search",
    author: "Sarah Johnson",
    authorRole: "Career Coach",
    date: "May 5, 2025",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "The Power of Employee Referrals: Statistics You Should Know",
    excerpt: "Discover why employee referrals lead to better hires, faster placements, and longer retention rates.",
    category: "Industry Insights",
    author: "Michael Chen",
    authorRole: "HR Director",
    date: "May 2, 2025",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Writing the Perfect Referral Request Email",
    excerpt: "Templates and tips for crafting referral requests that get positive responses from potential referrers.",
    category: "Strategies",
    author: "Emily Rodriguez",
    authorRole: "Content Specialist",
    date: "April 28, 2025",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Tech Industry Hiring Trends for Q2 2025",
    excerpt: "Analysis of the latest hiring patterns in tech and what skills are most in demand right now.",
    category: "Industry Insights",
    author: "David Kim",
    authorRole: "Tech Analyst",
    date: "April 25, 2025",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "From Application to Offer: One Job Seeker's Success Story",
    excerpt: "How Alex landed his dream job at Google through a ReferralHire connection.",
    category: "Success Stories",
    author: "Alex Morgan",
    authorRole: "Software Engineer",
    date: "April 21, 2025",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Optimizing Your LinkedIn Profile for Referrals",
    excerpt: "Step-by-step guide to make your LinkedIn profile attractive to potential referrers.",
    category: "Strategies",
    author: "Priya Patel",
    authorRole: "LinkedIn Optimization Expert",
    date: "April 18, 2025",
    image: "/placeholder.svg"
  }
];

// Mock categories
const categories = [
  "All Categories",
  "Job Search",
  "Industry Insights",
  "Strategies",
  "Success Stories",
  "Resume Tips"
];

const Blog = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // In a real implementation, this would filter the blog posts
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="text-gray-600 mb-8">
          Insights, strategies, and success stories to help you land your dream job
        </p>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
          <SearchBox placeholder="Search articles..." onSearch={handleSearch} />
          
          <div className="flex overflow-x-auto pb-2 w-full md:w-auto gap-2">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Featured Post */}
        <div className="mb-12">
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src={blogPosts[0].image} 
              alt={blogPosts[0].title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <span className="text-xs text-white bg-brand px-2 py-1 rounded-full mb-2 inline-block">
                {blogPosts[0].category}
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-200 mb-2 line-clamp-2">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-200">
                <span>{blogPosts[0].author}</span>
                <span className="mx-2">•</span>
                <span>{blogPosts[0].date}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex-grow flex flex-col">
                <span className="text-xs text-brand font-medium mb-2">{post.category}</span>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline">Load More Articles</Button>
        </div>
        
        {/* Newsletter */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 mb-6">
            Get the latest articles, job search tips, and industry insights delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

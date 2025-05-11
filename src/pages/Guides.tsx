
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const guides = [
  {
    id: 1,
    title: "Getting Started with ReferralHire",
    description: "A comprehensive guide to set up your profile and start finding referrers.",
    image: "/placeholder.svg",
    category: "Beginner",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Crafting the Perfect Resume for Referrals",
    description: "Tips and templates for creating a resume that stands out to both referrers and hiring managers.",
    image: "/placeholder.svg",
    category: "Resume",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "How to Write an Effective Referral Request",
    description: "Learn how to draft personalized messages that increase your chances of getting referred.",
    image: "/placeholder.svg",
    category: "Strategy",
    readTime: "7 min read"
  },
  {
    id: 4,
    title: "Preparing for Your Interview After Getting Referred",
    description: "What to expect and how to prepare for interviews after receiving an employee referral.",
    image: "/placeholder.svg",
    category: "Interviews",
    readTime: "12 min read"
  },
  {
    id: 5,
    title: "Leveraging LinkedIn for Job Referrals",
    description: "How to optimize your LinkedIn profile and network to attract potential referrers.",
    image: "/placeholder.svg",
    category: "Social Media",
    readTime: "10 min read"
  },
  {
    id: 6,
    title: "Following Up After Submitting a Referral Request",
    description: "Best practices for following up with referrers without being pushy.",
    image: "/placeholder.svg",
    category: "Communication",
    readTime: "6 min read"
  }
];

const categories = [
  "All Guides",
  "Beginner",
  "Resume",
  "Strategy",
  "Interviews", 
  "Social Media",
  "Communication"
];

const Guides = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Guides & Resources</h1>
        <p className="text-gray-600 mb-8">
          Step-by-step guides to help you navigate the referral process and maximize your chances of success
        </p>
        
        {/* Categories */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2">
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
        
        {/* Featured Guide */}
        <div className="mb-12">
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Featured guide"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-8">
              <span className="text-xs text-white bg-brand px-2 py-1 rounded-full mb-2 inline-block">
                Featured Guide
              </span>
              <h2 className="text-2xl font-bold text-white mb-2">
                The Complete Referral Playbook: From Request to Offer
              </h2>
              <p className="text-gray-200 mb-4 max-w-2xl">
                Our most comprehensive guide covering the entire referral process, with expert tips from 
                successful job seekers and hiring managers at top companies.
              </p>
              <Button size="sm" className="w-fit">Read Guide</Button>
            </div>
          </div>
        </div>
        
        {/* Guide Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {guides.map((guide) => (
            <Card key={guide.id} className="overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={guide.image} 
                  alt={guide.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {guide.category}
                  </span>
                  <span className="text-xs text-gray-500">{guide.readTime}</span>
                </div>
                <CardTitle className="text-lg">{guide.title}</CardTitle>
                <CardDescription>{guide.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button variant="outline" className="w-full">Read Guide</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Resource Collections */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Resource Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-8 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Resume Templates</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Download professionally designed resume templates optimized for ATS systems and referrals.
              </p>
              <Button variant="outline">Browse Templates</Button>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Email Templates</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Customizable email templates for requesting referrals, following up, and saying thank you.
              </p>
              <Button variant="outline">Browse Templates</Button>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Get New Guides in Your Inbox</h3>
          <p className="text-gray-600 mb-6">
            Subscribe to receive our latest guides, templates, and job search tips.
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

export default Guides;

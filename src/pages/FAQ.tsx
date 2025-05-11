
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is ReferralHire?",
          answer: "ReferralHire is a platform that connects job seekers with employees at their target companies who can provide referrals. Employee referrals can significantly increase your chances of getting an interview and landing a job."
        },
        {
          question: "How do I create an account?",
          answer: "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. You can sign up using your email, or through Google or Facebook authentication."
        },
        {
          question: "Is ReferralHire free to use?",
          answer: "We offer both free and premium plans. With the free plan, you can browse companies and referrers but have limited referral requests. Premium plans provide unlimited requests and additional features. Check our pricing page for more details."
        }
      ]
    },
    {
      category: "Finding Referrers",
      questions: [
        {
          question: "How do I find a referrer at my target company?",
          answer: "You can search for referrers by company name, industry, location, or role. Use the search and filter functions on the Referrers page to narrow down your options."
        },
        {
          question: "Can I request referrals from multiple people at the same company?",
          answer: "Yes, you can submit referral requests to multiple referrers at the same company. However, we recommend being selective and focusing on referrers whose profiles best match the position you're applying for."
        },
        {
          question: "How are referrers vetted?",
          answer: "All referrers on our platform must verify their employment at the listed company using their corporate email address. We also track successful referrals and review feedback to ensure quality."
        }
      ]
    },
    {
      category: "Referral Process",
      questions: [
        {
          question: "How do I make a referral request?",
          answer: "After finding a suitable referrer, click on 'Request Referral' on their profile. You'll need to specify the position you're interested in, upload your resume, and write a personalized note explaining why you're a good fit for the role."
        },
        {
          question: "How long does it take to hear back after sending a request?",
          answer: "Most referrers respond within 3-5 business days. If you haven't heard back after a week, you can send a gentle reminder through our platform."
        },
        {
          question: "What happens after a referrer accepts my request?",
          answer: "Once a referrer accepts your request, they'll submit your information through their company's internal referral system. You'll receive a confirmation when this happens, and the referrer may provide additional guidance on next steps."
        },
        {
          question: "What if my referral request is declined?",
          answer: "If a referrer declines your request, they may provide feedback on why. You can use this feedback to improve your profile or application before approaching other referrers."
        }
      ]
    },
    {
      category: "Account & Billing",
      questions: [
        {
          question: "How do I upgrade my account to premium?",
          answer: "Go to your account settings and select 'Subscription' to view and select from our premium plans. You can pay using major credit cards, PayPal, or bank transfers in some regions."
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer: "Yes, you can cancel your premium subscription at any time from your account settings. Your premium features will remain available until the end of your current billing cycle."
        },
        {
          question: "Do you offer refunds?",
          answer: "We offer a 14-day money-back guarantee for all new premium subscriptions if you're not satisfied with our service. Contact our support team for assistance with refunds."
        }
      ]
    }
  ];

  // Filter questions based on search
  const filteredFAQs = searchQuery.trim() === "" ? 
    faqCategories :
    faqCategories.map(category => ({
      ...category,
      questions: category.questions.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(category => category.questions.length > 0);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-8">
          Find answers to common questions about ReferralHire
        </p>
        
        {/* Search */}
        <div className="relative mb-10">
          <Input
            type="search"
            placeholder="Search for answers..."
            className="w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* FAQ Categories */}
        <div className="space-y-10">
          {filteredFAQs.map((category, index) => (
            category.questions.length > 0 && (
              <div key={index}>
                <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, qIndex) => (
                    <AccordionItem 
                      key={qIndex} 
                      value={`${index}-${qIndex}`}
                      className="border border-gray-200 rounded-md px-4"
                    >
                      <AccordionTrigger className="text-left py-4">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="pt-1 pb-4 text-gray-600">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )
          ))}
          
          {filteredFAQs.length === 0 || filteredFAQs.every(cat => cat.questions.length === 0) ? (
            <div className="text-center py-10">
              <p className="text-gray-500 mb-4">No FAQs found matching your search.</p>
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                Clear Search
              </Button>
            </div>
          ) : null}
        </div>
        
        {/* Support */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            If you couldn't find the answer to your question, our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline">
              Browse our Guides
            </Button>
            <Button>
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

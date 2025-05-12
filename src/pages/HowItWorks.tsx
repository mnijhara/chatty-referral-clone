
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, FileCheck, Briefcase, CheckCircle2 } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">How ReferralHire Works</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          A simple, three-step process to get referred to your dream job
        </p>

        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
          <div className="md:w-1/2">
            <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center text-white text-2xl font-bold mb-4">
              1
            </div>
            <h2 className="text-2xl font-bold mb-4">Browse Companies & Referrers</h2>
            <p className="text-gray-600 mb-4">
              Explore our extensive database of companies that are actively hiring. 
              Find employees at these companies who are open to providing referrals 
              for qualified candidates.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                Search by company, industry, or location
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                Filter by role, department, or seniority level
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                Review referrer profiles and success rates
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-100 p-6 rounded-lg h-72 flex items-center justify-center">
              <div className="flex flex-col items-center text-gray-500">
                <Search size={64} strokeWidth={1} />
                <div className="mt-4 text-center">
                  <div className="text-lg font-semibold">Browse Companies</div>
                  <p className="text-sm">Find the perfect company for your career</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-20">
          <div className="md:w-1/2">
            <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center text-white text-2xl font-bold mb-4">
              2
            </div>
            <h2 className="text-2xl font-bold mb-4">Submit Your Referral Request</h2>
            <p className="text-gray-600 mb-4">
              When you find the right referrer, submit your request including your resume,
              the position you're interested in, and a personalized note explaining 
              why you're a good fit for the role.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                Upload your tailored resume and cover letter
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                Specify the exact position you're applying for
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                Share why you're a perfect match for the job
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-100 p-6 rounded-lg h-72 flex items-center justify-center">
              <div className="flex flex-col items-center text-gray-500">
                <FileCheck size={64} strokeWidth={1} />
                <div className="mt-4 text-center">
                  <div className="text-lg font-semibold">Submit Request</div>
                  <p className="text-sm">Create your personalized referral request</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center text-white text-2xl font-bold mb-4">
              3
            </div>
            <h2 className="text-2xl font-bold mb-4">Get Referred & Interview</h2>
            <p className="text-gray-600 mb-4">
              If your request is approved, the referrer will submit your application 
              through their company's internal referral system. You'll be notified once 
              the referral is complete, and can track your application status.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                Receive updates on your referral status
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                Prepare for interviews with company insights
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                Get feedback from your referrer (optional)
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-100 p-6 rounded-lg h-72 flex items-center justify-center">
              <div className="flex flex-col items-center text-gray-500">
                <Briefcase size={64} strokeWidth={1} />
                <div className="mt-4 text-center">
                  <div className="text-lg font-semibold">Get Hired</div>
                  <p className="text-sm">Land your dream job with insider support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success rate stats */}
        <div className="bg-gray-50 p-10 rounded-lg mb-16">
          <h3 className="text-xl font-bold mb-8 text-center">Why ReferralHire Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand mb-2">9x</div>
              <p className="text-gray-600">Higher chance of getting an interview with a referral</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand mb-2">85%</div>
              <p className="text-gray-600">Success rate for referral requests on our platform</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand mb-2">31%</div>
              <p className="text-gray-600">Faster hiring process compared to traditional applications</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Is there a fee to use ReferralHire?</h4>
              <p className="text-gray-600">
                We offer both free and premium plans. With our free plan, you can browse 
                companies and referrers, but there are limits on how many referral requests 
                you can send. Our premium plans provide unlimited requests and additional 
                features. See our <Link to="/pricing" className="text-brand hover:underline">pricing page</Link> for details.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">How do I increase my chances of getting referred?</h4>
              <p className="text-gray-600">
                Make sure your profile and resume are complete and tailored to the position. 
                Write personalized notes to referrers explaining why you're a good fit. Our 
                <Link to="/blog" className="text-brand hover:underline mx-1">blog</Link> 
                and 
                <Link to="/guides" className="text-brand hover:underline mx-1">guides</Link> 
                provide additional tips for optimizing your referral requests.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Are referrers compensated for providing referrals?</h4>
              <p className="text-gray-600">
                Many companies offer referral bonuses to employees who refer candidates who 
                get hired. On ReferralHire, referrers may receive a portion of our service 
                fee for successful referrals, which incentivizes them to help qualified candidates.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/faq" className="text-brand hover:underline">
              View all frequently asked questions →
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-10 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of candidates who have successfully landed interviews at top companies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button size="lg">Create an Account</Button>
            </Link>
            <Link to="/companies">
              <Button variant="outline" size="lg">Browse Companies</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About ReferMe</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            ReferMe connects job seekers with employee referrers at top companies, 
            helping candidates bypass the traditional application process and 
            significantly increase their chances of landing an interview.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            Our mission is to make the job search process more efficient and
            equitable by creating direct connections between qualified candidates
            and employees who can refer them. We believe that talent should be
            recognized regardless of where it comes from, and that referrals
            should be based on merit rather than existing connections.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">How It Started</h2>
          <p className="mb-6">
            ReferMe was founded in 2023 by a team of tech professionals who 
            experienced firsthand the challenges of breaking into competitive 
            companies without insider connections. After seeing how referrals 
            dramatically increased interview rates, we built a platform to 
            democratize access to this powerful job search advantage.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Referral Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-brand mb-2">9x</div>
              <p className="text-gray-600">Higher chance of getting an interview with a referral</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-brand mb-2">85%</div>
              <p className="text-gray-600">Success rate for referral requests on our platform</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-brand mb-2">31%</div>
              <p className="text-gray-600">Faster hiring process compared to traditional applications</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">For Job Seekers</h2>
          <p className="mb-6">
            As a job seeker, ReferMe gives you access to employees who are ready to
            refer qualified candidates at their companies. Instead of submitting your
            application into the void of an applicant tracking system, you can connect
            directly with someone who can champion your application internally.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">For Referrers</h2>
          <p className="mb-6">
            As a referrer, you can help talented individuals join your company while
            potentially earning referral bonuses. Our platform makes it easy to review
            candidate qualifications and submit referrals through your company's system.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg my-10 text-center">
            <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="mb-6">
              Whether you're looking for a job or want to help others find opportunities
              at your company, ReferMe can help you make valuable connections.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/companies">
                <Button size="lg">Browse Companies</Button>
              </Link>
              <Link to="/referrers">
                <Button variant="outline" size="lg">Find Referrers</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

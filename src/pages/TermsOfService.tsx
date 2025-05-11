
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: May 11, 2025</p>
        
        <div className="prose max-w-none">
          <p>
            These Terms of Service ("Terms") govern your access to and use of the ReferralHire website and services. Please read these Terms carefully before using our services.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Acceptance of Terms</h2>
          <p>
            By accessing or using ReferralHire, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use our services.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Description of Services</h2>
          <p>
            ReferralHire provides a platform connecting job seekers with employee referrers at various companies. Our services include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Facilitating connections between job seekers and potential referrers</li>
            <li>Enabling users to request and provide referrals</li>
            <li>Providing resources related to job searching and referrals</li>
          </ul>
          
          <h2 className="text-xl font-bold mt-8 mb-4">User Accounts</h2>
          <p>
            To access certain features of our service, you must create an account. You are responsible for:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Providing accurate and complete information when creating your account</li>
            <li>Maintaining the security of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use of your account</li>
          </ul>
          
          <h2 className="text-xl font-bold mt-8 mb-4">User Conduct</h2>
          <p>
            When using our services, you agree not to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Violate any applicable laws or regulations</li>
            <li>Impersonate any person or entity</li>
            <li>Provide false or misleading information</li>
            <li>Use our services for any illegal or unauthorized purpose</li>
            <li>Attempt to interfere with the proper working of our services</li>
            <li>Circumvent or attempt to circumvent any security measures</li>
          </ul>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Content and Submissions</h2>
          <p>
            Our service allows users to submit content, including resumes, profiles, messages, and other materials. You retain ownership of the content you submit, but grant ReferralHire a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, and display the content for the purpose of providing and improving our services.
          </p>
          <p>
            You are solely responsible for your content and understand that once submitted, your content may be viewed by other users. You represent and warrant that:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>You own or have the necessary rights to the content you submit</li>
            <li>Your content does not violate any third party's intellectual property rights</li>
            <li>Your content does not contain false information or misrepresentations</li>
            <li>Your content does not violate any applicable laws or regulations</li>
          </ul>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Payment and Subscription</h2>
          <p>
            ReferralHire offers both free and premium subscription plans. By subscribing to a premium plan, you agree to pay the fees as described at the time of purchase. Subscription fees are non-refundable except as expressly stated in these Terms or as required by applicable law.
          </p>
          <p>
            Subscriptions automatically renew at the end of each billing period unless canceled before the renewal date. You can cancel your subscription at any time through your account settings.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, ReferralHire and its officers, employees, partners, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Your access to or use of or inability to access or use our services</li>
            <li>Any conduct or content of any third party on our services</li>
            <li>Any content obtained from our services</li>
            <li>Unauthorized access, use or alteration of your transmissions or content</li>
          </ul>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Modification of Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the updated Terms on this page and updating the "Last updated" date. Continued use of our services after any such changes constitutes your acceptance of the new Terms.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Termination</h2>
          <p>
            We may terminate or suspend your account and access to our services at our sole discretion, without prior notice or liability, for any reason, including but not limited to a breach of these Terms. Upon termination, your right to use our services will immediately cease.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mb-6">
            legal@referralhire.com<br />
            123 Main Street<br />
            San Francisco, CA 94105
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

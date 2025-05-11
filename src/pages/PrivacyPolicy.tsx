
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: May 11, 2025</p>
        
        <div className="prose max-w-none">
          <p>
            At ReferralHire, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Information We Collect</h2>
          
          <h3 className="text-lg font-semibold mt-6 mb-2">Personal Information</h3>
          <p>
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Register for an account</li>
            <li>Express interest in obtaining information about us or our services</li>
            <li>Participate in activities on our website</li>
            <li>Contact us</li>
          </ul>
          <p>
            Personal information may include your name, email address, phone number, resume information, employment history, and other information relevant to job applications and referrals.
          </p>
          
          <h3 className="text-lg font-semibold mt-6 mb-2">Derivative Information</h3>
          <p>
            Our servers automatically collect information when you access our website, such as your IP address, browser type, operating system, access times, and the pages you have viewed on our site.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">How We Use Your Information</h2>
          <p>We may use the information we collect from you to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Facilitate account creation and the login process</li>
            <li>Connect you with potential referrers or job candidates</li>
            <li>Send you service and administrative emails</li>
            <li>Respond to your comments or inquiries</li>
            <li>Send you promotional communications about our services</li>
            <li>Improve our website and user experience</li>
            <li>Protect our services, users, and enforce our terms</li>
          </ul>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Third-Party Disclosure</h2>
          <p>
            We do not sell or otherwise transfer your personal information to outside parties unless we provide you with advance notice. This does not include website hosting partners and other third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Security Measures</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Your Rights</h2>
          <p>
            You have certain rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>The right to access your personal data</li>
            <li>The right to rectify or update your personal data</li>
            <li>The right to delete your personal data</li>
            <li>The right to restrict processing of your personal data</li>
            <li>The right to data portability</li>
            <li>The right to object to processing</li>
          </ul>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Cookies</h2>
          <p>
            We use cookies to improve your experience on our site, understand site usage, and assist in our marketing efforts. By continuing to use our site, you consent to our cookie policy. For more information, please see our <Link to="/cookie-policy" className="text-brand hover:underline">Cookie Policy</Link>.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className="mb-6">
            privacy@referralhire.com<br />
            123 Main Street<br />
            San Francisco, CA 94105
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

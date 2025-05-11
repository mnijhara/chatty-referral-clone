
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getReferrerById } from "@/utils/placeholderData";
import { useToast } from "@/components/ui/use-toast";

const RequestReferral = () => {
  const { referrerId } = useParams<{ referrerId: string }>();
  const referrer = getReferrerById(referrerId || "");
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    linkedin: "",
    position: "",
    resume: null as File | null,
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit this data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Request Submitted Successfully!",
      description: `Your referral request has been sent to ${referrer?.name}. You'll be notified when they respond.`,
      duration: 5000,
    });
    
    // Redirect to the referrer's profile page after submission
    navigate(`/referrers/${referrerId}`);
  };

  if (!referrer) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Referrer Not Found</h1>
        <p className="mb-6">The referrer you are requesting does not exist.</p>
        <Link to="/referrers">
          <Button>Back to Referrers</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Request a Referral</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Referral Request Form</CardTitle>
                <CardDescription>
                  Complete this form to request a referral from {referrer.name}.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form id="referralForm" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn Profile</Label>
                    <Input
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      placeholder="Enter your LinkedIn profile URL"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position You're Applying For</Label>
                    <Input
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="Enter the position title"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume (PDF)</Label>
                    <Input
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message to Referrer</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Introduce yourself and explain why you'd be a good fit for this position"
                      rows={6}
                      required
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => navigate(-1)}>
                  Cancel
                </Button>
                <Button type="submit" form="referralForm">
                  Submit Request
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Referrer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={referrer.avatar}
                      alt={`${referrer.name}'s profile`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{referrer.name}</h3>
                    <div className="text-sm text-gray-600">{referrer.role}</div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 mr-1">
                      <img
                        src={referrer.companyLogo}
                        alt={`${referrer.company} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <span className="text-sm">{referrer.company}</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    {referrer.successfulReferrals} Successful Referrals
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <div className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Tips for Success</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>Be specific about why you're interested in this company</li>
                    <li>Highlight relevant skills and experience</li>
                    <li>Keep your message concise and professional</li>
                    <li>Make sure your resume is up-to-date</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestReferral;

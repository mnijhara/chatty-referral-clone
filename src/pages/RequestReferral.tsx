
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
      <div className="container mx-auto px-3 py-8 text-center">
        <h1 className="text-2xl font-bold mb-3">Referrer Not Found</h1>
        <p className="mb-4 text-sm">The referrer you are requesting does not exist.</p>
        <Link to="/referrers">
          <Button size="sm">Back to Referrers</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-3 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-5">Request a Referral</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <Card className="shadow-sm">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg">Referral Request Form</CardTitle>
                <CardDescription className="text-xs">
                  Complete this form to request a referral from {referrer.name}.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <form id="referralForm" onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label htmlFor="fullName" className="text-xs">Full Name</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="h-8 text-xs"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-xs">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="h-8 text-xs"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="linkedin" className="text-xs">LinkedIn Profile</Label>
                    <Input
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      placeholder="Enter your LinkedIn profile URL"
                      className="h-8 text-xs"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="position" className="text-xs">Position You're Applying For</Label>
                    <Input
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="Enter the position title"
                      className="h-8 text-xs"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="resume" className="text-xs">Resume (PDF)</Label>
                    <Input
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="h-8 text-xs"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-xs">Message to Referrer</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Introduce yourself and explain why you'd be a good fit for this position"
                      rows={4}
                      className="text-xs"
                      required
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <Button variant="outline" size="sm" onClick={() => navigate(-1)}>
                  Cancel
                </Button>
                <Button type="submit" size="sm" form="referralForm">
                  Submit Request
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card className="shadow-sm">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base">Referrer</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src={referrer.avatar}
                      alt={`${referrer.name}'s profile`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{referrer.name}</h3>
                    <div className="text-xs text-gray-600">{referrer.role}</div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-1.5">
                    <div className="w-3 h-3 mr-1">
                      <img
                        src={referrer.companyLogo}
                        alt={`${referrer.company} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <span className="text-xs">{referrer.company}</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 text-xs">
                    {referrer.successfulReferrals} Successful Referrals
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <div className="mt-3">
              <Card className="shadow-sm">
                <CardContent className="p-3">
                  <h3 className="font-medium text-sm mb-2">Tips for Success</h3>
                  <ul className="text-xs text-gray-600 space-y-1.5">
                    <li className="flex gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1"></div>
                      <span>Be specific about why you're interested in this company</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1"></div>
                      <span>Highlight relevant skills and experience</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1"></div>
                      <span>Keep your message concise and professional</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1"></div>
                      <span>Make sure your resume is up-to-date</span>
                    </li>
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

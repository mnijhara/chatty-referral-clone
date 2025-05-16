
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
import { CheckCircle, Upload, AlertCircle } from "lucide-react";

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
  
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // In a real application, you would submit this data to your backend
      console.log("Form submitted:", formData);
      
      toast({
        title: "Request Submitted Successfully!",
        description: `Your referral request has been sent to ${referrer?.name}. You'll be notified when they respond.`,
        duration: 5000,
      });
      
      // Redirect to the referrer's profile page after submission
      navigate(`/referrers/${referrerId}`);
      setIsSubmitting(false);
    }, 1500);
  };

  if (!referrer) {
    return (
      <div className="py-12 text-center">
        <div className="max-w-md mx-auto">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-3">Referrer Not Found</h1>
          <p className="mb-6 text-gray-600">The referrer you are requesting does not exist or has been removed.</p>
          <Link to="/referrers">
            <Button>Browse All Referrers</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Request a Referral</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <Card className="shadow-sm border-gray-200">
              <CardHeader className="p-6 pb-3">
                <CardTitle className="text-xl">Referral Request Form</CardTitle>
                <CardDescription>
                  Complete this form to request a referral from {referrer.name}.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-3">
                <form id="referralForm" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your full name"
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
                        placeholder="your.email@example.com"
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
                      placeholder="https://linkedin.com/in/yourprofile"
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
                      placeholder="e.g. Senior Software Engineer"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume (PDF)</Label>
                    <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
                      <Input
                        id="resume"
                        name="resume"
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="hidden"
                        required
                      />
                      <label htmlFor="resume" className="flex items-center justify-center gap-2 cursor-pointer">
                        <Upload className="h-5 w-5 text-gray-500" />
                        <span className="text-sm">
                          {formData.resume ? formData.resume.name : "Click to upload your resume"}
                        </span>
                      </label>
                      {formData.resume && (
                        <div className="mt-2 flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-xs text-green-600">File uploaded successfully</span>
                        </div>
                      )}
                      <p className="text-xs text-gray-500 mt-2">
                        Please upload a PDF file, maximum 5MB
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message to Referrer</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Introduce yourself and explain why you'd be a good fit for this position"
                      rows={5}
                      required
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="p-6 pt-2 flex justify-between">
                <Button variant="outline" onClick={() => navigate(-1)}>
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  form="referralForm"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="shadow-sm border-gray-200">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg">Referrer</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={referrer.avatar}
                      alt={`${referrer.name}'s profile`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{referrer.name}</h3>
                    <div className="text-sm text-gray-600">{referrer.role}</div>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 mr-2">
                      <img
                        src={referrer.companyLogo}
                        alt={`${referrer.company} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">{referrer.company}</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    {referrer.successfulReferrals} Successful Referrals
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-gray-200">
              <CardContent className="p-4">
                <h3 className="font-medium text-lg mb-3">Tips for Success</h3>
                <ul className="text-sm text-gray-700 space-y-3">
                  <li className="flex gap-3">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">1</div>
                    <span>Be specific about why you're interested in this company</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">2</div>
                    <span>Highlight relevant skills and experience</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">3</div>
                    <span>Keep your message concise and professional</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">4</div>
                    <span>Make sure your resume is up-to-date and tailored for the position</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestReferral;

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const { toast } = useToast();

  const toggleBillingCycle = () => {
    setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly');
  };

  const handleContactSales = () => {
    // Show toast when contact sales is clicked
    toast({
      title: "Contact request sent",
      description: "Our sales team will contact you shortly.",
      duration: 5000,
    });
  };

  // Customer testimonial data with specific Indian-focused avatars
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      text: "ReferralHire helped me land interviews at top tech companies in Bangalore. The Pro plan was worth every rupee!"
    },
    {
      name: "Raj Patel",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      text: "I connected with referrers from my dream companies in Mumbai and Delhi. Got 3 interviews in my first month!"
    },
    {
      name: "Anika Gupta",
      role: "Data Scientist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      text: "The resume feedback feature alone was worth the subscription. Now working at a top AI company in Hyderabad!"
    }
  ];

  const pricing = {
    free: {
      name: "Free",
      price: {
        monthly: "₹0",
        annual: "₹0",
      },
      description: "Basic access to start your job search",
      features: [
        "Browse companies and referrers",
        "5 referral requests per month",
        "Basic profile",
        "Email support",
      ],
      cta: "Get Started",
      popular: false,
    },
    pro: {
      name: "Pro",
      price: {
        monthly: "₹1,999",
        annual: "₹1,299",
      },
      description: "Everything you need for serious job seekers",
      features: [
        "Unlimited referral requests",
        "Priority matching with referrers",
        "Enhanced profile with portfolio",
        "Application tracking dashboard",
        "Resume review feedback",
        "Priority email support",
      ],
      cta: "Subscribe",
      popular: true,
    },
    enterprise: {
      name: "Enterprise",
      price: {
        monthly: "₹6,999",
        annual: "₹5,499",
      },
      description: "Premium service for professionals",
      features: [
        "All Pro features included",
        "Dedicated referral coach",
        "Mock interviews with industry experts",
        "Career strategy sessions",
        "Executive profile placement",
        "24/7 priority support",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Transparent Pricing
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Choose the plan that fits your needs. Start with our free tier or upgrade for premium features.
          </p>
          
          {/* Enhanced Billing toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/20 max-w-xs mx-auto">
            <span className={`text-sm transition-all duration-300 ${billingCycle === 'monthly' ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={toggleBillingCycle}
              className="relative inline-flex h-7 w-12 items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <span className="sr-only">Toggle billing cycle</span>
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
                  billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <div className="flex items-center">
              <span className={`text-sm transition-all duration-300 ${billingCycle === 'annual' ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
                Annual
              </span>
              <span className="ml-2 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">
                Save 33%
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Customer Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Trusted by Professionals Across India
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const fallbackUrl = `https://ui-avatars.com/api/?name=${testimonial.name.split(' ').map(n => n[0]).join('')}&background=f3f4f6&color=6366f1&size=150`;
              
              return (
                <div key={index} className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="relative">
                      <img 
                        src={testimonial.image} 
                        alt={`${testimonial.name} testimonial`} 
                        className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-gradient-to-r from-blue-400 to-purple-400 shadow-md"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = fallbackUrl;
                        }}
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-blue-600 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Free Plan */}
          <Card className="flex flex-col bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle>{pricing.free.name}</CardTitle>
              <div className="mt-4 flex items-baseline text-3xl font-extrabold">
                {pricing.free.price[billingCycle]}
                <span className="ml-1 text-xl font-medium text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
              <CardDescription className="mt-2">{pricing.free.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {pricing.free.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link to="/signup" className="w-full">
                <Button variant="outline" className="w-full">
                  {pricing.free.cta}
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="flex flex-col relative border-2 border-blue-500 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 scale-105">
            {pricing.pro.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg">
                  ⭐ Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle>{pricing.pro.name}</CardTitle>
              <div className="mt-4 flex items-baseline text-3xl font-extrabold">
                {pricing.pro.price[billingCycle]}
                <span className="ml-1 text-xl font-medium text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
              <CardDescription className="mt-2">{pricing.pro.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {pricing.pro.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link to="/signup" className="w-full">
                <Button className="w-full">
                  {pricing.pro.cta}
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="flex flex-col bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle>{pricing.enterprise.name}</CardTitle>
              <div className="mt-4 flex items-baseline text-3xl font-extrabold">
                {pricing.enterprise.price[billingCycle]}
                <span className="ml-1 text-xl font-medium text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
              <CardDescription className="mt-2">{pricing.enterprise.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {pricing.enterprise.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button variant="outline" className="w-full" onClick={handleContactSales}>
                {pricing.enterprise.cta}
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Enhanced FAQ */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
              <h3 className="font-semibold mb-3 text-gray-900">Can I upgrade or downgrade my plan later?</h3>
              <p className="text-gray-600 leading-relaxed">
                Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the beginning of your next billing cycle.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
              <h3 className="font-semibold mb-3 text-gray-900">Are there any hidden fees?</h3>
              <p className="text-gray-600 leading-relaxed">
                No hidden fees. The price you see is what you pay. All taxes will be calculated and shown at checkout.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
              <h3 className="font-semibold mb-3 text-gray-900">What payment methods do you accept?</h3>
              <p className="text-gray-600 leading-relaxed">
                We accept all major credit cards, UPI, Net Banking, and popular Indian wallets like Paytm and PhonePe.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
              <h3 className="font-semibold mb-3 text-gray-900">Do you offer refunds?</h3>
              <p className="text-gray-600 leading-relaxed">
                We offer a 14-day money-back guarantee for all paid plans if you're not satisfied with our service.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Enterprise Contact */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 p-12 rounded-2xl shadow-2xl" id="contact">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Need a custom solution?</h2>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              Contact our sales team to create a custom plan tailored to your specific requirements.
            </p>
            <Button 
              size="lg" 
              onClick={handleContactSales}
              className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-8 py-3"
            >
              Contact Sales Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

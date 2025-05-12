
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
      image: "https://xsgames.co/randomusers/assets/avatars/female/40.jpg",
      gender: "female",
      text: "ReferralHire helped me land interviews at top tech companies in Bangalore. The Pro plan was worth every rupee!"
    },
    {
      name: "Raj Patel",
      role: "Product Manager",
      image: "https://xsgames.co/randomusers/assets/avatars/male/40.jpg",
      gender: "male",
      text: "I connected with referrers from my dream companies in Mumbai and Delhi. Got 3 interviews in my first month!"
    },
    {
      name: "Anika Gupta",
      role: "Data Scientist",
      image: "https://xsgames.co/randomusers/assets/avatars/female/42.jpg",
      gender: "female",
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
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Start with our free tier or upgrade for premium features.
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-brand font-medium' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={toggleBillingCycle}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
            >
              <span className="sr-only">Toggle billing cycle</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <div className="flex items-center">
              <span className={`text-sm ${billingCycle === 'annual' ? 'text-brand font-medium' : 'text-gray-500'}`}>
                Annual
              </span>
              <span className="ml-2 text-xs font-medium text-green-500 bg-green-50 px-2 py-0.5 rounded-full">
                Save 33%
              </span>
            </div>
          </div>
        </div>

        {/* Customer Testimonials with Indian customers */}
        <div className="mb-16">
          <h2 className="text-xl font-bold mb-6 text-center">Trusted by Professionals Across India</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              // Generate gender-specific fallback URLs
              const fallbackUrl = `https://ui-avatars.com/api/?name=${testimonial.name.split(' ').map(n => n[0]).join('')}&background=f3f4f6&color=6366f1&size=150`;
              
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name} testimonial`} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = fallbackUrl;
                      }}
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "{testimonial.text}"
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <Card className="flex flex-col">
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
          <Card className="flex flex-col relative border-brand shadow-lg">
            {pricing.pro.popular && (
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
                <span className="bg-brand text-white text-xs px-3 py-1 rounded-full font-medium">
                  Most Popular
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
          <Card className="flex flex-col">
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

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="font-semibold mb-2">Can I upgrade or downgrade my plan later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the beginning of your next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Are there any hidden fees?</h3>
              <p className="text-gray-600">
                No hidden fees. The price you see is what you pay. All taxes will be calculated and shown at checkout.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, UPI, Net Banking, and popular Indian wallets like Paytm and PhonePe.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">
                We offer a 14-day money-back guarantee for all paid plans if you're not satisfied with our service.
              </p>
            </div>
          </div>
        </div>

        {/* Enterprise Contact */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-blue-50 p-10 rounded-lg" id="contact">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
            <p className="text-gray-600 mb-6">
              Contact our sales team to create a custom plan tailored to your specific requirements.
            </p>
            <Button size="lg" onClick={handleContactSales}>Contact Sales</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

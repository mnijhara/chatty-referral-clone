
-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user',
  company TEXT,
  job_title TEXT,
  experience_years INTEGER,
  skills TEXT[],
  bio TEXT,
  linkedin_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create companies table
CREATE TABLE public.companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  industry TEXT,
  size TEXT,
  location TEXT,
  description TEXT,
  website_url TEXT,
  logo_url TEXT,
  hiring_status BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create referrers table
CREATE TABLE public.referrers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
  department TEXT,
  seniority_level TEXT,
  successful_referrals INTEGER DEFAULT 0,
  rating DECIMAL(2,1) DEFAULT 5.0,
  is_active BOOLEAN DEFAULT true,
  referral_fee DECIMAL(10,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create referrals table
CREATE TABLE public.referrals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_id UUID REFERENCES public.referrers(id) ON DELETE CASCADE,
  candidate_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
  job_title TEXT NOT NULL,
  job_description TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'interview', 'hired', 'rejected')),
  referral_fee DECIMAL(10,2),
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'cancelled')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create payments table
CREATE TABLE public.payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referral_id UUID REFERENCES public.referrals(id) ON DELETE CASCADE,
  referrer_id UUID REFERENCES public.referrers(id) ON DELETE CASCADE,
  amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'cancelled')),
  payment_method TEXT,
  upi_id TEXT,
  transaction_id TEXT,
  processed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referrers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view all profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- RLS Policies for companies
CREATE POLICY "Anyone can view companies" ON public.companies FOR SELECT USING (true);

-- RLS Policies for referrers
CREATE POLICY "Anyone can view active referrers" ON public.referrers FOR SELECT USING (is_active = true);
CREATE POLICY "Users can manage own referrer profile" ON public.referrers FOR ALL USING (user_id = auth.uid());

-- RLS Policies for referrals
CREATE POLICY "Users can view own referrals" ON public.referrals FOR SELECT USING (
  referrer_id IN (SELECT id FROM public.referrers WHERE user_id = auth.uid()) OR
  candidate_id = auth.uid()
);
CREATE POLICY "Referrers can create referrals" ON public.referrals FOR INSERT WITH CHECK (
  referrer_id IN (SELECT id FROM public.referrers WHERE user_id = auth.uid())
);
CREATE POLICY "Users can update own referrals" ON public.referrals FOR UPDATE USING (
  referrer_id IN (SELECT id FROM public.referrers WHERE user_id = auth.uid()) OR
  candidate_id = auth.uid()
);

-- RLS Policies for payments
CREATE POLICY "Users can view own payments" ON public.payments FOR SELECT USING (
  referrer_id IN (SELECT id FROM public.referrers WHERE user_id = auth.uid())
);

-- Function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name', NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert sample companies
INSERT INTO public.companies (name, industry, size, location, description, hiring_status) VALUES
('Google', 'Technology', '100,000+', 'Mountain View, CA', 'Search engine and technology company', true),
('Microsoft', 'Technology', '100,000+', 'Redmond, WA', 'Software and cloud services', true),
('Amazon', 'E-commerce/Cloud', '100,000+', 'Seattle, WA', 'E-commerce and cloud computing', true),
('Apple', 'Technology', '50,000-100,000', 'Cupertino, CA', 'Consumer electronics and software', true),
('Meta', 'Social Media', '50,000-100,000', 'Menlo Park, CA', 'Social networking and VR', true),
('Netflix', 'Entertainment', '10,000-50,000', 'Los Gatos, CA', 'Streaming entertainment', true),
('Uber', 'Transportation', '10,000-50,000', 'San Francisco, CA', 'Ride-sharing and delivery', true),
('Airbnb', 'Travel', '5,000-10,000', 'San Francisco, CA', 'Home-sharing platform', true),
('Spotify', 'Music/Entertainment', '5,000-10,000', 'Stockholm, Sweden', 'Music streaming service', true),
('Tesla', 'Automotive', '50,000-100,000', 'Austin, TX', 'Electric vehicles and energy', true),
('TCS', 'IT Services', '100,000+', 'Mumbai, India', 'IT services and consulting', true),
('Infosys', 'IT Services', '100,000+', 'Bangalore, India', 'IT services and consulting', true),
('Wipro', 'IT Services', '100,000+', 'Bangalore, India', 'IT services and consulting', true),
('Accenture', 'Consulting', '100,000+', 'Dublin, Ireland', 'Management consulting and services', true),
('Deloitte', 'Consulting', '100,000+', 'London, UK', 'Professional services', true);

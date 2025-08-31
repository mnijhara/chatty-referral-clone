import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useUserProfile, useUserReferrals, useReferrerProfile, useCreateReferrerProfile } from "@/hooks/useSupabaseData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  Building,
  Plus,
  UserPlus
} from "lucide-react";
import { Link } from "react-router-dom";

const NewDashboard = () => {
  const { user, loading } = useAuth();
  const { data: profile, isLoading: profileLoading } = useUserProfile();
  const { data: referrals, isLoading: referralsLoading } = useUserReferrals();
  const { data: referrerProfile, isLoading: referrerLoading } = useReferrerProfile();
  const createReferrerProfile = useCreateReferrerProfile();
  
  const [userRole, setUserRole] = useState<'seeker' | 'referrer'>('seeker');

  useEffect(() => {
    if (referrerProfile) {
      setUserRole('referrer');
    }
  }, [referrerProfile]);

  if (loading || profileLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleBecomeReferrer = async () => {
    // This would open a modal or navigate to a form to become a referrer
    // For now, let's create a basic referrer profile
    createReferrerProfile.mutate({
      company_id: null, // Would be selected in a proper form
      department: 'Engineering',
      seniority_level: 'Senior',
      referral_fee: 1000,
    });
  };

  const renderReferrerDashboard = () => {
    const totalReferrals = referrals?.length || 0;
    const pendingReferrals = referrals?.filter(r => r.status === 'pending').length || 0;
    const successfulReferrals = referrals?.filter(r => r.status === 'hired').length || 0;
    const totalEarnings = referrals?.filter(r => r.payment_status === 'paid')
      .reduce((sum, r) => sum + (r.referral_fee || 0), 0) || 0;

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Referrer Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {profile?.full_name || user.email}
            </p>
          </div>
          <Avatar className="h-16 w-16">
            <AvatarImage src={profile?.avatar_url || undefined} />
            <AvatarFallback>
              {profile?.full_name?.[0] || user.email?.[0]?.toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalReferrals}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingReferrals}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Successful Hires</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{successfulReferrals}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalEarnings.toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="referrals" className="space-y-4">
          <TabsList>
            <TabsTrigger value="referrals">My Referrals</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
          <TabsContent value="referrals" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Referrals</CardTitle>
                <CardDescription>
                  Track your referral requests and their progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                {referralsLoading ? (
                  <div className="text-center py-4">Loading referrals...</div>
                ) : referrals?.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">No referrals yet</p>
                    <Link to="/jobs">
                      <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Start Referring
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {referrals?.map((referral) => (
                      <div key={referral.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{referral.job_title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {referral.companies?.name}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={referral.status === 'hired' ? 'default' : 'secondary'}>
                            {referral.status}
                          </Badge>
                          <span className="text-sm font-medium">
                            ${referral.referral_fee || 0}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Referrer Profile</CardTitle>
                <CardDescription>
                  Manage your referrer information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Company</label>
                    <p>{referrerProfile?.companies?.name || 'Not set'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Department</label>
                    <p>{referrerProfile?.department || 'Not set'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Seniority Level</label>
                    <p>{referrerProfile?.seniority_level || 'Not set'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Referral Fee</label>
                    <p>${referrerProfile?.referral_fee || 0}</p>
                  </div>
                  <Button>Edit Profile</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  };

  const renderSeekerDashboard = () => {
    const totalApplications = referrals?.length || 0;
    const underReview = referrals?.filter(r => r.status === 'pending').length || 0;
    const interviews = referrals?.filter(r => r.status === 'interview').length || 0;
    const offers = referrals?.filter(r => r.status === 'hired').length || 0;

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Job Seeker Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {profile?.full_name || user.email}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button onClick={handleBecomeReferrer} variant="outline">
              <UserPlus className="mr-2 h-4 w-4" />
              Become a Referrer
            </Button>
            <Avatar className="h-16 w-16">
              <AvatarImage src={profile?.avatar_url || undefined} />
              <AvatarFallback>
                {profile?.full_name?.[0] || user.email?.[0]?.toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalApplications}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Under Review</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{underReview}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Interviews</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{interviews}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Offers</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{offers}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Applications</CardTitle>
              <CardDescription>
                Track your referral requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              {referralsLoading ? (
                <div className="text-center py-4">Loading applications...</div>
              ) : referrals?.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">No applications yet</p>
                  <Link to="/companies">
                    <Button>
                      <Building className="mr-2 h-4 w-4" />
                      Browse Companies
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {referrals?.slice(0, 3).map((referral) => (
                    <div key={referral.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{referral.job_title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {referral.companies?.name}
                        </p>
                      </div>
                      <Badge variant={referral.status === 'hired' ? 'default' : 'secondary'}>
                        {referral.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Explore opportunities and connect with referrers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/companies">
                <Button variant="outline" className="w-full justify-start">
                  <Building className="mr-2 h-4 w-4" />
                  Browse Companies
                </Button>
              </Link>
              <Link to="/referrers">
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Find Referrers
                </Button>
              </Link>
              <Link to="/jobs">
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  View Jobs
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {userRole === 'referrer' ? renderReferrerDashboard() : renderSeekerDashboard()}
    </div>
  );
};

export default NewDashboard;
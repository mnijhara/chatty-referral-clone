import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { toast } from '@/components/ui/use-toast';

// Companies data hook
export const useCompanies = () => {
  return useQuery({
    queryKey: ['companies'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('companies')
        .select('*')
        .eq('hiring_status', true)
        .order('name');
      
      if (error) throw error;
      return data;
    },
  });
};

// Referrers data hook
export const useReferrers = () => {
  return useQuery({
    queryKey: ['referrers'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('referrers')
        .select(`
          *,
          profiles (
            id,
            full_name,
            avatar_url,
            linkedin_url
          ),
          companies (
            id,
            name,
            logo_url,
            industry
          )
        `)
        .eq('is_active', true)
        .order('successful_referrals', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });
};

// User profile hook
export const useUserProfile = () => {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      if (!user) throw new Error('No user');
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });
};

// User referrals hook
export const useUserReferrals = () => {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ['referrals', user?.id],
    queryFn: async () => {
      if (!user) throw new Error('No user');
      
      const { data, error } = await supabase
        .from('referrals')
        .select(`
          *,
          companies (name, logo_url),
          referrers!referrals_referrer_id_fkey (
            profiles (full_name)
          )
        `)
        .eq('candidate_id', user.id)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });
};

// Referrer profile hook (for referrers)
export const useReferrerProfile = () => {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ['referrer-profile', user?.id],
    queryFn: async () => {
      if (!user) throw new Error('No user');
      
      const { data, error } = await supabase
        .from('referrers')
        .select(`
          *,
          companies (name, logo_url),
          profiles (full_name, avatar_url)
        `)
        .eq('user_id', user.id)
        .single();
      
      if (error && error.code !== 'PGRST116') throw error;
      return data;
    },
    enabled: !!user,
  });
};

// Update profile mutation
export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  
  return useMutation({
    mutationFn: async (profileData: any) => {
      if (!user) throw new Error('No user');
      
      const { data, error } = await supabase
        .from('profiles')
        .update(profileData)
        .eq('id', user.id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile', user?.id] });
      toast({
        title: "Profile Updated",
        description: "Your profile has been updated successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Update Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

// Create referrer profile mutation
export const useCreateReferrerProfile = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  
  return useMutation({
    mutationFn: async (referrerData: any) => {
      if (!user) throw new Error('No user');
      
      const { data, error } = await supabase
        .from('referrers')
        .insert({
          ...referrerData,
          user_id: user.id,
        })
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['referrer-profile', user?.id] });
      queryClient.invalidateQueries({ queryKey: ['referrers'] });
      toast({
        title: "Referrer Profile Created",
        description: "You can now start accepting referral requests!",
      });
    },
    onError: (error) => {
      toast({
        title: "Creation Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};
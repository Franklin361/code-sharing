import { useToast } from '@/components/ui/toast';
import { RouteNames } from '@/router/main';
import { supabase } from '@/supabase/client';

export const isAuthenticated = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { toast } = useToast();

  if (!session) {
    toast({
      title: 'You must be authenticated to edit your code',
      duration: 2000,
      class: 'toast-error',
    });
    return { name: RouteNames.HOME, replace: true };
  }

  sessionStorage.setItem('userId', session.user.id);
};

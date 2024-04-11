import { useAuthStore } from '@/store/authStore';
import { supabase } from '@/supabase/client';
import { Session } from '@supabase/supabase-js';
import { onMounted, ref } from 'vue';

const useAuth = () => {
  const loading = ref(true);
  const session = ref<Session | null>(null);
  const useAuth = useAuthStore();

  onMounted(() => {
    supabase.auth.getSession().then(({ data }) => {
      console.log('getSession called');
      session.value = data.session;
      if (data.session?.user) {
        useAuth.setUser(data.session.user);
      }
      loading.value = false;
    });

    loading.value = true;
    supabase.auth.onAuthStateChange((_, _session) => {
      console.log('onAuthStateChange called');
      session.value = _session;
      if (_session?.user) useAuth.setUser(_session.user);
      loading.value = false;
    });
  });

  const handleSignOut = async () => {
    loading.value = true;
    await supabase.auth.signOut();
    useAuth.clearUser();
    loading.value = false;
  };

  const handleSignIn = async () => {
    try {
      const signIn = await supabase.auth.signInWithOAuth({
        provider: 'github',
      });

      if (signIn.error) {
        console.log(signIn.error);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleSignOut,
    handleSignIn,
    loading,
    session,
  };
};

export default useAuth;

import { RouteNames } from '@/router/main';
import { useAuthStore } from '@/store/authStore';
import { useCodeStore } from '@/store/mainStore';
import { supabase } from '@/supabase/client';
import { Session } from '@supabase/supabase-js';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const useAuth = () => {
  const loading = ref(true);
  const session = ref<Session | null>(null);
  const useAuth = useAuthStore();
  const useCode = useCodeStore();
  const router = useRouter();

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
    try {
      await supabase.auth.signOut();
      console.log('loggout');
      useAuth.clearUser();
      useCode.clearCodeStore();
      router.push({ name: RouteNames.HOME });
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
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

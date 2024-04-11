import { User } from '@supabase/supabase-js';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth-store', () => {
  const user = ref<User | null>(null);

  const setUser = (newUser: User) => {
    user.value = newUser;
  };

  const clearUser = () => {
    user.value = null;
  };

  return {
    user,
    setUser,
    clearUser,
  };
});

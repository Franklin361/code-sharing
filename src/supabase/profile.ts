import { supabase } from '@/supabase/client';
import { Tables } from '@/types/supabase';

export const getProfile = async (id: string) => {
  const response: { data: Tables<'profiles'> | null; error: string } = {
    data: null,
    error: '',
  };

  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('')
      .eq('id', id)
      .single<Tables<'profiles'>>();

    if (error) {
      if (error.code === 'PGRST116') {
        response.error = 'The user does not exist';
      } else {
        response.error = error.message;
      }
    }

    if (data) response.data = data;

    return response;
  } catch (error) {
    console.log(error);
    response.error = (error as Error).message;
    return response;
  }
};

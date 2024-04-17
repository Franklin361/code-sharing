import { useToast } from '@/components/ui/toast';
import { RouteNames } from '@/router/main';
import { useCodeStore } from '@/store/mainStore';
import { supabase } from '@/supabase/client';
import { getCodeById } from '@/supabase/code';
import { RouteLocationNormalized } from 'vue-router';

export const existCodeItem = async (to: RouteLocationNormalized) => {
  const isEditing = to.name === RouteNames.EDIT_CODE;

  const { toast } = useToast();

  let userId: string = to.params.userId as string;

  if (isEditing) {
    const { data, error } = await supabase.auth.getSession();

    if (!data.session || error) {
      toast({
        title: 'You must be authenticated to edit your code',
        duration: 2000,
        class: 'toast-error',
      });
      return { name: RouteNames.HOME, replace: true };
    }

    userId = data.session.user.id;

    sessionStorage.removeItem('userId');
  }

  const useCode = useCodeStore();

  const codeId = +to.params.id;
  const response = await getCodeById({
    codeId,
    userId,
  });

  console.log({ userId, isEditing, response });
  if (!response.data || response.error) {
    toast({
      title: response.error,
      duration: 2000,
      class: 'toast-error',
    });
    return { name: RouteNames.HOME, replace: true };
  }

  useCode.onSelectLanguage(response.data.language);
  useCode.onSelectTheme(response.data.theme);
  useCode.onUpdateCode(response.data.code);
  useCode.onUpdateDescription(response.data.description || '');
};

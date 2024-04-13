import { useToast } from '@/components/ui/toast';
import { RouteNames } from '@/router/main';
import { useCodeStore } from '@/store/mainStore';
import { getCodeById } from '@/supabase/code';
import { RouteLocationNormalized } from 'vue-router';

export const existCodeItem = async (to: RouteLocationNormalized) => {
  const { toast } = useToast();
  const useCode = useCodeStore();
  const codeId = +to.params.id;
  const response = await getCodeById({
    codeId,
    userId: sessionStorage.getItem('userId')!,
  });

  sessionStorage.removeItem('userId');

  if (response.error) {
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

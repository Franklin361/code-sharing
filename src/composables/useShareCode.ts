import { RouteNames } from '@/router/main';
import { Code } from '@/types/code';
import { useRouter } from 'vue-router';

export const useShareCode = () => {
  const router = useRouter();

  const handleShare = (props: Omit<Code, 'id'>) => {
    if (!props.code) {
      return;
    }

    router.push({
      name: RouteNames.SHARING_ANON_CODE,
      query: {
        language: props.language,
        theme: props.theme,
        description: props.description,
        code: props.code,
      },
    });
  };

  return handleShare;
};

import { RouteNames } from '@/router/main';
import { Code } from '@/types/code';
import { useRouter } from 'vue-router';

export const useShareCode = () => {
  const router = useRouter();

  const handleShare = (props: Omit<Code, 'id'>) => {
    router.push({
      name: RouteNames.SHARING_CODE,
      params: {
        code: props.code,
      },
      query: {
        lang: props.language,
        theme: props.theme,
        description: props.description,
      },
    });
  };

  return handleShare;
};

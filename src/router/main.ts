import { useToast } from '@/components/ui/toast';
import { useCodeStore } from '@/store/mainStore';
import { supabase } from '@/supabase/client';
import { getCodeById } from '@/supabase/code';
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

export enum RouteNames {
  HOME = 'home',
  EDITOR = 'editor',
  SHARING_CODE = 'sharing-code-preview',
  EDIT_CODE = 'edit-code',
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue'),
    name: RouteNames.HOME,
  },
  {
    path: '/editor',
    component: () => import('@/views/EditorView.vue'),
    name: RouteNames.EDITOR,
    children: [
      {
        path: ':id',
        component: () => import('@/views/EditorView.vue'),
        name: RouteNames.EDIT_CODE,
        beforeEnter: async (to) => {
          // TODO - REFACTOR: separate guards "session" and "existCodeItem"
          const {
            data: { session },
          } = await supabase.auth.getSession();
          const useCode = useCodeStore();

          const { toast } = useToast();

          if (!session) {
            toast({
              title: 'You must be authenticated to edit your code',
              duration: 2000,
              class: 'toast-error',
            });
            return { name: RouteNames.HOME, replace: true };
          }

          const codeId = +to.params.id;
          const response = await getCodeById({
            codeId,
            userId: session.user.id,
          });

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
        },
      },
    ],
  },
  {
    path: '/instant-sharing/:code',
    component: () => import('@/views/SharedInstantCodeView.vue'),
    name: RouteNames.SHARING_CODE,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

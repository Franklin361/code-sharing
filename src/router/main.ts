import { useCodeStore } from '@/store/mainStore';
import { RouteRecordRaw, createWebHistory, createRouter } from 'vue-router';

export enum RouteNames {
  HOME = 'home',
  EDITOR = 'editor',
  SHARING_CODE = 'sharing-code-preview',
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
    props: (to) => {
      if (to.query?.id) {
        const store = useCodeStore();
        const itemSelected = store.codeList?.find(
          (item) => item.id === to.query.id
        );
        return {
          item: itemSelected,
        };
      }
    },
  },
  {
    path: '/sharing/:code',
    component: () => import('@/views/SharingCodeView.vue'),
    name: RouteNames.SHARING_CODE,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import { propsEditView } from '@/router/props';

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
    props: propsEditView,
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

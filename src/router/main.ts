import { propsEditView } from '@/router/props';
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

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
    component: () => import('@/views/SharedInstantCodeView.vue'),
    name: RouteNames.SHARING_CODE,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

import { existCodeItem, isAuthenticated } from '@/router/guards';

export enum RouteNames {
  HOME = 'home',
  EDITOR = 'editor',
  SHARING_ANON_CODE = 'sharing-anon-code',
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
        beforeEnter: [isAuthenticated, existCodeItem],
      },
    ],
  },
  {
    path: '/instant-sharing',
    component: () => import('@/views/SharedInstantCodeView.vue'),
    name: RouteNames.SHARING_ANON_CODE,
  },
  {
    path: '/sharing/:userId/:id',
    component: () => import('@/views/SharingCodeView.vue'),
    name: RouteNames.SHARING_CODE,
    beforeEnter: [existCodeItem],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: RouteNames.HOME, replace: true },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

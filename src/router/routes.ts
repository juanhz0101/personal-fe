import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'experience',
        component: () => import('pages/experiences/AllPage.vue'),
      },
      {
        path: 'certifications',
        component: () => import('pages/certifications/AllPage.vue'),
      },
      {
        path: 'projects',
        component: () => import('pages/projects/AllPage.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

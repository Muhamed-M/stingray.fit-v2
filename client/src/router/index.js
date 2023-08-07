import { createRouter, createWebHistory } from 'vue-router';
import AuthRoutes from './authRoutes';
import AdminRoutes from './adminRoutes';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/maintenance/error/Error404.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/layouts/stacked-layout/StackedLayout.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/views/home-page/HomeView.vue'),
        },
      ],
    },
    {
      path: '/policies',
      name: 'policies',
      component: () => import('@/views/policies/index.vue'),
      children: [
        {
          path: 'terms',
          component: () => import('@/views/policies/components/Terms.vue'),
        },
        {
          path: 'privacy',
          component: () => import('@/views/policies/components/Privacy.vue'),
        },
        {
          path: 'security-capabilities',
          component: () => import('@/views/policies/components/Security.vue'),
        },
      ],
    },
    AuthRoutes,
    AdminRoutes,
  ],
});

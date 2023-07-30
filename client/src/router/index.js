import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/store/auth';

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
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/layouts/blank/BlankLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/authentication/Login.vue'),
        },
      ],
      // if user is authenticated prevent from reaching auth page
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        if (authStore.user) {
          next('/admin');
        } else {
          next();
        }
      },
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/layouts/sidebar-layout/SidebarLayout.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/views/admin/Dashboard.vue'),
        },
        {
          path: 'enrollments',
          name: 'enrollments',
          component: () => import('@/views/admin/Enrollments.vue'),
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import('@/views/admin/AdminPageSettings.vue'),
        },
      ],
      // if user is not authenticated redirect to auth page
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        if (!authStore.user || !authStore.user.token) {
          next('/auth/login');
        } else {
          next();
        }
      },
    },
  ],
});

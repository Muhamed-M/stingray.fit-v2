import { useAuthStore } from '@/store/auth';

const AuthRoutes = {
  path: '/auth',
  component: () => import('@/layouts/blank/BlankLayout.vue'),
  meta: {
    requiresAuth: false,
  },
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
};

export default AuthRoutes;

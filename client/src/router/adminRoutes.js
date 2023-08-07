import { useAuthStore } from '@/store/auth';

const AdminRoutes = {
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
};

export default AdminRoutes;

import { createRouter, createWebHistory } from 'vue-router';
import { useStore } from '@/store/index';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home-page/HomeView.vue')
    },
    {
        path: '/admin/auth',
        name: 'admin-auth',
        component: () => import('../views/authentication/AuthView.vue'),
        // if user is authenticated prevent from reaching auth page
        beforeEnter: (to, from, next) => {
            const store = useStore();
            if (store.admin) {
                next('/admin');
            } else {
                next();
            }
        }
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('../views/admin/AdminView.vue'),
        children: [
            {
                path: '',
                name: 'page-settings',
                component: () => import('../views/admin/AdminPageSettingsView.vue')
            },
            {
                path: 'blogs',
                component: () => import('../views/admin/AdminBlogsView.vue')
            }
        ],
        // if user is not authenticated redirect to auth page
        beforeEnter: (to, from, next) => {
            const store = useStore();
            if (!store.admin || !store.admin.token) {
                next('/admin/auth');
            } else {
                next();
            }
        }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;

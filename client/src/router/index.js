import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

const routes = [
    {
        path: '/',
        name: 'home',
        component: import('../views/HomeView.vue'),
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('../views/AdminView.vue'),
        // if user is not authenticated redirect to auth page
        beforeEnter: (to, from, next) => {
            if (!store.state.admin || !store.state.admin.token) {
                next('/admin/auth');
            } else {
                next();
            }
        },
    },
    {
        path: '/admin/auth',
        name: 'admin-auth',
        component: () => import('../views/AuthView.vue'),
        // if user is authenticated prevent from reaching auth page
        beforeEnter: (to, from, next) => {
            if (store.state.admin) {
                next('/admin');
            } else {
                next();
            }
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

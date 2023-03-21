import { createRouter, createWebHistory } from 'vue-router';
import { useStore } from '@/store/index';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/home-page/HomeView.vue')
        },
        {
            path: '/policies',
            name: 'policies',
            component: () => import('@/views/policies/index.vue'),
            children: [
                {
                    path: 'terms',
                    component: () => import('@/views/policies/components/Terms.vue')
                },
                {
                    path: 'privacy',
                    component: () => import('@/views/policies/components/Privacy.vue')
                },
                {
                    path: 'security-capabilities',
                    component: () => import('@/views/policies/components/Security.vue')
                }
            ]
        },
        {
            path: '/admin/auth',
            name: 'admin-auth',
            component: () => import('@/views/authentication/AuthView.vue'),
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
            component: () => import('@/views/admin/AdminView.vue'),
            children: [
                {
                    path: '',
                    name: 'page-settings',
                    component: () => import('@/views/admin/AdminPageSettingsView.vue')
                },
                {
                    path: 'blogs',
                    component: () => import('@/views/admin/AdminBlogsView.vue')
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
    ]
});

import NotFound from '@/components/NotFound.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import UserPage from '@/views/UserPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/MainPage.vue'),
      meta: {
        layout: MainLayout,
        breadcrumbs: [{ name: 'main', routeName: 'home' }],
      },
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('@/views/PostPage.vue'),
      meta: {
        layout: MainLayout,
        breadcrumbs: [
          { name: 'main', routeName: 'home' },
          { name: 'posts', routeName: 'posts' },
        ],
      },
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/UsersPage.vue'),
      meta: {
        layout: MainLayout,
        breadcrumbs: [
          { name: 'main', routeName: 'home' },
          { name: 'users', routeName: 'users' },
        ],
      },
    },
    {
      path: '/users/:userId',
      name: 'user',
      component: () => import('@/views/UserPage.vue'),
      meta: {
        layout: MainLayout,
        breadcrumbs: [
          { name: 'main', routeName: 'home' },
          { name: 'users', routeName: 'users' },
        ],
      },
      children: [
        {
          path: 'profile',
          component: UserPage,
        },
      ],
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  ],
});

export default router;

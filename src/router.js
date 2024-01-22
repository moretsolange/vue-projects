import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/ProjectsList' },

    { path: '/:notFound(.*)', component: ProjectsList },
  ],
});

export default router;

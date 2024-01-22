import { createRouter, createWebHistory } from 'vue-router';
import ProjectsList from './components/main/ProjectsList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: './components/main/ProjectsList.vue' },

    { path: '/:notFound(.*)', component: ProjectsList },
  ],
});

export default router;

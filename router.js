import { createRouter, createWebHistory } from 'vue-router';
import Work from './components/Work.vue';
import About from './components/About.vue';

const routes = [
  {
    path: '/',
    name: 'Work',
    component: Work
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
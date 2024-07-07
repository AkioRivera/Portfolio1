import { createRouter, createWebHistory } from 'vue-router';
import About from './components/About.vue';
import Work from './components/Work.vue';
import Skill from './components/Skill.vue';

const routes = [

  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/skill',
    name: 'Skill',
    component: Skill
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

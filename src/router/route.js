import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/pages/Index.vue';
import Tags from '../components/Tags/Tags.vue';
import ToDo from '../components/Kanban/ToDo.vue';
import SplitBill from '../components/Payments/SplitBill.vue';

const routes = [
  { path: '/', component: Index},
  { path: '/tags', component: Tags },
  { path: '/todo', component: ToDo },
  { path: '/splitbill', component: SplitBill },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

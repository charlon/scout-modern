import { createWebHistory, createRouter } from "vue-router";

// page components
import Home from '../views/home.vue';
import List from '../views/list.vue';
import Detail from '../views/detail.vue';
import Filter from '../views/filter.vue';

const routes = [
  {
    // redirect to seattle campus by default
    path: "/",
    redirect: "/seattle",
  },
  {
    path: "/:campus",
    name: "Home",
    component: Home
  },
  {
    path: "/:campus/:type",
    name: "List",
    component: List,
    pathToRegexpOptions: { strict: true }
  },
  {
    path: "/:campus/:type/:id",
    name: "Detail",
    component: Detail,
    pathToRegexpOptions: { strict: true }
  },
  {
    path: "/:campus/:type/filter",
    name: "Filter",
    component: Filter,
    pathToRegexpOptions: { strict: true }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

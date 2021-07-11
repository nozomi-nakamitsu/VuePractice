import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Home.vue"),
  },
  {
    path: "/practice",
    name: "Practice",
    component: () => import("../components/GsapPractice.vue"),
  },
  {
    path: "/sample",
    name: "Sample",
    component: () => import("../components/Sample.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import ClientList from "../components/ClientList.vue";

const routes = [
  {
    path: "/clients",
    name: "clients",
    component: ClientList
  }
];

const router = new createRouter({
  history: createWebHistory(),
  routes
});

export default router;

// import Vue from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import ClientList from "../components/ClientList.vue";

// Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "clients",
    component: ClientList
  }
];

const router = new createRouter({
  mode: "history",
  history: createWebHashHistory(),
  routes
});

export default router;

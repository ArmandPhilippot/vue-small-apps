import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import Logout from "./pages/Logout.vue";
import App from "./App.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");

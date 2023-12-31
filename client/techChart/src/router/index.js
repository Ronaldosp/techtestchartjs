import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue"
import LoginPage from "../views/LoginPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (!localStorage.access_token && to.name === "home") {
    next({ name: "login" });
  } 
  //else if(localStorage.access_token&& ){

  // }
  else {
    next();
  }
});

export default router

import { createRouter, createWebHistory } from 'vue-router';
// import SignUp from '../views/SignUpPage';
import LandingPage from '../views/LandingPage.vue';
import CreateTournamentPage from "@/views/CreateTournamentPage.vue";

const routes = [
  {
    path: "/",
    component: LandingPage
  },
  {
    path: '/create-tournament',
    component: CreateTournamentPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

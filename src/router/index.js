import { createRouter, createWebHistory } from 'vue-router';
// import SignUp from '../views/SignUpPage';
import LandingPage from '../views/LandingPage.vue';
import CreateTournamentPage from "@/views/CreateTournamentPage.vue";
import TournamentPage from "@/views/TournamentPage.vue";

const routes = [
  {
    path: "/",
    component: LandingPage
  },
  {
    path: '/create-tournament',
    component: CreateTournamentPage
  },
  {
    path: '/leaderboard',
    component: () => import('../views/LeaderboardPage.vue')
  },
  {
    path: '/tournaments',
    component: () => import('../views/TournamentsPage.vue')
  },
  {
    path: '/tournament',
    component: TournamentPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

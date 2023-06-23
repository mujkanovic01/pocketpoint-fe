import {createRouter, createWebHistory} from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import TournamentPage from "@/views/TournamentPage.vue";
import DashboardPage from "@/views/DashboardPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";

const routes = [
    {
        path: "/",
        component: LandingPage
    },
    {
        path: '/dashboard',
        component: DashboardPage
    },
    {
        path: '/leaderboards',
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
    {
        path: '/profile',
        component: ProfilePage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

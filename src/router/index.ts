import Vue from 'vue'
import VueRouter from 'vue-router'
import accountRoutes from '@/modules/account/account.route';
import leagueRoutes from '@/modules/league/league.route';
import profileRoutes from '@/modules/Profile/profile.route';
import standingsRoutes from '@/modules/standings/standings.route';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'SignIn', component: () => import('@/modules/account/view/SignInView.vue')},
  ...accountRoutes, ...leagueRoutes, ...profileRoutes, ...standingsRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

const leagueRoute = [
    { path: '/league', name: 'league', component: () => import('./view/leagueView.vue') },
    { path: '/createleague', name: 'createleague', component: () => import('./view/createleagueView.vue') },
    { path: '/myleague', name: 'myleague', component: () => import('./view/myleagueView.vue') },
    { path: '/joinleague', name: 'joinleague', component: () => import('./view/joinleagueView.vue') },
    { path: '/successleague', name: 'successleague', component: () => import('./view/successleagueView.vue') }
];

export default leagueRoute;
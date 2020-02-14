const accountRoute = [
    { path: '/signin', name: 'SignIn', component: () => import('./view/SignInView.vue') },
    { path: '/signup', name: 'signUp', component: () => import('./view/SignUpView.vue') },
];

export default accountRoute;
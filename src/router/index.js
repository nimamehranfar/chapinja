import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home'
import SignUp from '@/views/SignUp';
import SignIn from "@/views/SignIn";
import Dashboard from "@/views/Dashboard";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/SignIn',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {path: '*', redirect: '/'
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/','/SignIn','/SignUp'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
        return next('/SignIn');
    }

    next();
});
export default router

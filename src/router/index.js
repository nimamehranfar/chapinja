import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home'
import SignUp from '@/views/SignUp';
import SignIn from "@/views/SignIn";
import WhyChapinja from "@/views/WhyChapinja";
import AboutUs from "@/views/AboutUs";
import Dashboard from "@/views/Dashboard";

Vue.use(VueRouter)

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
    path: '/WhyChapinja',
    name: 'WhyChapinja',
    component: WhyChapinja
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

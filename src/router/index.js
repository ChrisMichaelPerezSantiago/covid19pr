import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ReportByCountries from '../views/ReportByCountries.vue';
import TestsInUs from '../views/TestsInUS';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ReportByCountries',
    name: 'ReportByCountries',
    component: ReportByCountries
  },
  {
    path: '/TestsInUs',
    name: 'TestsInUs',
    component: TestsInUs
  },
  {
    path: '/About',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

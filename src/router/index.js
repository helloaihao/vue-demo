import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Nav from '@/components/Nav';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav,
    },
  ],
});

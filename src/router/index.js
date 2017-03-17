import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Nav from '@/components/Nav';
import demo1 from '@/demo/1';
import demo2 from '@/demo/2';

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
    {
      path: '/demo',
      component: Nav,
      children: [
        {
          path: '1',
          component: demo1,
        },
        {
          path: '2',
          component: demo2,
        },
        {
          path: ':id',
          component: demo1,
        },
      ],
    },
  ],
});

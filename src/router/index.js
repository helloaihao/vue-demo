import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Nav from '@/components/Nav';
import demo1 from '@/demo/1';
import demo2 from '@/demo/2';
import demo3 from '@/demo/3';
import demo4 from '@/demo/4';
import demo5 from '@/demo/5';
import demo6 from '@/demo/6';

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
          path: '3',
          component: demo3,
        },
        {
          path: '4',
          component: demo4,
        },
        {
          path: '5',
          component: demo5,
        },
        {
          path: '6',
          component: demo6,
        },
        {
          path: ':id',
          component: demo1,
        },
      ],
    },
  ],
});

import Vue from 'vue';
import Router from 'vue-router';
import main from '@/main.vue';

import demoNavList from '@/views/demoNavList';
import demo1 from '@/demo/1';
import demo2 from '@/demo/2';
import demo3 from '@/demo/3';
import demo4 from '@/demo/4';
import demo5 from '@/demo/5';
import demo6 from '@/demo/6';

import exampleNavList from '@/views/exampleNavList';
import todoList from '@/example/todoList';
import transitionGroup from '@/example/transitionGroup';
import tree from '@/example/tree';
import todoMVC from '@/example/todoMVC';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: main,
    },
    {
      path: '/demo',
      name: 'demo',
      component: demoNavList,
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
    {
      path: '/example',
      name: 'example',
      component: exampleNavList,
      children: [
        {
          path: 'todoList',
          component: todoList,
        },
        {
          path: 'transitionGroup',
          component: transitionGroup,
        },
        {
          path: 'tree',
          component: tree,
        },
        {
          path: 'todoMVC',
          component: todoMVC,
        },
        {
          path: ':id',
          redirect: 'todoList',
        },
      ],
    },
  ],
});

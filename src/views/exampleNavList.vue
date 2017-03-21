
<template>
  <div>
    <h1>example</h1>
    <NavList :dir="dir"
             :lists="lists">
    </NavList>
    <router-view></router-view>
  </div>
</template>

<script>
import NavList from '@/components/NavList';

export default {
  data() {
    return {
      dir: '/example/',
      lists: [
        'todoList',
        'transitionGroup',
      ],
    };
  },
  components: { NavList },
};
</script>

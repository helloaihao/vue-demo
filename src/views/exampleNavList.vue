
<template>
  <div>
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
      ],
    };
  },
  components: { NavList },
};
</script>


<template>
  <div>
    <h1>demo</h1>
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
      dir: '/demo/',
      lists: [],
    };
  },
  created() {
    const num = 6;

    const arr = Array.from(Array(num), (v, i) => i + 1);

    arr.forEach(i => this.lists.push(i));
  },
  components: { NavList },
};
</script>

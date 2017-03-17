<template>
  <div>
    <nav class="clearfix">
      <router-link class="link" v-for="list in lists" :key="list" :to="'/demo/' + list">
        demo{{list}}
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  .link {
    display: block;
    float: left;
    padding: 0 20px;
  }
</style>

<script>
  export default {
    name: 'nav',
    data() {
      return {
        lists: [],
      };
    },
  
    created() {
      const num = 8;
  
      const arr = Array.from(Array(num), (v, i) => i + 1);
  
      arr.forEach(i => this.lists.push(i));
    },
  };
</script>

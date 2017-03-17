<template>
    <nav class="clearfix">
      <router-link class="link" v-for="list in lists" :key="list" :to="'nav/' + list">
        demo{{list}}
      </router-link>
    </nav>
</template>

<style>
  .link {
    display: block;
    float: left;
    padding: 0 20px;
  }
  
  .clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
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
  
      const arr = Array.from(Array(num), (v, i) => i);
  
      console.log(arr);
  
      arr.forEach(i => this.lists.push(i));
    },
  };
</script>

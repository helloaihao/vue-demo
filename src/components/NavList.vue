<template>
  <div>
    <nav class="clearfix">
      <router-link class="link" v-for="list in lists" :key="list" :to="dir + list">
        {{list}}
      </router-link>
    </nav>
  </div>
</template>

<style scoped>
  .link {
    display: inline-block;
    padding: 20px 20px;
  }
</style>

<script>
  export default {
    name: 'nav',

    props: ['dir', 'lists'],
  };
</script>

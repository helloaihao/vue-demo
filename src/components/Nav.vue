<template>
  <div>
    <nav v-for="list in lists">
      <a v-bind:href="list">demo{{list}}</a>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'nav',
    data () {
      return {
          lists: []
      }
    },
    created () {
      let num = 8;
      for(let i = 0; i < num; i ++) {
        this.lists.push(i);
      }
    }
}
</script>
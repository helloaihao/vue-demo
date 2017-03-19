
<template>  
  <div>
    <span v-if="seen">
      click button show/hide this message.
    </span>
    <button v-on:click="changeStatus">show/hide</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        seen: true,
      };
    },
    methods: {
      changeStatus() {
        this.seen = !this.seen;
      },
    },
  };
</script>

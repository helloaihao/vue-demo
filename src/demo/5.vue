
<template>  
  <div>
    <Hello v-bind:msg="message"></Hello>
  </div>
</template>

<script>
  import Hello from '@/components/Hello';

  export default {
    data() {
      return {
        message: 'hello aihao',
      };
    },
    components: { Hello },
  };
</script>

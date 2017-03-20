<template>
  <div>
    <h1>学习VUE</h1>
    demo: <demoNavList></demoNavList>
    example: <exampleNavList></exampleNavList>
  </div>
</template>

<script>
  import demoNavList from '@/views/demoNavList';
  import exampleNavList from '@/views/exampleNavList';

  export default {
    components: {
      demoNavList,
      exampleNavList,
    },
  };
</script>

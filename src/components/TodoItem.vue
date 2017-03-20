
<template>
  <li>
    <span>{{title}}</span>
    <button @click="$emit('remove')">X</button>
  </li>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<template>
  <ul id="tree">
    <TreeItem :treeRoot="treeData"
              class="item"></TreeItem>
  </ul>
</template>

<style lang="css">
#tree {
  width: 320px;
  margin: 0 auto;
}

.item {
  cursor: pointer;
}

.bold {
  font-weight: bold;
}

ul {
  padding-left: 1em;
  line-height: 1.5em;
}

li {
  text-align: left;
}
</style>

<script>
import TreeItem from '@/components/TreeItem';

const data = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' },
          ],
        },
      ],
    },
  ],
};

export default {
  data() {
    return {
      treeData: data,
    };
  },
  components: { TreeItem },
};
</script>

<template>
  <li>
    <div :class="{bold: isFolder}"
         @click="toggle"
         @dblclick="changeType">
      {{treeRoot.name}}
      <span v-if="isFolder"> [{{isOpen ? '-' : '+'}}]</span>
    </div>
    <ul v-if="isFolder"
        v-show="isOpen">
      <TreeItem v-for="tree in treeRoot.children"
                key="tree"
                :treeRoot="tree">
      </TreeItem>
      <li @click="addChild">+</li>
    </ul>
  </li>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'TreeItem',

  props: {
    treeRoot: Object,
  },

  computed: {
    isFolder() {
      return this.treeRoot.children && this.treeRoot.children.length;
    },
  },

  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },

    changeType() {
      if (!this.treeRoot.children) {
        Vue.set(this.treeRoot, 'children', []);
        this.addChild();
        this.isOpen = true;
      }
    },

    addChild() {
      this.treeRoot.children.push({
        name: 'new children',
      });
    },
  },
};
</script>

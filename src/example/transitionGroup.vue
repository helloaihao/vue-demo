<template>
  <div id="matrix">
    <h1>sudoku demo</h1>
    <button @click="shuffle">打乱</button>
    <transition-group name="cell"
                      tag="div"
                      class="container">
      <div v-for="cell in cells"
           :key="cell.id"
           class="cell">
        {{ cell.number }}
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
#matrix {
  width: 250px;
  margin: 0 auto;
}
.container {
  display: flex;
  flex-wrap: wrap;
  width: 248px;
  margin-top: 10px;
}

.cell {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaa;
  margin-right: -1px;
  margin-bottom: -1px;
}

.cell:nth-child(3n) {
  margin-right: 0;
}

.cell:nth-child(27n) {
  margin-bottom: 0;
}

.cell-move {
  transition: transform 2s;
}
</style>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      cells: Array.from({
        length: 81,
      })
        .map((item, index) => (
          {
            id: index,
            number: (index % 9) + 1,
          }
        )),
    };
  },
  methods: {
    shuffle() {
      this.cells = _.shuffle(this.cells);
    },
  },
};
</script>

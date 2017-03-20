<template>
  <div class="todo-list-content">
    <h1>todo list</h1>
    <p>newTodo:
      <input v-model="newTodo"
             @keyup.enter="addNewTodo">
    </p>
    <ul>
      <li is="todo-item"
          v-for="(todo, index) in todos"
          :title="todo"
          @remove="todos.splice(index, 1)">
      </li>
    </ul>
  </div>
</template>

<style>
  .todo-list-content{
    width: 300px;
    margin: 0 auto;
    text-align: left;
  }
</style>

<script>
import TodoItem from '@/components/TodoItem';

export default {
  data() {
    return {
      newTodo: '',
      todos: [
        'do homework',
        'play game',
        'running',
      ],
    };
  },
  methods: {
    addNewTodo() {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    },
  },
  components: {
    'todo-item': TodoItem,
  },
};
</script>

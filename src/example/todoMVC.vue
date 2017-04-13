<template>
  <div class="todo-list-content">
    <h1>todo list</h1>
    <section>
      <label>select all</label>
      <input type="checkbox" v-model="doneAll">
      <label>newTodo:</label>
      <input v-model="newTodo"
             @keyup.enter="addNewTodo">
    </section>
    <ul>
      <li v-for="(todo, index) in filterTodos">
        <input type="checkbox"
               v-model="todo.completed">
        <span :class="{'completed-text':todo.completed}">{{todo.title}}</span>
        <button @click="todos.splice(index, 1)">X</button>
      </li>
    </ul>
    <footer v-show="todos.length">
      <span class="todo-count">{{todoCount}} item left</span>
      <ul class="todo-status">
        <li :class="{selected: visibility === 'all'}"
            @click="visibility = 'all'">all</li>
        <li :class="{selected: visibility === 'active'}"
            @click="visibility = 'active'">active</li>
        <li :class="{selected: visibility === 'completed'}"
            @click="visibility = 'completed'">completed</li>
      </ul>
      <span class="clear-completed" @click="clearCompleted">clear completed</span>
    </footer>
  </div>
</template>

<style>
.todo-list-content {
  width: 400px;
  margin: 0 auto;
  text-align: left;
}

.completed-text {
  text-decoration: line-through;
}

.todo-status li {
  display: inline-block;
  padding-left: 1em;
  cursor: pointer;
}

.todo-status li.selected {
  color: red;
}

.todo-count {
  float: left;
  line-height: 1.5em;
}

.clear-completed {
  cursor: pointer;
  line-height: 1.5em;
}
</style>

<script>
const filters = {
  all(todos) {
    return todos;
  },

  active(todos) {
    return todos.filter(todo => !todo.completed);
  },

  completed(todos) {
    return todos.filter(todo => todo.completed);
  },
};

let uid = 0;

export default {
  data() {
    return {
      newTodo: '',
      todos: [],
      visibility: 'all',
    };
  },

  computed: {
    filterTodos() {
      return filters[this.visibility](this.todos);
    },

    todoCount() {
      return filters.active(this.todos).length;
    },

    doneAll: {
      get() {
        return this.todoCount === 0;
      },

      set(value) {
        this.todos.forEach(todo => (todo.completed = value));
      },
    },
  },

  methods: {
    addNewTodo() {
      this.todos.push({
        id: uid += 1,
        title: this.newTodo,
        completed: false,
      });
      this.newTodo = '';
    },

    clearCompleted() {
      this.todos = filters.active(this.todos);
    },
  },
};
</script>

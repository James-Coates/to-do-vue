<template>
  <div class="md-layout md-alignment-top-center todo-app">
    <div class="md-layout-item md-size-50 md-small-size-90">
      <h1 class="md-display-3">Todo App</h1>
      <md-field>
        <md-input
          type="text"
          placeholder="Add todo"
          v-model="currentTodo"
          @input="currentTodo = $event.target.value"
          @keydown.enter="addTodo()"
          @click="clearEdit()"
        />
      </md-field>
      <ul class="todo-list">
        <li class="todo-list-item" v-for="todo in todos" :key="todo.id">
          <md-card class="todo-item">
            <div class="container__checkbox">
              <md-checkbox v-model="array" :value="todo.id" @change="toggleTodo(todo)"></md-checkbox>
            </div>
            <div class="container__label" @dblclick="editTodo(todo)">
              <p
                v-if="todo.id !== editedTodoId"
                v-bind:class="{'complete': todo.completed}"
              >{{ todo.label }}</p>
              <md-field v-if="todo.id === editedTodoId">
                <md-input
                  type="text"
                  :placeholder="todo.label"
                  v-model="currentEdit"
                  @keydown.enter="submitEdit(editedTodoId)"
                />
              </md-field>
            </div>

            <div>
              <md-button class="md-icon-button" value="Delete" @click="deleteTodo(todo)">
                <md-icon>delete</md-icon>
              </md-button>
            </div>
          </md-card>
        </li>
      </ul>
      <p class="md-caption">* Double click to edit todo</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      currentTodo: '',
      todoCount: 0,
      editedTodoId: '',
      currentEdit: '',
      array: [],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({id: this.todoCount, label: this.currentTodo, completed: false});
      this.currentTodo = '';
      this.todoCount ++
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed
    },
    deleteTodo(todo) {
      const index = this.todos.indexOf(todo)
      this.todos.splice(index, 1);
    },
    editTodo(todo) {
      this.currentEdit = todo.label;
      this.editedTodoId = todo.id;
    },
    submitEdit(todoId) {
      console.log('submit edit');
      const todo = this.todos.find(todo => todo.id == todoId);
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].label = this.currentEdit;
      this.clearEdit()
    },
    clearEdit() {
      this.editedTodoId = '';
      this.currentEdit = '';
    }
  }
};
</script>

<style>
.todo-app .md-list {
  padding: 0;
}

.todo-list {
  padding: 0;
}

.todo-list-item {
  display: block;
  padding: 0;
  margin-bottom: 5px;
}

.todo-item {
  width: 100%;
  display: flex;
  align-items: center;
}

.container__checkbox {
  width: 60px;
}

.container__label {
  flex: 1 1;
}

.todo-app .md-list-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.todo-item .md-field {
  min-height: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-top: 1px;
  margin: 0;
}

.todo-app .md-checkbox {
  margin: 16px;
}

.todo-app .md-list-item-content {
  padding: 0;
}

.todo-app .hidden {
  display: none;
}

.todo-app .show {
  display: block;
}
.todo-app .md-ripple-wave {
  display: none;
}

.align-v-c {
  align-items: center;
}

.complete {
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.5);
}
</style>

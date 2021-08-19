import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    todos: [
      {
        id: 1,
        taskTitle: "Task 1",
        isChecked: false,
      },
      {
        id: 2,
        taskTitle: "Task 2",
        isChecked: true,
      },
      {
        id: 3,
        taskTitle: "Task 3",
        isChecked: false,
      },
    ],
    btnData: [
      {
        id: 1,
        btnTitle: "All",
        isChecked: true
      },
      {
        id: 2,
        btnTitle: "Active",
        isChecked: false
      },
      {
        id: 3,
        btnTitle: "Complete",
        isChecked: false
      }
    ],
  },
  getters: {
    allTodos: (state) => state.todos,
    sortBtn: (state) => state.btnData,
    todosLength: (state) => state.todos.length,
    todosCompleted: (state) => state.todos.filter((todo) => todo.isChecked).length,
  },
  mutations: {
    addTodo(state, newTodo) {
      if (newTodo) {
        const todo = { id: state.todos.length + 1, taskTitle: newTodo, isChecked: false };
        state.todos.unshift(todo)
      }
    },
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),

  }
});

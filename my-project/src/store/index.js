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
        type: "All",
        isPicked: true
      },
      {
        id: 2,
        type: "Active",
        isPicked: false
      },
      {
        id: 3,
        type: "Complete",
        isPicked: false
      }
    ],
  },
  getters: {
    allTodos(state) { return state.todos },
    sortBtn(state) { return state.btnData },
    todosLength(state) { return state.todos.length },
    todosCompleted(state) {
      return state.todos.filter((todo) => todo.isChecked).length
    },
    showSortBtn(state) {
      switch (state.type) {
        case 'Active': return state.todos.filter((todo) => !todo.isChecked);
        case 'Complete': return state.todos.filter((todo) => todo.isChecked);
        default: return state.todos;

      }
    }
  },
  mutations: {
    addTodo(state, newTodo) {
      if (newTodo) {
        const todo = { id: state.todos.length + 1, taskTitle: newTodo, isChecked: false };
        return state.todos.unshift(todo)
      }
    },
    removeTodo(state, id) {
      return state.todos = state.todos.filter(todo => todo.id !== id)
    },

    changeTodoStatus(state, id) {
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      );
    },

    changeBtnStatus(state, title) {
      state.type = title;
      state.btnData.map((btn) =>
        btn.title === title ? { ...btn, isPicked: !btn.isPicked } : btn
      );
    },
  }
});

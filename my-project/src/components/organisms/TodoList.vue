<template>
  <div :class="$style.main">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :taskTitle="todo.task"
      :isChecked="todo.isChecked"
    />
    <AddTodo />
  </div>
</template>

<script>
import TodoItem from "../molecules/TodoItem";
import AddTodo from "../atoms/AddTodo";

export default {
  data() {
    return {
      todos: [
        {
          id: 1,
          task: "Task 1",
          isChecked: false
        },
        {
          id: 2,
          task: "Task 2",
          isChecked: true
        },
        {
          id: 3,
          task: "Task 3",
          isChecked: false
        }
      ]
    };
  },
  components: {
    TodoItem,
    AddTodo
  }
};
</script>


<style lang="scss" module>
@import "../../assets/styles/styles.scss";
.main {
  background-color: $mainBg;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 1.5em;
}
</style>
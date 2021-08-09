<template>
  <div class="main">
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <AddTodo />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import AddTodo from "./AddTodo.vue";

export default {
  name: "todo-list",
  components: {
    TodoItem,
    AddTodo
  }
};
</script>


<style lang="scss">
@import ".././assets/styles/styles.scss";
.main {
  background-color: $mainBg;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 1.5em;
}
</style>
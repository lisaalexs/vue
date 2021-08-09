<template>
  <div class="footer" id="footer">
    <TodoLeft />
    <div class="tasks_choice_group">
      <AllTasks />
      <ActiveTasks />
      <CompletedTasks />
    </div>
  </div>
</template>

<script>
import TodoLeft from "./TodoLeft.vue";
import AllTasks from "./AllTasks.vue";
import ActiveTasks from "./ActiveTasks.vue";
import CompletedTasks from "./CompletedTasks.vue";

export default {
  name: "todo-list",
  components: {
    TodoLeft,
    AllTasks,
    ActiveTasks,
    CompletedTasks
  }
};
</script>


<style lang="scss">
@import ".././assets/styles/styles.scss";

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $headerFooterBG;
  padding: 0 1.5em;
  color: $footerText;
  font-weight: 600;
  font-size: 1.2rem;
}
</style>
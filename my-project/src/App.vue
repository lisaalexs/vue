<template>
  <div id="wrapper" class="wrapper">
    <Header />
    <div class="main">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <AddTodo />
    </div>
    <div class="footer" id="footer">
      <TodoLeft />
      <div class="tasks_choice_group">
        <AllTasks />
        <ActiveTasks />
        <CompletedTasks />
      </div>
    </div>
  </div>
</template>


<script>
import Header from "./components/Header.vue";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import TodoLeft from "./components/TodoLeft.vue";
import AllTasks from "./components/AllTasks.vue";
import ActiveTasks from "./components/ActiveTasks.vue";
import CompletedTasks from "./components/CompletedTasks.vue";

export default {
  name: "App",
  components: {
    Header,
    TodoItem,
    AddTodo,
    TodoLeft,
    AllTasks,
    ActiveTasks,
    CompletedTasks,
  }
};
</script>


<style lang="scss">
@import "./assets/styles/styles";

body {
  height: 100vh;
  background-image: linear-gradient(
    to right bottom,
    $firstGradient,
    $secondGradient,
    $checkboxBg
  );
  background-position: cover;
  background-repeat: no-repeat;
  position: relative;

  .wrapper {
    width: 80vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;

    .main {
      background-color: $mainBg;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 1.5em;
    }

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

    @media only screen and (min-width: 556px) {
      #footer {
        display: flex;
        flex-direction: row;
      }
      div.tasks_choice_group {
        display: flex;
        flex-direction: row;
      }
    }
    @media only screen and (min-width: 772px) {
      div.wrapper {
        width: 60vw;
      }
    }
    @media only screen and (min-width: 990px) {
      #wrapper {
        width: 50vw;
      }
    }
  }
}
</style>

<template>
  <div id="wrapper" class="wrapper">
    <!-- <HelloWorld msg="Todo list" /> -->
    <div class="header">to do list</div>
    <div class="main">
      <div class="todo-item">
        <div class="group">
          <input type="checkbox" class="custom-checkbox" checked />
          <label for="task">Task 1</label>
        </div>
        <div class="close"></div>
      </div>
      <div class="todo-item">
        <div class="group">
          <input type="checkbox" class="custom-checkbox" />
          <label for="task">Task 2</label>
        </div>
        <div class="close"></div>
      </div>
      <div class="todo-item">
        <div class="group">
          <input type="checkbox" class="custom-checkbox" />
          <label for="task">Task 3</label>
        </div>
        <div class="close"></div>
      </div>
      <input class="add-todo" value="Add a new task" />
    </div>
    <div class="footer">
      <p>1/3 left</p>
      <div class="tasks-choice">
        <input type="button" value="All" class="all-tasks-btn" />
        <input type="button" value="Active" class="active-btn" />
        <input type="button" value="Completed" class="completed-btn" />
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  height: 100vh;
  background-image: linear-gradient(to right bottom, #ff7e5f, #ffa665, #feb567);
  background-position: cover;
  background-repeat: no-repeat;
  position: relative;
  font-family: "Open Sans", sans-serif;
}

.wrapper {
  width: 90vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #ffca93;
  padding: 1em;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: #7f4b13;
}

.main {
  background-color: #fff4e9;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 1.5em;
}

.todo-item {
  height: 5vh;
  width: 100%;
  padding: 1.4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: #ffdfbe;
  margin: 0 auto;
}
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  font-size: 1.4rem;
}
.custom-checkbox + label::before {
  content: "";
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 2px solid #feb567;
  border-radius: 0.25em;
  margin-right: 1em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.custom-checkbox:checked + label::before {
  border-color: #feb567;
  background-color: #feb567;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
  border-color: #feb567;
}
.custom-checkbox:not(:disabled):active + label::before {
  background-color: #ffdfbe;
  border-color: #feb567;
}
.custom-checkbox:focus:not(:checked) + label::before {
  border-color: #feb567;
}
.custom-checkbox:disabled + label::before {
  background-color: #feb567;
}
label {
  color: #7f4b13;
}

.close {
  height: 26px;
  width: 26px;
  background-color: #ffdfbe;
  border-radius: 5px;
  position: relative;
  border: 2px solid #fc8f1a;
}
.close:after {
  position: absolute;
  top: -39px;
  bottom: 0;
  left: 0;
  right: 0;
  content: "\d7";
  font-size: 27px;
  color: #fc8f1a;
  line-height: 100px;
  text-align: center;
}

.group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.group svg {
  margin-right: 1em;
}
h3 {
  color: #7f4b13;
}
.add-todo {
  width: 100%;
  padding: 0.5em;
  text-align: center;
  border: 3px dashed #ffca93;
  border-radius: 10px;
  background-color: #ffecd7;
  opacity: 0.7;
  color: #ffca93;
  font-size: 1.3rem;
  font-weight: 600;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffca93;
  padding: 0 1.5em;
  color: #c9955d;
  font-weight: 600;
  font-size: 1.2rem;
}

.tasks-choice {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55%;
}

.tasks-choice input {
  background-color: #ffca93;
  color: #c9955d;
  font-size: 1.1rem;
  font-weight: 600;
}
.all-tasks-btn {
  border: 2px solid #c9955d;
  border-radius: 5px;
  padding: 5px;
}

.active-btn,
.completed-btn {
  border: none;
}

@media only screen and (min-width: 772px) {
  div.wrapper {
    width: 60vw;
  }
}
@media only screen and (min-width: 990px) {
  #wrapper {
    width: 40vw;
  }
}
</style>

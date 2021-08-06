<template>
  <div id="wrapper" class="wrapper">
    <div class="header">to do list</div>
    <div class="main">
      <div class="todo-item">
        <label class="custom-checkbox">
          <input type="checkbox" value="value-1" />
          <span>Task 1</span>
        </label>
        <div class="close"></div>
      </div>
      <div class="todo-item">
        <label class="custom-checkbox">
          <input type="checkbox" value="value-1" />
          <span>Task 2</span>
        </label>
        <div class="close"></div>
      </div>
      <div class="todo-item">
        <label class="custom-checkbox">
          <input type="checkbox" value="value-1" />
          <span>Task 3</span>
        </label>
        <div class="close"></div>
      </div>
      <input class="add-todo" placeholder="Add a new task" />
    </div>
    <div class="footer" id="footer">
      <p>1/3 left</p>
      <div class="tasks_choice_group">
        <div class="tasks_choice_group-item">
          <input id="radio-1" type="radio" name="radio" value="1" checked />
          <label for="radio-1">All</label>
        </div>
        <div class="tasks_choice_group-item">
          <input id="radio-2" type="radio" name="radio" value="2" />
          <label for="radio-2">Active</label>
        </div>
        <div class="tasks_choice_group-item">
          <input id="radio-3" type="radio" name="radio" value="3" />
          <label for="radio-3">Completed</label>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "App",
  components: {}
};
</script>


<style lang="scss">
$headerFooterBG: #ffca93;
$mainBg: #fff4e9;
$todoBg: #ffdfbe;
$addTodoBg: #ffecd8;
$checkboxBg: #feb567;
$headerTitle: #7f4b13;
$footerText: #c9955d;
$close: #fc8f1a;
$firstGradient: #ff7e5f;
$secondGradient: #ffa665;

* {
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

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

    .header {
      background-color: $headerFooterBG;
      padding: 1em;
      text-align: center;
      font-size: 1.2rem;
      font-weight: 600;
      color: $headerTitle;
    }

    .main {
      background-color: $mainBg;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 1.5em;

      .todo-item {
        height: 5vh;
        width: 100%;
        padding: 1.4em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px;
        background-color: $todoBg;
        margin: 0 auto;

        .custom-checkbox > input {
          position: absolute;
          z-index: -1;
          opacity: 0;
        }

        .custom-checkbox > span {
          display: inline-flex;
          align-items: center;
          color: $headerTitle;
          font-weight: 400;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .custom-checkbox > span::before {
          content: "";
          display: inline-block;
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          flex-grow: 0;
          border: 1px solid $checkboxBg;
          border-radius: 0.25em;
          margin-right: 1.5em;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: 50% 50%;
        }

        .custom-checkbox
          > input:not(:disabled):not(:checked)
          + span:hover::before {
          box-shadow: 0 0 0 0.1rem $checkboxBg;
        }

        .custom-checkbox > input:not(:disabled):active + span::before {
          border-color: $checkboxBg;
        }

        .custom-checkbox > input:checked + span::before {
          background-color: $checkboxBg;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
        }

        .custom-checkbox > input:disabled + span::before {
          border-color: $checkboxBg;
        }

        .close {
          height: 24px;
          width: 24px;
          background-color: $todoBg;
          border-radius: 5px;
          position: relative;
          border: 2px solid $headerFooterBG;
        }
        .close:after {
          position: absolute;
          top: -40px;
          bottom: 0;
          left: 0;
          right: 0;
          content: "\d7";
          font-size: 27px;
          color: $headerFooterBG;
          line-height: 100px;
          text-align: center;
          cursor: pointer;
        }

        .close:hover {
          border-color: $close;
        }
        .close:hover:after {
          color: $close;
        }
      }
      .add-todo {
        width: 100%;
        padding: 0.8em;
        text-align: center;
        border: 3px dashed $headerFooterBG;
        border-radius: 10px;
        background-color: $addTodoBg;
        font-weight: 600;
        cursor: pointer;
      }

      .add-todo::placeholder {
        color: $headerFooterBG;
        font-size: 1.3rem;
      }
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

      .tasks_choice_group {
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
      }
      .tasks_choice_group-item {
        display: flex;
        color: $footerText;
      }
      .tasks_choice_group input[type="radio"] {
        display: none;
      }
      .tasks_choice_group label {
        display: flex;
        cursor: pointer;
        padding: 0px 15px;
        color: $footerText;
      }

      .tasks_choice_group input[type="radio"]:checked + label {
        border: 2px solid $footerText;
        border-radius: 7px;
      }

      .tasks_choice_group label:hover {
        border: 2px solid $footerText;
        border-radius: 7px;
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
}
</style>

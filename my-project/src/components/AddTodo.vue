<template>
  <input class="add-todo" placeholder="Add a new task" />
</template>


<script>
export default {
  name: "add-todo"
};
</script>


<style lang="scss">
@import ".././assets/styles/styles.scss";

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
</style>



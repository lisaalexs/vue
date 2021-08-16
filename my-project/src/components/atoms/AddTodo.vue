<template>
  <input :class="$style.addTodo" placeholder="Add a new task" />
</template>


<script>
export default {
  name: "add-todo"
};
</script>


<style lang="scss" module>
@import "../../assets/styles/styles.scss";

.addTodo {
  width: 100%;
  padding: 0.8em;
  text-align: center;
  border: 3px dashed $headerFooterBG;
  border-radius: 10px;
  background-color: $addTodoBg;
  font-weight: 600;
  cursor: pointer;
}

.addTodo::placeholder {
  color: $headerFooterBG;
  font-size: 1.3rem;
}
</style>



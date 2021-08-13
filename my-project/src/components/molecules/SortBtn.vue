<template>
  <div class="tasks_choice_group-item">
    <input id="radio-2" type="radio" name="sortBtn" :checked="isChecked" />
    <label for="radio-2">{{sortBtn}}</label>
  </div>
</template>


<script>
export default {
  props: {
    sortBtn: String,
    isChecked: Boolean
  }
};
</script>


<style lang="scss">
@import "../../assets/styles/styles.scss";

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
</style>
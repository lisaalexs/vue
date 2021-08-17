<template>
  <div :class="$style.tasksChoiceGroupItem">
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


<style lang="scss" module>
@import "../../assets/styles/styles.scss";

.tasksChoiceGroupItem {
  display: flex;
  color: $footerText;

  & input[type="radio"] {
    display: none;
  }
  & label {
    display: flex;
    cursor: pointer;
    padding: 0px 15px;
    color: $footerText;
  }

  & input[type="radio"]:checked + label {
    border: 2px solid $footerText;
    border-radius: 7px;
  }

  & label:hover {
    border: 2px solid $footerText;
    border-radius: 7px;
  }
}
</style>
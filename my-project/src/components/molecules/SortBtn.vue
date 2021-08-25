<template>
  <div :class="$style.tasksChoiceGroupItem">
    <input
      id="radio-2"
      type="radio"
      name="sortBtn"
      :checked="isPicked"
      :title="title"
      :id="id"
      @click="change"
    />
    <label for="radio-2">{{title}}</label>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
export default {
  props: {
    title: String,
    isPicked: Boolean,
    id: Number
  },
  methods: {
    ...mapMutations(["changeBtn", "changeBtnStatus"]),
    change() {
      this.changeBtn(this.id);
      this.changeBtnStatus(this.id);
    }
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
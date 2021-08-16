<template>
  <div :class="$style.footer" id="footer">
    <p>1/3 left</p>
    <div :class="$style.tasksChoiceGroup">
      <SortBtn v-for="btn in btnData" :key="btn.id" :sortBtn="btn.type" :isChecked="btn.isChecked" />
    </div>
  </div>
</template>

<script>
import SortBtn from "../molecules/SortBtn";

export default {
  data() {
    return {
      btnData: [
        {
          id: 1,
          type: "All",
          isChecked: true
        },
        {
          id: 2,
          type: "Active",
          isChecked: false
        },
        {
          id: 3,
          type: "Complete",
          isChecked: false
        }
      ]
    };
  },
  components: {
    SortBtn
  }
};
</script>


<style lang="scss" module>
@import "../../assets/styles/styles.scss";

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $headerFooterBG;
  padding: 0 1.5em;
  color: $footerText;
  font-weight: 600;
  font-size: 1.2rem;

  .tasksChoiceGroup {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (min-width: 556px) {
    div.tasksChoiceGroup {
      display: flex;
      flex-direction: row;
    }
  }
}
</style>
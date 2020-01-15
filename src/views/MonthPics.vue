<template>
  <div class="month-pics">
    <h1>THIS IS MONTH PICS</h1>
  </div>
</template>

<script>
import { getCurrentDate } from "@/functions/helpers.js";

export default {
  name: "MonthPics",
  data: function() {
    return {
      dateRange: {}
    };
  },
  mounted() {
    this.dateRange = getCurrentDate();
  }
};
</script>
<style lang="scss">
.month-pics {
  h1 {
    font-size: 100px;
    color: white;
  }
}
</style>

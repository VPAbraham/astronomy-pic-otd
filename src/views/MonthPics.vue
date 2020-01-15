<template>
  <div class="month-pics">
    <h1>THIS IS MONTH PICS</h1>
  </div>
</template>

<script>
import { getCurrentDate } from "@/functions/helpers.js";
import { getMultiplePhotos } from "@/functions/apiCalls.js";

export default {
  name: "MonthPics",
  data: function() {
    return {
      dateRange: {},
    };
  },
  mounted() {
    this.dateRange = getCurrentDate();
    const { startDate, endDate } = this.dateRange;
    getMultiplePhotos(startDate, endDate);
  },
  methods: {
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

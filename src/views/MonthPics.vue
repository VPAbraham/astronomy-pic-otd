<template>
  <div class="month-pics">
    <h1>THIS IS MONTH PICS</h1>
    <template v-for="photo in photos">
      <PhotoFrame
        :url="photo.hdurl ? photo.hdurl : photo.url"
        :date="photo.date"
        :title="photo.title"
        :description="photo.title"
        :key="photo.date"
      />
    </template>
  </div>
</template>

<script>
import PhotoFrame from "@/components/PhotoFrame.vue";
import { getCurrentDate } from "@/functions/helpers.js";
import { getMultiplePhotos } from "@/functions/apiCalls.js";

export default {
  name: "MonthPics",
  components: {
    PhotoFrame
  },
  data: function() {
    return {
      dateRange: {},
      photos: [],
      isLoading: false
    };
  },
  mounted() {
    this.isLoading = true;
    this.dateRange = getCurrentDate();
    const { startDate, endDate } = this.dateRange;
    getMultiplePhotos(startDate, endDate)
      .then(res => (this.photos = res))
      .catch(error => console.error(error));
  },
  methods: {},
  watch: {
    photos: function() {
      this.isLoading = false;
    }
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

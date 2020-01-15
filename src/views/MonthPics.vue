<template>
  <div class="month-pics">
    <div class="photo-container">
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
  .photo-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
}
</style>

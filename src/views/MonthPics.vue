<template>
  <div>
    <img class="loading" v-if="isLoading" src="@/assets/loading.gif" />
    <div class="month-pics">
      <div class="photo-container">
        <template v-for="photo in photos">
          <PhotoFrame
            class="photo-frame"
            :url="photo.hdurl ? photo.hdurl : photo.url"
            :date="photo.date"
            :title="photo.title"
            :description="photo.title"
            :key="photo.date"
          />
        </template>
      </div>
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
      startDate: {},
      photos: [],
      isLoading: false
    };
  },
  mounted() {
    this.isLoading = true;
    this.startDate = getCurrentDate();
    const { startDate, endDate } = this.startDate;
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
    .photo-frame {
      margin-top: 2%;
    }
  }
}
.loading {
  width: 40%;
  height: auto;
  display: block;
  margin: 15vh auto;
}
</style>

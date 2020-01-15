<template>
  <div class="apod">
    <section class="date-selector">
      <template>
        <p>To view another photo, enter the date.</p>
        <datetime class="date-block" v-model="selectedDate">Click</datetime>
      </template>
    </section>
    <img v-if="isLoading" src="@/assets/loading.gif">
    <Display v-if="!isLoading" :image="this.currentPhoto" />
  </div>
</template>

<script>
import { Datetime } from "vue-datetime";
import Display from "@/components/Display.vue";
import { getPhoto } from "@/functions/apiCalls.js";
export default {
  name: "APOD",
  components: {
    Display,
    Datetime
  },
  data: function() {
    return {
      selectedDate: null,
      currentPhoto: null,
      isLoading: false
    };
  },
  methods: {},
  mounted() {
    this.isLoading = true;
    getPhoto()
      .then(res => (this.currentPhoto = res))
      .catch(error => console.error(error));
  },
  watch: {
    selectedDate: function(val) {
      this.isLoading = true;
      getPhoto(val)
        .then(res => (this.currentPhoto = res))
        .catch(error => console.error(error));
      this.isLoading = false;
    }
  }
};
</script>

<style lang="scss">
.apod {
  color: white;
  margin-top: 3vh;
}
.date-selector {
  width: 22%;
  height: 7vh;
  border-radius: 8px;
  display: block;
  margin: 5px auto;
  display: flex;
  justify-content: space-evenly;
}

.nav {
  color: rgb(202, 202, 202);
  width: 95%;
  margin: auto;
}
</style>

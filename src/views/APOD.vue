<template>
  <div class="apod">
    <section class="date-selector">
      <template>
        <p>To view another photo, enter the date below.</p>
        <datetime class="date-block" v-model="selectedDate">Click</datetime>
      </template>
    </section>
    <Display :image="this.currentPhoto" />
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
      currentPhoto: null
    };
  },
  methods: {},
  mounted() {
    getPhoto()
      .then(res => (this.currentPhoto = res))
      .catch(error => console.error(error));
  },
  watch: {
    selectedDate: function(val) {
      getPhoto(val)
        .then(res => (this.currentPhoto = res))
        .catch(error => console.error(error));
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
  width: 30%;
  height: 7vh;
  border-radius: 8px;
  display: block;
  margin: 5px auto;
  display: flex;
}

.nav {
  color: rgb(202, 202, 202);
  width: 95%;
  margin: auto;
}
</style>

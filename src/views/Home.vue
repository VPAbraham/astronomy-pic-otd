<template>
  <div class="home">
    <Display imageUrl="this.currentPhoto" />
    <section class="date-selector">
      <template>
        <datetime v-model="selectedDate"></datetime>
      </template>
    </section>
  </div>
</template>

<script>
import { Datetime } from "vue-datetime";
import Display from "@/components/Display.vue";
import { getPhoto } from "@/apiCalls.js";
export default {
  name: "home",
  components: {
    Display,
    Datetime
  },
  data: function() {
    return {
      selectedDate: null,
      currentPhoto: ""
    };
  },
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
.home {
  color: white;
}
.date-selector {
  width: 30%;
  background: rgb(199, 199, 199);
  height: 7vh;
  border-radius: 8px;
}

.nav {
  color: rgb(202, 202, 202);
  width: 95%;
  margin: auto;
}
</style>

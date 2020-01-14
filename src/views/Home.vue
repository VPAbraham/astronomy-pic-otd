<template>
  <div class="home">
    <Display />
    <section class="date-selector">
      <template>
        <datetime v-model="selectedDate"></datetime>
      </template>
    </section>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
import { Datetime } from "vue-datetime";
import Display from "@/components/Display.vue";
export default {
  name: "home",
  components: {
    Display,
    Datetime
  },
  data: function() {
    return {
      selectedDate: null,
      number: 1
    };
  },
  watch: {
    selectedDate: function(val) {
      console.log(val);
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

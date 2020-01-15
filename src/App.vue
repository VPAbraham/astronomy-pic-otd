<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  },
  mounted() {
    console.log(process.env.VUE_APP_NASA_API_URL);
  }
};
</script>

<style lang="scss">
@import "~bulma";
@import "~buefy/src/scss/buefy";
* {
  box-sizing: border-box;
  margin: 0;
}

html {
  background: rgb(44, 44, 44);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

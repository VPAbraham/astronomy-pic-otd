<template>
  <div id="app">
    <Header />
    <Home />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Home from "@/views/Home.vue";

export default {
  components: {
    Home,
    Header
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
  background: rgb(19, 19, 19);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
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

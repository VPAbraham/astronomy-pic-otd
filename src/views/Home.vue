<template>
  <div class="home">
    <Display />
    <Nav />
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
import Display from "@/components/Display.vue";
import Nav from "@/components/Nav.vue";

export default {
  name: "home",
  components: {
    Display,
    Nav
  }
};
</script>

<style lang="scss">
.home {
  color: white;
}
</style>

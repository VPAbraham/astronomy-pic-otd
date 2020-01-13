<template>
  <div class="display">
    <h3>Display</h3>
    <img class="" src="https://apod.nasa.gov/apod/image/2001/NGC6726_Schedler_960.jpg"/>
  </div>
</template>

<script>
export default {
  name: "Display",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.display {
  width: 75%;
  border: solid 1px silver;
  h3 {}
  img {
    border: solid yellow 1px;
    max-width: 60%;
    height: auto;
  }
}
</style>

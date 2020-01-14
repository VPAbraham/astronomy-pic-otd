<template>
  <div class="display">
    <section class="pic-frame">
      <img class="" v-bind:src="imageUrl" />
    </section>
  </div>
</template>

<script>
export default {
  name: "Display",
  props: {
    imageUrl: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.display {
  width: 100%;
  border: solid yellow 1px;
  .pic-frame {
    border: solid 1px orange;
    justify-content: center;
    img {
      max-width: 60%;
      height: auto;
      display: block;
      margin: 5% auto;
    }
  }
}
</style>

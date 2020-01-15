<template>
  <div class="display">
    <section class="pic-frame">
      <img v-bind:src="imageUrl" />
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
  .pic-frame {
    justify-content: center;
    img {
      max-height: 60vh;
      height: auto;
      display: block;
      margin: 5% auto;
      border-radius: 4px;
    }
  }
}
</style>

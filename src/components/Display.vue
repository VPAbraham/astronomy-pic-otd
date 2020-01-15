<template>
  <div class="display">
    <section class="pic-frame">
      <h2>{{ image.title }}</h2>
      <img v-bind:src="image.hdurl" />
      <h4>Copyright: {{ image.copyright }}</h4>
    </section>
  </div>
</template>

<script>
export default {
  name: "Display",
  props: {
    image: Object
  }
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Overpass&display=swap');
.display {
  width: 100%;
  .pic-frame {
    justify-content: center;
    width: 70vw;
    margin: auto;

    h2 {}
    img {
      width: 70vw;
      height: 55vh;
      display: block;
      margin: auto;
      border-radius: 4px;
      object-fit: cover;
    }
    p {
      font-size: 14px;

      padding: 0 5%;
      font-family: 'Overpass', sans-serif;
    }
    h4 {}
  }
}
</style>

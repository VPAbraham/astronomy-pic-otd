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
@import url("https://fonts.googleapis.com/css?family=Overpass&display=swap");
@import url("https://fonts.googleapis.com/css?family=Poiret+One&display=swap");
.display {
  width: 100%;
  .pic-frame {
    justify-content: center;
    width: 70vw;
    margin: auto;
    text-align: center;

    h2 {
      font-family: "Poiret One", cursive;
      font-size: 40px;
    }
    img {
      width: 73vw;
      height: 58vh;
      display: block;
      margin: 2vh auto;
      border-radius: 4px;
      object-fit: cover;
      box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.658);
    }
    p {
      font-size: 14px;

      padding: 0 5%;
      font-family: "Overpass", sans-serif;
    }
    h4 {
      font-family: "Poiret One", cursive;
      font-size: 30px;
    }
  }
}
</style>

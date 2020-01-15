<template>
  <div class="header">
    <section class="left-header">
      <img src="@/assets/nasa.png" />
      <div>
        <h1>Astronomy Photo of the Day</h1>
        <p>BROUGHT TO YOU BY THE NASA API</p>
      </div>
    </section>
    <section class="right-header">
      <router-link class="today-link" to="/">Today's Picture Only</router-link>
      |
      <router-link class="month-link" to="/month_pics">
        See all pictures from the past month.
      </router-link>
      <!-- <router-view /> -->
    </section>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  background: rgb(233, 233, 233);
  min-height: 12vh;
  display: flex;
  .left-header {
    display: flex;
    margin: auto 0;

    img {
      width: 130px;
      height: 130px;
    }
    div {
      margin: auto 0;

      h1 {
        font-size: 40px;
      }
      p {
        font-size: 20px;
      }
    }
  }
  .right-header {
    margin: auto;

    .month-link,
    .today-link {
      font-size: 24px;
    }
  }
}
</style>

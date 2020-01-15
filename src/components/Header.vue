<template>
  <div class="header">
    <router-link to="/">
      <section class="left-header">
        <img src="@/assets/nasa.png" />
        <div>
          <h1>Astronomy Photo of the Day</h1>
          <p>BROUGHT TO YOU BY THE NASA API</p>
        </div>
      </section>
    </router-link>
    <section class="right-header">
      <div>
        <router-link class="today-link" to="/">Pic of the Day</router-link>
      </div>
      <div>
        <router-link class="month-link" to="/month_pics">
          Pics of the Month
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {}
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Work+Sans&display=swap");
.header {
  background: rgb(233, 233, 233);
  min-height: 12vh;
  display: flex;
  justify-content: space-between;
  .left-header {
    display: flex;
    margin: auto 0;
    align-self: flex-start;
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
    align-self: center;
    margin-right: 3%;
    display: flex;
    justify-content: space-between;
    div {
      background: rgb(158, 158, 158);
      height: 50px;
      border-radius: 4px;
      line-height: 50px;
      margin: 10px;
      .month-link,
      .today-link {
        font-size: 22px;
        font-family: "Work Sans", sans-serif;
        font-weight: 600;
        margin: 7px;
      }
    }
  }
}
</style>

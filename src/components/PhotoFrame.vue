<template>
  <div class="photo-frame">
    <img :src="url" />
  </div>
</template>

<script>
export default {
  name: "PhotoFrame",
  props: {
    url: String,
    date: String,
    title: String,
    description: String
  }
};
</script>
<style lang="scss">
.photo-frame {
  h1 {
    font-size: 80px;
    color: white;
  }
  img {
    width: 20vw;
    height: 13vw;
    object-fit: cover;
    border-radius: 6px;
  }
}
</style>

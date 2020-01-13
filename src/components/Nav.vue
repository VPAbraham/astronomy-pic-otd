<template>
  <b-field class="nav" label="Select a date">
    <b-datepicker
      placeholder="Type or select a date..."
      icon="calendar-today"
      editable
    >
    </b-datepicker>
  </b-field>
</template>

<script>
export default {
  name: "Nav",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  // width: 24.92%;
  // border: solid 1px silver;
  background: white;
}
</style>

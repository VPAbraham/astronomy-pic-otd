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

<style scoped lang="scss">
.nav {
  background: white;
}
</style>

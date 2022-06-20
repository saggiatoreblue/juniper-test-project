<template>
  <footer id="footer-component">
    <p>&copy; {{ year }} Michael Botelho</p>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FooterComponent",

  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
});
</script>

<style lang="scss" scoped>
#footer-component {
  padding: 0.7rem 0 0.5rem;
  font-size: 0.8rem;
  background: white;
  width: 100%;
  color: $secondary-color;
  @include box-shadow(0, 0, 10px, rgba(0, 0, 0, 0.1));
}
</style>

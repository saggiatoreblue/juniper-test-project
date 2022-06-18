<template>
  <div id="navigation-component">
    <nav>
      <router-link to="/">Store</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavigationComponent",
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
#navigation-component {
  nav {
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>

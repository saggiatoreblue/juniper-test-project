<template>
  <header id="header-component">
    <logo-component />
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeaderComponent",
  components: {
    LogoComponent: () => import("@/components/globals/LogoComponent.vue"),
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
#header-component {
  padding: 0.5rem;
  border-bottom: 1px solid $grey-color;
  position: sticky;
  background: white;
  top: 0;
  width: 100%;
  z-index: 1;
}
</style>

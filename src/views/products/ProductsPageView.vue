<template>
  <div class="products">
    <product-list-component />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    ProductListComponent: () =>
      import("@/components/products/ProductListComponent.vue"),
  },
});
</script>

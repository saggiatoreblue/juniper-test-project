<template>
  <div class="products-view">
    <product-list-component />
    <product-details-component />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProductsPageView",
  components: {
    ProductListComponent: () =>
      import("@/components/products/ProductListComponent.vue"),
    ProductDetailsComponent: () =>
      import("@/components/products/ProductDetailsComponent.vue"),
  },
});
</script>

<style lang="scss" scoped></style>

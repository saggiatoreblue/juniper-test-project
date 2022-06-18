<template>
  <div class="product-details-component">
    <h1>Product Details</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "ProductDetailsComponent",
  props: {
    toggleDetails: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    ...mapGetters(["getToggleDetails"]),
    showDetails(): boolean {
      return this.toggleDetails;
    },
  },
});
</script>

<style lang="scss" scoped>
.product-details-component {
  height: 100%;
  width: 300px;
  position: fixed;
  right: 0;
  background: white;
  top: 0;
  z-index: 9;
  padding: 2rem 0.4rem;
  border-left: 1px solid $grey-color;
  @include box-shadow(0px, 0px, 10px, rgba(0, 0, 0, 0.2), false);

  h1 {
    font-size: 1.3rem;
  }
}
</style>

<template>
  <div class="product-list-component">
    <div>
      <ul id="products" class="grid">
        <li
          v-for="product in products"
          :key="product.ProductID"
          class="col-lg-3 col-md-6 col-12"
        >
          <div class="product-img-container">
            <div class="product-img-wrap">
              <img
                class="product-image"
                :src="`${product.PhotoName}?width=250&height=250&mode=canvas&anchor=middlecenter`"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProductListComponent",
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
});
</script>

<style scoped lang="scss">
.product-list-component {
  max-width: 1280px;
  margin: auto;
  padding: 1rem;
}

.product-img-container {
  padding: 10px;
  border: 3px solid lighten($grey-color, 7%);
  outline: 1px solid $tertiary-color-light;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  cursor: pointer;
}
.product-img-wrap {
  overflow: hidden;
  width: 240px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <div class="product-list-component">
    <div>
      <ul id="products" class="grid">
        <li
          v-for="product in products"
          :key="product.ProductID"
          class="col-lg-3 col-md-6 col-12"
        >
          <div class="product-img-container" @click="toggleDetails">
            <div class="product-img-wrap" :id="product.ProductID">
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
import { mapActions } from "vuex";

export default Vue.extend({
  name: "ProductListComponent",

  data() {
    return {
      selectedProduct: document.createElement("div"),
    };
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
  },

  methods: {
    ...mapActions(["setToggleDetails", "setSelectedProductId"]),

    toggleDetails(e: any): void {
      const details = document.getElementById("product-details");
      this.setSelectedProductId(e.target.id);
      if (
        this.selectedProduct.id !== e.target.id &&
        details &&
        !details.classList.contains("open")
      ) {
        this.setToggleDetails();
      } else if (this.selectedProduct.id === e.target.id) {
        this.setToggleDetails();
      }

      this.selectedProduct = e.target;
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
  position: relative;
  cursor: pointer;
}

.product-img-wrap {
  overflow: hidden;
  width: 240px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:after {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(252, 197, 27, 0.3);
    opacity: 0;
    content: "";
    transition: opacity 0.8s ease;
  }
  &:hover {
    &:after {
      opacity: 0.5;
    }
  }
}
</style>

<template>
  <div class="product-list-component">
    <div>
      <ul id="products" class="grid">
        <li
          v-for="product in products"
          :key="product.ProductID"
          class="col-lg-3 col-sm-6 col-12"
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
    toggleDetails(e): void {
      const details = document.getElementById("product-details");
      document.querySelectorAll(".product-img-wrap").forEach((el) => {
        if (el.id !== e.target.id) el.classList.remove("active");
      });
      e.target.classList.toggle("active");
      this.$store.dispatch("setSelectedProductId", e.target.id);
      if (
        this.selectedProduct.id !== e.target.id &&
        details &&
        !details.classList.contains("open")
      ) {
        this.$store.dispatch("setToggleDetails");
      } else if (this.selectedProduct.id === e.target.id) {
        this.$store.dispatch("setToggleDetails");
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
  padding: 2rem 1rem 4rem;
  min-width: 340px;
}

.product-img-container {
  padding: 10px;
  border: 3px solid lighten($grey-color, 7%);
  outline: 1px solid $border-color;
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
    background: rgba(252, 197, 27, 0.5);
    opacity: 0;
    content: "";
    transition: all 0.3s ease;
  }
  &:hover,
  &.active {
    img {
      filter: sepia(50%);
    }
    &:after {
      opacity: 0.2;
    }
  }
}
</style>

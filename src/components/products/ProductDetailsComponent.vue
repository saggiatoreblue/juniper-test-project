<template>
  <div
    id="product-details"
    class="product-details-component"
    :class="toggleDetails ? 'open' : ''"
  >
    <h1>Product Details</h1>
    <ul class="product-details">
      <li v-for="(value, key, i) in productDetails" :key="i">
        <div v-if="value">
          <span class="bold">{{ key | toTitleCase }}:&nbsp;</span>
          <span v-if="key === 'basePrice'">{{ value | toUSDollar }}</span>
          <span v-else>{{ value }}</span>
        </div>
      </li>
    </ul>
    <h1>Contact Information</h1>
    <ul class="contact-details">
      <li v-for="(value, key, i) in salesRep" :key="i">
        <div v-if="value">
          <span class="bold">{{ key | toTitleCase }}:&nbsp;</span>
          <span>{{ value }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapState } from "vuex";
import { ProductDetails } from "@/classes/products/ProductDetails";
import { SalesRep } from "@/classes/products/SalesRep";

import StringHelper from "@/classes/helpers/StringHelper";

export default Vue.extend({
  name: "ProductDetailsComponent",

  data() {
    return {
      productDetails: {},
      salesRep: {},
    };
  },

  filters: {
    toTitleCase(value: string) {
      return StringHelper.toTitleCasing(value);
    },
    toUSDollar(value: string) {
      return StringHelper.convertToUSDollar(value);
    },
  },

  computed: {
    ...mapGetters(["getToggleDetails", "getSalesRep"]),
    ...mapState(["toggleDetails", "selectedProductId", "products"]),
  },

  mounted() {
    const salesRepData = this.getSalesRep;
    this.salesRep = new SalesRep(
      salesRepData.SalesRepID,
      salesRepData.CompanyName,
      salesRepData.FirstName,
      salesRepData.LastName,
      salesRepData.EmailAddress,
      salesRepData.CellPhone,
      salesRepData.Phone,
      salesRepData.Fax,
      salesRepData.City,
      salesRepData.State,
      salesRepData.PostalCode
    );
  },

  watch: {
    selectedProductId(v: string) {
      const product = this.products.find(
        (product: any) => product.ProductID === +v
      );
      this.productDetails = new ProductDetails(
        product.ItemID,
        product.ItemName,
        product.Description,
        product.Dimensions,
        product.BasePrice
      );
    },
  },
});
</script>

<style lang="scss" scoped>
.product-details-component {
  height: 100%;
  width: 300px;
  position: fixed;
  right: -100%;
  background: white;
  top: 0;
  z-index: 9;
  padding: 0 1.5rem;
  border-left: 1px solid $grey-color;
  @include box-shadow(0px, 0px, 10px, rgba(0, 0, 0, 0.2), false);
  transition: right 0.5s ease;
  @media (max-width: 480px) {
    width: 100%;
  }
  &.open {
    right: 0;
  }

  .bold {
    color: $secondary-color;
  }

  h1 {
    font-size: 1.5rem;
    margin: 2rem 0;
    padding-bottom: 1rem;
    font-weight: 500;
    color: $secondary-color;
    border-bottom: 1px solid $grey-color;
  }

  .product-details,
  .contact-details {
    li {
      margin-top: 0.6rem;
      text-align: left;
      line-height: 1.4;
      font-size: 0.9rem;
    }
  }
}
</style>

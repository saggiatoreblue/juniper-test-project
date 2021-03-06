<template>
  <div
    id="product-details"
    class="product-details-component"
    :class="toggleDetails ? 'open' : ''"
  >
    <div class="product-details-wrapper">
      <div class="close-icon" v-html="closeIcon" @click="onCloseDetails" />

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

      <div v-if="salesRep">
        <h1>Contact Information</h1>
        <ul class="contact-details">
          <li v-for="(value, key, i) in salesRep" :key="i">
            <div v-if="value">
              <span class="bold">{{ key | toTitleCase }}:&nbsp;</span>
              <span v-if="key === 'cellPhone' || key === 'phone'">{{
                value | toUSPhoneNumber
              }}</span>
              <span v-else>{{ value }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
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
      closeIcon:
        '<svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg>',
    };
  },

  filters: {
    toTitleCase(value: string) {
      return StringHelper.toTitleCasing(value);
    },
    toUSDollar(value: string) {
      return StringHelper.convertToUSDollar(value);
    },
    toUSPhoneNumber(value: string) {
      return StringHelper.convertToPhoneNumber(value);
    },
  },

  computed: {
    ...mapGetters(["getSalesRep"]),
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
      const product = this.products.find((product) => product.ProductID === +v);
      this.productDetails = new ProductDetails(
        product.ItemID,
        product.ItemName,
        product.Description,
        product.Dimensions,
        product.BasePrice
      );
    },
  },

  methods: {
    onCloseDetails(): void {
      document.querySelectorAll(".product-img-wrap").forEach((element) => {
        element.classList.remove("active");
      });
      this.$store.dispatch("setToggleDetails");
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
  transform: translateX(100%);
  background: white;
  top: 0;
  z-index: 2;
  padding: 0 1.5rem 1rem;
  border-left: 1px solid $grey-color;
  @include box-shadow(0px, 0px, 10px, rgba(0, 0, 0, 0.1), false);
  transition: transform 0.3s ease;
  overflow: auto;

  &.open {
    transform: translateX(0%);
  }

  .product-details-wrapper {
    height: auto;
  }

  .close-icon {
    position: absolute;
    top: 0.8rem;
    right: 0.5rem;
    cursor: pointer;
  }

  .bold {
    color: $secondary-color;
  }

  h1 {
    font-size: 1.5rem;
    margin: 3rem 0 1.5rem;
    padding-bottom: 0.8rem;
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

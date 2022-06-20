<template>
  <div id="logo-component">
    <router-link to="/">
      <img :src="`${companyLogoPath}?width=120`" />
      <span class="small-txt">{{ companyName }}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "LogoComponent",

  computed: {
    ...mapGetters(["getManufacturerId", "getCompanyDetails"]),
    companyLogoPath(): string {
      const manufacturerID = this.getManufacturerId;
      return `http://images.repzio.com/productimages/${manufacturerID}/logo${manufacturerID}_lg.jpg`;
    },
    companyName(): string {
      const companyDetails = this.getCompanyDetails;
      return companyDetails.CompanyName;
    },
  },
});
</script>

<style lang="scss" scoped>
#logo-component {
  text-align: center;
  width: 100%;
  padding: 0 0 0.4rem;
  img {
    display: block;
    margin: auto;
  }
  a {
    text-decoration: none;
    color: $text-color-default;
  }
  .small-txt {
    position: relative;
    top: -0.6rem;
  }
}
</style>

<template>
  <div id="logo-component">
    <router-link to="/">
      <img :src="`${companyLogoPath}?width=120`" />
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "LogoComponent",

  computed: {
    ...mapGetters(["getManufacturerId"]),
    companyLogoPath() {
      const manufacturerID = this.getManufacturerId;
      return `http://images.repzio.com/productimages/${manufacturerID}/logo${manufacturerID}_lg.jpg`;
    },
  },
});
</script>

<style lang="scss" scoped>
#logo-component {
}
</style>

<template>
  <div id="access-denied">
    <h1>Access Denied</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AccessDenied",
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
#access-denied {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 97px);
  h1 {
    font-size: 48px;
    color: rgb(137, 12, 12);
  }
}
</style>

import Vue from "vue";
import Vuex from "vuex";

import products from "./products.json";
import store from "./store.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: products.items,
    store,
    manufacturerId: store.ManufacturerID,
  },
  getters: {
    getProducts: (state) => state.products,
    getManufacturerId: (state) => state.manufacturerId,
  },
  mutations: {},
  actions: {},
  modules: {},
});

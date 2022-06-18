import Vue from "vue";
import Vuex from "vuex";

import products from "./products.json";
import store from "./store.json";

Vue.use(Vuex);
/* eslint-disable */
interface GlobalState {
  products: object[];
  companyDetails: object;
  manufacturerId: string;
  toggleDetails: boolean;
}

export default new Vuex.Store({
  state: {
    products: products.items,
    companyDetails: store,
    manufacturerId: store.ManufacturerID,
    toggleDetails: false,
  },
  getters: {
    getProducts: (state: GlobalState) => state.products,
    getManufacturerId: (state: GlobalState) => state.manufacturerId,
    getCompanyDetails: (state: GlobalState) => state.companyDetails,
    getToggleDetails: (state: GlobalState) => state.toggleDetails,
  },
  mutations: {
    SET_PROP(state: any, [key, value]): void {
      state[key] = value;
    },
  },
  actions: {
    setToggleDetails({ state, commit }): void {
      commit("SET_PROP", ["toggleDetails", !state.toggleDetails]);
    },
  },
  modules: {},
});

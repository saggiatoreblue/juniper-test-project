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
  selectedProductId: string;
}

export default new Vuex.Store({
  state: {
    products: products.items,
    companyDetails: store,
    manufacturerId: store.ManufacturerID,
    toggleDetails: false,
    selectedProductId: "",
  },
  getters: {
    getProducts: (state: GlobalState): object[] => state.products,
    getManufacturerId: (state: GlobalState): string => state.manufacturerId,
    getCompanyDetails: (state: GlobalState): object => state.companyDetails,
    getToggleDetails: (state: GlobalState): boolean => state.toggleDetails,
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

    setSelectedProductId({ state, commit }, id: string): void {
      commit("SET_PROP", ["selectedProductId", id]);
    },
  },
  modules: {},
});

import Vue from "vue";
import Vuex from "vuex";

import products from "./products.json";
import store from "./store.json";

Vue.use(Vuex);
interface GlobalState {
  products: object[];
  companyDetails: object;
  manufacturerId: string;
  toggleDetails: boolean;
  selectedProductId: string;
  salesRep: object;
}

export default new Vuex.Store({
  state: {
    products: products.items,
    companyDetails: store,
    manufacturerId: store.ManufacturerID,
    toggleDetails: false,
    selectedProductId: "",
    salesRep: store.SalesRep,
  },
  getters: {
    getProducts: (state: GlobalState): object[] => state.products,
    getManufacturerId: (state: GlobalState): string => state.manufacturerId,
    getCompanyDetails: (state: GlobalState): object => state.companyDetails,
    getToggleDetails: (state: GlobalState): boolean => state.toggleDetails,
    getSalesRep: (state: GlobalState): object => state.salesRep,
  },
  mutations: {
    SET_PROP(state: GlobalState, [key, value]): void {
      state[key] = value;
    },
  },
  actions: {
    setToggleDetails({ state, commit }): void {
      commit("SET_PROP", ["toggleDetails", !state.toggleDetails]);
    },

    setSelectedProductId({ commit }, id: string): void {
      commit("SET_PROP", ["selectedProductId", id]);
    },
  },
  modules: {},
});

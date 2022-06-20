export default {
  setToggleDetails({ state, commit }): void {
    commit("SET_PROP", ["toggleDetails", !state.toggleDetails]);
  },

  setSelectedProductId({ commit }, id: string): void {
    commit("SET_PROP", ["selectedProductId", id]);
  },
};

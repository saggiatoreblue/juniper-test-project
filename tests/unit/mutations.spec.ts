import mutations from "../../src/store/mutations";
import state from "../../src/store/state";

describe("mutations", () => {
  test("SET_PROP updates vuex store", () => {
    const toggleDetails = true;
    mutations.SET_PROP(state, ["toggleDetails", toggleDetails]);
    expect(state.toggleDetails).toBe(toggleDetails);
  });
});

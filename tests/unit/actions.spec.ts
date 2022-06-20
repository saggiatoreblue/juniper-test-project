import actions from "../../src/store/actions";
import state from "../../src/store/state";

describe("actions", () => {
  it("should set the value of toggleDetails with mutation SET_PROP", () => {
    const context = {
      commit: jest.fn(),
      state,
    };

    actions.setToggleDetails(context);

    expect(context.commit).toHaveBeenCalledWith("SET_PROP", [
      "toggleDetails",
      true,
    ]);
  });

  it("should set the value of selected product id with mutation SET_PROP", () => {
    const context = {
      commit: jest.fn(),
      state,
    };
    actions.setSelectedProductId(context, "642698837");

    expect(context.commit).toHaveBeenCalledWith("SET_PROP", [
      "selectedProductId",
      "642698837",
    ]);
  });
});

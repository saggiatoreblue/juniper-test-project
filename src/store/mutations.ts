import GlobalState from "./GlobalState";
export default {
  SET_PROP(state: GlobalState, [key, value]): void {
    state[key] = value;
  },
};

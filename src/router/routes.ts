import products from "./products";
import accessDenied from "./40x";

export default [
  {
    path: "*",
    redirect: "/",
  },
  ...accessDenied,
  ...products,
];

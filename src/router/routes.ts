import products from "./_products";
import accessDenied from "./_40x";

export default [
  {
    path: "*",
    redirect: "/",
  },
  ...accessDenied,
  ...products,
];

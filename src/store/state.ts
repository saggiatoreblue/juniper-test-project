import data from "./data.json";

export default {
  products: data.items,
  companyDetails: data,
  manufacturerId: data.ManufacturerID,
  toggleDetails: false,
  selectedProductId: "",
  salesRep: data.SalesRep,
};

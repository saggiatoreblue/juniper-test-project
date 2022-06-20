import GlobalState from "./classes/GlobalState";

export default {
  getProducts: (state: GlobalState): object[] => state.products,
  getManufacturerId: (state: GlobalState): string => state.manufacturerId,
  getCompanyDetails: (state: GlobalState): object => state.companyDetails,
  getSalesRep: (state: GlobalState): object => state.salesRep,
};

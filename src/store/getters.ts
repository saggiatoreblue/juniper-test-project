import GlobalState from "./GlobalState";

export default {
  getManufacturerId: (state: GlobalState): string => state.manufacturerId,
  getCompanyDetails: (state: GlobalState): object => state.companyDetails,
  getSalesRep: (state: GlobalState): object => state.salesRep,
};

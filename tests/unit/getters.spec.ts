import getters from "../../src/store/getters";
import state from "../../src/store/state";

const salesRep: object = state.salesRep;
const manufacturerId: string = state.manufacturerId;
const companyDetails: object = state.companyDetails;

describe("getters", () => {
  it("returns sales rep data", () => {
    const actual = getters.getSalesRep(state);
    expect(actual).toMatchObject(salesRep);
  });
  it("returns the manufacturer id", () => {
    const actual = getters.getManufacturerId(state);
    expect(actual).toEqual(manufacturerId);
  });
  it("returns the company details", () => {
    const actual = getters.getCompanyDetails(state);
    expect(actual).toEqual(companyDetails);
  });
});

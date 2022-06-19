export class SalesRep {
  salesRepID: number;
  companyName: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  cellPhone: string;
  phone: string;
  fax: string;
  city: string;
  state: string;
  postalCode: string;

  constructor(
    salesRepID: number,
    companyName: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    cellPhone: string,
    phone: string,
    fax: string,
    city: string,
    state: string,
    postalCode: string
  ) {
    this.salesRepID = salesRepID;
    this.companyName = companyName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.cellPhone = cellPhone;
    this.phone = phone;
    this.fax = fax;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
  }
}

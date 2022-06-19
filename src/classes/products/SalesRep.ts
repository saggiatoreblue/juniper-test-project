export class SalesRep {
  salesRepId: number;
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
    salesRepId: number,
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
    this.salesRepId = salesRepId;
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

export class ProductDetails {
  itemID: string;
  itemName: string;
  description: string;
  dimensions: string;
  basePrice: number;

  constructor(
    itemID: string,
    itemName: string,
    description: string,
    dimensions: string,
    basePrice: number
  ) {
    this.itemID = itemID;
    this.itemName = itemName;
    this.description = description;
    this.dimensions = dimensions;
    this.basePrice = basePrice;
  }
}

export interface IProduct {
  name: string;
  detail?: string;
  imageUrl?: string;
}

export interface IListOfProducts extends IProduct {
  alternative: IProduct;
}

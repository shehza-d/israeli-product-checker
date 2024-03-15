export interface IProduct {
  key?: string | number;
  name: string;
  detail?: string;
  imageUrl?: string;
  search_terms?: string;
}

export interface IListOfProducts extends IProduct {
  alternative: IProduct;
}

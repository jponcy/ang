import { ProductType } from "./product";
import { SellProduct } from "./sell-product";

export class Store {

    constructor(public name: string, public creationYear: number, public affiliationYear: number,
            public category: ProductType, public products: SellProduct[] = []) {}
}

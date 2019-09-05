import { Product } from "./product";
import { Utils } from "./utils";

export class SellProduct {
    constructor(public product: Product, public price: number) {
    }

    get priceWithTaxes(): number|null {
        return this.product ? Utils.computeTaxes(this.price, this.product.important) : null;
    }
}

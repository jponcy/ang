import { ProductType } from "./product";
import { SellProduct } from "./sell-product";

export class Store {

    constructor(public name: string, public creationYear: number, public affiliationYear: number,
            public category: ProductType, public products: SellProduct[] = []) {}

    printAllProducts(): void {
        for (const sellProduct of this.products) {
            const p = sellProduct.product;

            console.log(`- ${p.label} - ${sellProduct.priceWithTaxes} / ${p.buyingPrice}`);

            if (p.description) {
                console.log('  ' + p.description);
            }
        }
    }
}

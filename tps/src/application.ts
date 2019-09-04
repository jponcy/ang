import { Product, ProductType } from "./product";
import { Store } from "./store";

export class Application {
    constructor(private products: Product[] = [], private stores: Store[] = []) {
        this.fillProducts();
        this.fillStores();
    }

    private fillProducts(): void {
        this.products.push(new Product('Tomate', ProductType.VEGETABLE, 1, 1.5, true));
        this.products.push(new Product('Radis', ProductType.VEGETABLE, 2, 2.2, true));
        this.products.push(new Product('TV', ProductType.NONE, 105, 150));
        this.products.push(new Product('PC', ProductType.NONE, 506, 650));
        this.products.push(new Product('Bovin français OGM++', ProductType.MEAT, 0.9, 1.5, true));
        this.products.push(new Product('Pommes de terre', ProductType.MEAT, 0.9, 1.5, true));
    }

    private fillStores(): void {
        this.stores = ['Auchi', 'Komuk', 'Totirou'].map((n, i) => new Store(n, 1900 + i, 2010 - i, ProductType.NONE), [
            this.products[0],
            this.products[2],
            this.products[3],
            this.products[5]
        ]);
    }
}

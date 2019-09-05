import * as readline from 'readline-sync';
import { Product, ProductType } from "./product";
import { Store } from "./store";
import { SellProduct } from "./sell-product";

export class Application {
    constructor(private products: Product[] = [], private stores: Store[] = []) {
        this.fillProducts();
        this.fillStores();
    }

    run() {
        if (this.login()) {
            console.log('Bienvenue');
        }
    }

    private login(): boolean {
        const name = readline.question('Quel est le nom de votre entreprise ?');

        return this.stores.some(store => store.name === name);
    }

    private login2(): boolean {
        const name = readline.question('Quel est le nom de votre entreprise ?');
        let result = false;
        let counter = 0;

        while (counter < this.stores.length && !result) {
            const store = this.stores[counter];

            if (store.name === name) {
                result = true;
            }

            ++counter;
        }

        return result;
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
        this.stores = ['Auchi', 'Komuk', 'Totirou']
            .map((n, i) => new Store(n, 1900 + i, 2010 - i, ProductType.NONE, this.generateSellProducts(n, i)));
    }

    private generateSellProducts(name: string, index: number): SellProduct[] {
        return [this.products[0], this.products[2], this.products[3], this.products[5]]
            .map(p => new SellProduct(p, p.advicedSellPrice));
    }
}

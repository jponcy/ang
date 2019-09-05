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
        const store = this.login();

        if (store) {
            console.log('Bienvenue');

            this.printMenu();

            const choice = this.askNumber('Que voulez vous faire ? (saisir un nombre entre 1 et 3)', 3);

            switch (choice) {
                case 1:
                    store.printAllProducts();
                    break;
                case 2:
                    this.addProduct(store);
                    break;
                case 3:
                    // this.removeProduct();
                    break;
            }
        }
    }

    private login(): Store|null {
        const name = readline.question('Quel est le nom de votre entreprise ?');

        return this.stores.find(store => store.name === name) || null;
    }

    private login2(): Store|null {
        const name = readline.question('Quel est le nom de votre entreprise ?');
        let result: Store|null = null;
        let counter = 0;

        while (counter < this.stores.length && result === null) {
            const store = this.stores[counter];

            if (store.name === name) {
                result = store;
            }

            ++counter;
        }

        return result;
    }

    private printMenu() {
        console.log('1. Afficher mes produits');
        console.log('2. Ajouter un produit');
        console.log('3. Retirer un produit');
    }

    private addProduct(store: Store): void {
        // Determine list of available products
        const used = store.products.map(pp => pp.product);
        const availableProducts = this.products.filter(p => !used.includes(p));

        // Print list of available products
        availableProducts.forEach((p, i) => console.log(`- ${i + 1} ${p.label}`));

        // Ask/get product (index).
        const choice = this.askNumber('Quel produit vous intéresse ?', availableProducts.length);
        const choicedProduct = availableProducts[choice - 1];

        // Ask price.
        let price = readline.question('Combien allez-vous vendre ce produit en HT (prix conseillé = ' + choicedProduct.advicedSellPrice + ')');

        // Reask number until input is valid
        while (!price.match(/^\s*(?:\d[\d\s]*(?:[.,]\d{1,2})?)?$/)) {
            console.error('Ce format n\'est pas accepté');
            price = readline.question('Combien allez-vous vendre ce produit en HT (prix conseillé = ' + choicedProduct.advicedSellPrice + ')');
        }

        price = price.replace(/\s+/g, '').replace(',', '.');

        // Create/add object.
        const newProduct = new SellProduct(choicedProduct, parseFloat(price) || choicedProduct.advicedSellPrice);
        store.products.push(newProduct);
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

    private askNumber(question: string, nbMax: number): number {
        let choice = readline.question(question);

        while (!choice.match(/^\d+$/) || +choice > nbMax || +choice <= 0) {
            console.error('La saisie n\'est pas un nombre compris entre 1 et ' + nbMax);
        }

        return +choice;
    }
}

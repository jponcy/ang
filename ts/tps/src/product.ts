import { Utils } from "./utils";

// type ProductType = 'viande'|'légume'|'non spécifique';

export enum ProductType {
    MEAT, VEGETABLE, NONE
}

export class Product {
    /* ************************************************* *\
       ***** Declarer un attribut, plusieurs façon *****
    \* ************************************************* */

    // ***** Attr publique

    // nom: string;

    // constructor(nom: string) {
    //     this.nom = nom;
    // }


    // ***** Attr prive

    // private nomInterne: string;

    // constructor(nomParametre: string) {
    //     this.nomInterne = nomParametre;
    // }

    // get nom(): string {
    //     return this.nomInterne;
    // }

    // set nom(nouveauNom: string) {
    //     this.nomInterne = nouveauNom;
    // }


    // ***** Syntaxe courte proposee par TS

    // constructor(public nom: string) {}


    /* ************************** *\
       ***** Realisation TP *****
    \* ************************** */

    _advicedSellPrice: number;
    advicedSellPriceWithTaxes: number;

    constructor(public label: string, public type: ProductType, public buyingPrice: number,
            advicedSellPrice: number, public important: boolean = false, public description: string = '') {
        this._advicedSellPrice = advicedSellPrice;
        this.advicedSellPriceWithTaxes = Utils.computeTaxes(advicedSellPrice, important);
    }

    set advicedSellPrice(price: number) {
        this._advicedSellPrice = price;
        this.advicedSellPriceWithTaxes = Utils.computeTaxes(price, this.important);
    }

    toto(price: number) {
        this._advicedSellPrice = price;
        this.advicedSellPriceWithTaxes = Utils.computeTaxes(price, this.important);

    }

    get advicedSellPrice(): number {
        return this._advicedSellPrice;
    }


    // * un nom
    // * une description
    // * un indicateur decrivant si le produit est de première nécessité
    // * un prix d'achat HT
    // * un prix de vente conseillé HT
    // * un prix de vente conseillé TTC
    // * un type de produit (viande, légume, non spécifique)
}

export class Utils {
    /** Private constructor due to utils class */
    private constructor() {}

    /**
     * Compute price without taxes.
     * @param price The price without taxes
     * @param important Tells if the price is about an essential product
     */
    static computeTaxes(price: number, important: boolean): number {
        // let result: number;

        // if (important) {
        //     result = price * 1.2;
        // } else {
        //     result = price * 1.055;
        // }

        // return result;


        // Or

        return price * (important ? 1.2 : 1.055);


        // Or --- not recomanded

        // return price * ((+important * 1.2) || 1.055);
    }
}

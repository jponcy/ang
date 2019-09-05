function convert(a: number|string): number {
    return +a;
}

export function addition(...values: Array<number|string>): number {
    return values
        .map(v => convert(v))
        .reduce((acc, v) => acc + v);
}

export function substration(...values: Array<number|string>): number {
    return values
        .map(v => convert(v))
        .reduce((acc, v) => acc - v);
}

export function mult(...values: Array<number|string>): number {
    return values
        .map(v => convert(v))
        .reduce((acc, v) => acc * v);
}

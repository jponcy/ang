// 1. Créer une fonction prennant en paramètre un tableau d'entier et affichant la somme de tous les chiffres compris entre 10 et 100
function q1Trad(values: number[]): void {
    let sum = 0;

    for (let v of values) {
        if (v >= 10 && v <= 100) {
            sum += v;
        }
    }

    console.log('La somme est ' + sum);
}

function q1Mod(values: number[]): void {
    console.log('La somme est ' + values
        // .filter(v => v >= 10 && v <= 100)
        .filter(v => v >=  10)
        .filter(v => v <= 100)
        .reduce((acc, v) => acc + v));
}
// Si [1, 100, 3, 50, 4132, 12]
// .filter(v => v >=  10) => [100, 50, 4132, 12]
// .filter(v => v <= 100) => [100, 50, 12]
// .reduce((acc, v) => acc + v)); => 162
//        acc = 100 // prend la premiere valeur car pas de valeur par defaut choisie
//        v = 50
//        acc = acc + v = 150
//        v = 12
//        acc = acc + v = 162


// 2. Créer une fonction prennant en paramètre un tableau d'éléments dont le type n'est pas défini (any[]) et qui retourne un tableau ne contenant que les chiffres présents dans le tableau fournit
function q2Trad(values: any[]): number[] {
    const result: number[] = [];

    for (let v of values) {
        if (typeof v === 'number') {
            result.push(v);
        }
        // OU (en acceptant les nombres en chaine de caractere)
        // if (!isNaN(v)) {
        //     result.push(+v); // + to convert '3' to 3
        // }
        // OU (mauvaise utilisation des exceptions, cette solution est mauvaise)
        // try {
        //     result.push(parseInt(v));
        // } catch (e) {}
    }

    return result;
}

function q2Mod(values: any[]): number[] {
    return values.filter(v => typeof v === 'number');
}

// 3. Créer une fonction donnant le nombre de chiffres divisibles par 5 fournit dans un tableau passé en paramètre
function q3Mod(values: number[]): number {
    return values.filter(v => v % 5 === 0).length;
}

function q3Trad(values: number[]): number {
    let result = 0;

    for (let v of values) {
        if (v % 5 === 0) {
            ++result;
        }
    }

    return result;
}

// 4. Créer une fonction retournant le nombre le plus petit parmis un tableau passé en paramètre
function q4Mod(values: number[]): number {
    return values.reduce((acc, v) => acc < v ? acc : v);
    // Ou.
    // return values.reduce((acc, v) => Math.min(acc, v));
}

function q4Trad(values: number[]): number|null {
    let result: number|null = null;

    if (values.length) {
        result = values[0];

        for (let i = 1; i < values.length; i++) {
            if (values[i] < result) {
                result = values[i];
            }
        }
    }

    return result;
}

// 5. Créer une fonction permettant de calculer la moyenne des valeurs parmis un tableau passé en paramètre

function q5Mod(values: number[]): number {
    return values.reduce((acc, v) => acc + v) / values.length;
}

function q5Trad(values: number[]): number {
    let result = 0;

    for (let v of values) {
        result += v;
    }

    result /= values.length;

    return result;
}

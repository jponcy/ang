const msg: string = 'Bonjour toi'

let toto = 3;
let titi: number|string = 3;

titi = 42;
titi = 'toto';


let tata: string[]|number[];
let tutu: Array<string|number>;

let tita = [1, 'toto', 3];

tita.push(4);
// tita.push(false); // Error

toto = 3;
// toto = '4';


function fn(e: any) {
    console.log(e);
}
const values = [1, 2, 3];

values.forEach(fn);
// Or
for (let e of values) {
    fn(e);
}
// Or
for (let e of values) {
    console.log(e);
}
// Or
values.forEach(e => console.log(e));
// Or (not completly equivalent)
values.forEach(console.log);

console.log(msg)


// *** SQUARE

let squares: number[];

// Boucle traditionelle
squares = [];

for (let e of values) {
    squares.push(e ** 2);
}

// Boucle moderne
squares = values.map(e => e ** 2)

// *** FIN SQUARE


// *** FILTER

let odd: number[];

// Boucle traditionelle
odd = [];

for (let e of values) {
    if (e % 2 /* === 1*/) {
        odd.push(e);
    }
}

// Boucle moderne
odd = values.filter(e => e % 2);

// *** FIN FILTER



// *** REDUCE
let sum: number|undefined;

// Boucle traditionelle
if (values.length) {
    sum = values[0];

    for (let i = 1; i < values.length; i++) {
        sum += values[i];
    }
} else {
    sum = undefined;
}
// Ou
sum = 0;

for (let e of values) {
    sum += e;
}
// sum = sum || undefined;


// Boucle moderne
sum = values.reduce((acc, e) => acc + e);
// Ou
sum = values.reduce((acc, e) => acc + e, 0);

// *** FIN REDUCE


values.forEach((e, i, list) =>
        console.log(`n°${i + 1}/${list.length} => ${e}`));

values.forEach((_, i) => console.log(i));

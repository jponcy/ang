// 1. Initialiser une variable avec la valeur 42 et afficher en console son contenu
function q1v1() {
    const v42 = 42;
    console.log(v42);
}
// Ou (anonyme)
const q1v2 = function() {
    const v42 = 42;
    console.log(v42);
}
// Ou arrow
const q1v3 = () => {
    const v42 = 42;
    console.log(v42);
}

q1v1();

// 2. Initialiser 3 variables avec : un nom, un age, le nom d'une ville. A l'aide de ces variables, nous afficherons un message utilisant toutes ces données.
function q2() {
    const nom = 'Henry';
    const age = 32;
    const ville = 'Paris';
    console.log(`${nom} habite ${ville} et a ${age} ans`);
    // Ou
    // console.log(nom + ' habite ' + ville + ' et a ' + age + ' ans');
}

q2();

// 3. Faire une boucle affichant en console les chiffres de 0 à 9
function q3() {
    for (let i = 0; i < 10; i ++) {
        console.log(i);
    }
    // Ou
    // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(e => console.log(e));
}

// 4. Faire une boucle affichant les 10 premiers chiffres paires
function q4() {
    for (let i = 0; i < 20; i += 2) {
        console.log(i);
    }
}

// 5. Reprendre les questions précédentes en convertissant les codes produits en nouvelles fonctions

// 6. Faire une fonction permettant de convertir un chiffre passé en paramètre en chaîne de caractères
function nbToString(nb: number): string {
    // return '' + nb;
    return `${nb}`;
}

// 7. Faire une fonction prennant en paramètre le prénom du personne et affichant en console "Bonjour <prenom>"
function hello(firstname: string): void {
    console.log(`Bonjour ${firstname}`);
}

// 8. Créer une fonction prennant un nombre en paramètre et affichant en console sa table de multiplication [0-9]
function mult(nb: number): void {
    for (let i = 0; i < 10; i ++) {
        console.log(`${nb} x ${i} = ${nb * i}`);
    }
}

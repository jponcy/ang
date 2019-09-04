TP Gestion catalogue
====================


Statique
--------

1. Créer un nouveau projet TS
1. Créer une classe produit, cette classe contiendra
    * un nom
    * une description
    * un indicateur decrivant si le produit est de première nécessité
    * un prix d'achat HT
    * un prix de vente conseillé HT
    * un prix de vente conseillé TTC
    * un type de produit (viande, légume, non spécifique)
1. La classe produit aura un constructeur ne permettant pas la saisie du prix de vente TTC (ce prix sera calculé en fonction du prix HT et de l'indicateur de première nécessité)
1. Créer une classe application qui initialise une liste de produits
1. Créer un modèle pour des magasins
    * un nom
    * une année de création
    * une année d'affiliation (depuis combien de temps le magasin vend nos produits)
    * une catégorie correspondant au types de produit que notre client peut vendre (catégories : vend de tout, légume, viande)
1. Adapter notre modèle pour permettre de représenter le fait que nos clients peuvent acheter nos produits. Ils pourront vendre leur produit au prix conseillé ou à un autre tarif.
1. Initialiser une liste de clients dans la classe application (ils devront avoir des produits associés).


Dynamique
---------

Nous voulons maintenant pouvoir intéragir avec le programme afin de pouvoir modifier/utiliser nos données. Nous utiliserons console.log pour afficher des informations à l'utilisateur et readline-sync pour lire ses saisies.

``` JS
// Exemple d'utilisation de readline-sync.

import * as readline from 'readline-sync';

const lastname = readline.question('Lastname?');
const firstname = readline.question('Firstname?');
console.log(`Hello ${firstname} ${lastname.toUpperCase()}`);
```

1. Installer la librairie "readline-sync"
1. Installer ses typages TS
1. Demander à l'utilisateur le nom de son entreprise. Après la réponse, nous regarderons si le nom saisie correspond bien à l'un de nos clients
    * si oui => on lui affiche un message de bienvenue
    * si non => on quitte le programme
1. Après login, afficher à l'utilisateur la liste d'action suivante :
    1. Afficher mes produits
    1. Ajouter un produit
    1. Retirer un produit
1. Implémenter "Afficher mes produits" => lister les produits (nom + description + prix de vente TTC + prix d'achat)
1. Implémenter "Ajouter un produit" => liste les produits disponibles ne faisant pas déjà parti des produit vendus par le client. On lui demandera de saisir un nombre correspondant à l'entré (le produit). Nous garderons en mémoire la nouvelle affectation.
1. Implémenter "Retirer un produit" => liste les produits actuellement vendu et permet d'en retirer un
1. Modifier "Ajouter un produit" pour ne plus lister les produits que l'entreprise ne peut pas vendre (nous n'afficherons pas les légumes à un boucher).

Projet
======

Dans un nouveau projet, créer les classes modèles (prévus dans l'UML de votre projet fil rouge) en TS.

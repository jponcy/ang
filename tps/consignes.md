TP Gestion catalogue
====================

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


Projet
======

Dans un nouveau projet, créer les classes modèles (prévus dans l'UML de votre projet fil rouge) en TS.

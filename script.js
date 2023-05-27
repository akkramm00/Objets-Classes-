// Déclarez à votre tour une classe représentant des humains.
// Pour cela, utilisez les deux manières différentes d'écrire une classe (ES5 et ES6) et mettez en place une classe Personne et une classe Humain que vous instancierez.
// Affichez votre instance dans la console.
 // Version ES5 :
 function Personne(nom, prenom, age, sexe, adresse) {

    this.nom = nom 
    this.prenom = prenom
    this.age = age
    this.sexe = sexe
    this.adresse =adresse

 }

 // Version ES6 :

 class Humain {
    constructor(nom, prenom, age, sexe, adresse ) {
        this.nom = nom 
        this.prenom = prenom
        this.age = age 
        this.sexe = sexe
        this.adresse =adresse
    }
 }

 let personne1 = new Personne()
 console.log(personne1)

 let personne2 = new Humain()
 console.log(personne2)
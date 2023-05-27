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
//  Instanciation un nouvel objet et affichons les propriétés de celui-ci.

let personne = new Personne('Doe', 'John', 31, 'M', 'Rue du JavaScript')
console.log(personne.nom, personne.prenom, personne.age, personne.sexe, personne.adresse)

// Modifiez les valeurs de votre objet après l'avoir initialisé.
// La nouvelle adresse sera "Rue des classes en JavaScript", tandis que l'âge vaudra désormais 41.

personne.age = 41
personne.adresse = 'Rue des classes en JavaScript'

console.log(personne.nom, personne.prenom, personne.age, personne.sexe, personne.adresse)

//===================================================================================================================================================

//  À ce niveau, nos propriétés ne possèdent pas de valeurs.
// Nous pouvons leur en attribuer une soit de manière statique à l'intérieur de la classe, soit en passant un paramètre à notre fonction constructeur.

// Version ES5
function Voiture(moteur, roues, carroserie) {
    this.moteur = moteur
    this.roues = roues
    this.carroserie = carroserie
    this.volant = 'sport'
  }
  
  let voiture = new Voiture('1.6L', 4, 'Berline')

  //======================== ES6 ==========================

  // Version ES6
class Voiture{
    constructor(moteur, roues, carroserie) {
      this.moteur = moteur
      this.roues = roues
      this.carroserie = carroserie
      this.volant = 'sport'
    }
  }
  
  let Voiture = new Voiture('1.8L', 4, 'Break')

//   Passer des paramètres à notre objet se fait lors de l'instanciation, de la même manière que nous passons des paramètres à une fonction classique.
// Ils doivent être ensuite associés aux propriétés souhaitées à l'intérieur de la classe. 
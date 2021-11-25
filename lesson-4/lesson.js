// Initiation Javascript - Leçon n°4: Les objets (bases)

// Les objets sont des structures des données complexes
// Ils peuvent retenir plusieurs informations dans leurs propriétés
const personne1 = {
    prenom: 'Sylvain',
    nom: "Schellenberger",
    anneeDeNaissance: 1990
}
console.log(typeof personne1)

// Je peux ensuite appeler chaque propriété individuellement
console.log(personne1.prenom)
console.log(personne1.nom)

// Je peux modifier les propriétés (même si l'objet est dans une constante)
personne1.nom = 'Dupont'
console.log(personne1.nom)

// Je peux rajouter une propriété à la volée (mais ce n'est pas conseillé)
personne1.cheveux = 'brun'
console.log(personne1.cheveux)

// Je peux également assigner des fonctions dans les propriétés d'un objet
// On parle alors de "méthode" d'un objet
personne1.disBonjour = function() {
    console.log('Bonjour tout le monde!')
}

personne1.disBonjour()

// Dans une méthode, le mot-clé this représente l'objet lui-même
personne1.presentation = function () {
    console.log('Bonjour je m\'appelle ' + this.prenom )
}

personne1.presentation()

// Je peux me servir des méthodes pour manipuler les propriétés de l'objet
personne1.diplomeNiveau = 5

personne1.obtiensDiplome = function (niveau) {
    this.diplomeNiveau = niveau
}

console.log(personne1.diplomeNiveau)

personne1.obtiensDiplome(4)
console.log(personne1.diplomeNiveau)

personne1.obtiensDiplome(5)
console.log(personne1.diplomeNiveau)





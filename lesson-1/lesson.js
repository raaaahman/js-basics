// Javascript leçon n°1 - Les bases

// Ce code est un commentaire, il n'a pas d'effet durant l'exécution du programme.
// Je m'en sert pour vous donner des informations

console.log('Hello World!')
// Ouvrez votre console (ctrl+shift+k sur Firefox et Chrome, ou clic droit > plus d'outils > outils de développement > console)
// Que voyez-vous?

// Ici je déclare deux constantes et je leur affecte des valeurs
// Ces valeurs sont des chaînes de caractères
const prenom = 'Sylvain'
const nom = "Schellenberger"

// Je peux ensuite les appeler dans le code
console.log(prenom)

// Avec l'opérateur "+", je peux concaténer deux chaînes
// La première est écrite "en dur", alors que la deuxième est contenue dans la variable "prenom"
console.log('Je m\'appelle ' + prenom)

// Je peux aussi affecter des nombres à mes constantes
const anneeDeNaissance = 1990

// L'opérateur typeof me permet de connaître le type de valeur affecté à mes constantes
console.log(typeof prenom)
console.log(typeof anneeDeNaissance)

// Si j'utilise l'opérateur "+" sur une cha$ine et un nombre,
// Le nombre est converti en chaîne de caractères équivalente.
console.log('Je suis né en ' + anneeDeNaissance)

// Je ne peux pas changer la valeur d'une constante!
anneeDeNaissance = 2021

// Ici, je déclare une variable
// Je ne suis pas obligé de lui affecter une valeur tou de suite
let age

console.log(age)

// Je peux changer la valeur d'une variable autant que je veux
age = 0
console.log(age)
// Je peux effectuer des opérations mathématiques sur les nombres
age = 2021 - anneeDeNaissance
console.log(age)

// L'expression à droite du signe "=" est une "comparaison"
let majeur = age > 18

// Le résultat d'une comparaison est toujours un "booléen"
console.log(majeur)
console.log(typeof majeur)

// L'expression suivante est une structure conditionnelle
// Le bloc de code (entre "{ }") qui suit n'est exécuté 
// que si la condition (entre "( )") vaut "true"
if (majeur) {
    'Je suis majeur'
} else {
    'Je suis mineur'
}



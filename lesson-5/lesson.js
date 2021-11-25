// Leçon n°3: Les tableaux (bases)

// Un tableau peut contenir plusieurs éléments
const listeDesCourses = [
    'Jus d\'orange',
    'Chocolat',
    'Bananes'
]

// Je peux retrouver chaque valuer d'un tableau par sa clé
// Cette clé correspond à l'ordre qu'occupe l'élément dans le tableau
// En commençant par 0
console.log(listeDesCourses[0])
console.log(listeDesCourses[1])
console.log(listeDesCourses[2])

// La clé "3" correspondrait donc au quatrième élément, mais il n'exsite pas encore!
console.log(listeDesCourses[3])

// Je peux ajouter des éléments au tableau après sa déclaration
listeDesCourses.push('Patates')

// Ou directement en l'assignant à une clé spécifique
listeDesCourses[4] = 'Yaourts'

// Ce qui peut m'amener à écraser une valeur déjà existante
// (Même si le tableau est déclaré dans une constante!)
listeDesCourses[4] = 'Dentifrice'
console.log(listeDesCourses[4])

// Je peux connaître le nombre d'éléments dans le tableau
// grâce à sa propriété 'length'
console.log('Je dois acheter ' +  listeDesCourses.length + ' objets.')

// Du coup je peux utiliser une boucle pour connaître tous les éléments du tableau
for(let i = 0; i < listeDesCourses.length; i++) {
    console.log(i, listeDesCourses[i])
}

// Je peux aussi retirer un élément du tableau
// Celui-ci va être affecté à la variable
let dernier = listeDesCourses.pop()

console.log(listeDesCourses.length + ' objets')
console.log('Retiré: ' + dernier)

console.log(`Tableau 1: ${listeDesCourses.length} objets.`)

const tachesAFaire = [
    'Vaiselle',
    'Lessive',
    'Devoirs de HTML'
]
console.log(`Tableau 2: ${tachesAFaire} objets.`)

// Je peux concaténer deux tableaux en un
const superTableau = listeDesCourses.concat(tachesAFaire)

console.log(`Tableau 3: ${superTableau.length} objets.`)
for( let i = 0; i < superTableau.length; i++) {
    console.log(superTableau[i])
}

// Je peux diviser un tableau en deux
// Le premier chiffre est la clé du premier élément que j'enlève
// Le second chiffre est le nombre d'éléments que j'enlève
const moitie = superTableau.splice(0, 3)

console.log(`Tableau 3: ${superTableau.length} objets.`)
console.log(`Tableau 4: ${moitie.length} objets.`)


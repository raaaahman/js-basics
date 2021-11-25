// Initation Javascript - Leçon n°2: Les structures de contrôle

let kilometres = 0

// Attention bien différencier l'opérateur d'affectation "="
// et l'opérateur de comparaison d'égalité stricte "==="
let arrives = kilometres === 15

// L'opérateur "?" est un opérateur ternaire,
// L'expression à gauche du "?" correspond à la condition "if(arrives === true)""
// Si cette condition est évaluée à true, on utilise la valeur à la gauche du "?" ('Oui')
// Sinon on utilise la valeur à gauche des ":" ('Non')
console.log('On est arrivés? ', arrives ? 'Oui' : 'Non' )

// Le code suivant défini une boucle:
// Tant que l'expression entre parenthèeses "( )" est évaluée à "true"
// Alors le bloc de code entre les accolades "{ }" est répété
while(arrives === false) {
    console.log(kilometres + ' kilomètres à pieds, ça use, ça use...')
    console.log('1 kilomètre à pieds, ça use les souliers!')

    // Je change la valeur de la variable "kilometres",
    // Sa nouvelle valeur est la valeur qu'elle avait avant, plus 1
    kilometres = kilometres + 1
    arrives = kilometres === 15
}

// Il y a plusieurs moyen d'incrémenter une variable
let nombre1 = 0
nombre1 = nombre1 + 1
console.log('Résultat n°1:', nombre1)

let nombre2 = 0
nombre2 += 1
console.log('Résultat n°2:', nombre2)

let nombre3 = 0
nombre3++
console.log('Résultat n°3:', nombre3)
// Que constatez-vous?

// Il y a également plusieurs types de boucles
let counter1 = 1
while(counter1 <= 3) {
    console.log(counter1)
    counter1 += 1
}
console.log('Nous irons au bois.')

for(let counter2 = 4; counter2 <= 6; counter2++) {
    console.log(counter2)
}
console.log('Cueillir des cerises.')

const mois = 11

// Je peux enchaîner les conditions
if (mois == 1) {
    console.log('Janvier')
} else if (mois == 2) {
    console.log('Février')
} else if (mois == 3) {
    console.log('Mars')
} else if (mois == 4) {
    console.log('Avril')
} else if (mois == 5) {
    console.log('Mai')
} else if (mois == 6) {
    console.log('Juin')
} else if (mois == 7) {
    console.log('Juillet')
} else if (mois == 8) {
    console.log('Août')
} else if (mois == 9) {
    console.log('Septembre')
} else if (mois == 10) {
    console.log('Octobre')
} else if (mois == 11) {
    console.log('Novembre')
} else {
    console.log('Décembre')
}

// Je peux aussi l'écrire de cette manière
switch (mois) {
    case 1:
        console.log('Janvier')
        break
    case 2:
        console.log('Février')
        break
    case 3:
        console.log('Mars')
        break
    case 4:
        console.log('Avril')
        break
    case 5:
        console.log('Mai')
        break
    case 6:
        console.log('Juin')
        break
    case 7:
        console.log('Juillet')
        break
    case 8:
        console.log('Août')
        break
    case 9:
        console.log('Septembre')
        break
    case 10:
        console.log('Octobre')
        break
    case 11:
        console.log('Novembre')
        break
    default:
        console.log('Décembre')
}


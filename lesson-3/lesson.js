// Leçon n°3: Les fonctions

// Je peux déclarer une fonction,
// Je lui donne un identifiant
// Et je lui associe un bloc de code

function disBonjour() {
    console.log('Bonjour tout le monde!')
}

// Jusqu'ici, aucun message n'a été affiché dans la console
console.log("Jusqu'ici tout va bien.")

// Je peux ensuite l'appeler dans mon code
disBonjour()

// Je peux l'appeler plusieurs fois
disBonjour()
disBonjour()

// Si je définis une constante dans mon code,
// Je peux l'utiliser à l'intérieur de la fonction
// On dit que la constante est globale
let nombreGlobal = 3
console.log('X = ', nombreGlobal)

function disBonjourXFois() {
    while(nombreGlobal > 0) {
        console.log('Bonjour à tous.tes!')
        nombreGlobal--
    }
}

disBonjourXFois()

// La variable a été modifiée par la fonction
console.log('X = ', nombreGlobal)

// Si je définis la variable dans la fonction,
// Cette variable n'existe que dans la fonction
// On dit que la variable est locale à la fonction
function disBonjourNFois() {
    let nombreLocal = 4
    while(nombreLocal > 0) {
        console.log('Salut les gens!')
        nombreLocal--
    }
}

// Je ne peux pas accéder à la variable locale à l'extérieur de la fonction!
console.log(nombreLocal)

disBonjourNFois()

// Je peux rejouer la fonction, et la variable locale sera réinitialisé
console.log('Encore')
disBonjourNFois()

// Je peux déclarer un paramètre à ma fonction
// Ce paramètre définira une variable locale du même nom dans ma fonction

function disBonjourA( qui ) {
    console.log('Bonjour ' + qui)
}

// Lorsque j'appelle cette fonction, je dois lui donner un argument
// Cet argument remplacera le paramètre durant l'exécution de cette fonction
disBonjourA('Quentin')

// Cela me permet d'appeler plusieurs fois la même fonction avec des arguments différents
disBonjourA('Sarah')
disBonjourA('Lydia')

// Je peux définir autant de paramètre que je le souhaite
function disBonjourTFoisA(nombre, qui) {
    for (let i = 0; i < nombre; i++) {
        console.log(`Bonjour ${qui}`)
    }
}

disBonjourTFoisA(3, 'Mélanie')
disBonjourTFoisA(2, 'Andy')






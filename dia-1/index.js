// https://www.codewars.com/kata/5a4331b18f27f2b31f000085/

// necesito una funcion que recibe 1 string
// retornar un string con los caracteres modificados

// crear una variable donde ir guardando las nuevas letras
// recorrer la palabra o separar las letras
// fijarse si la letra iterada es vocal o consonante
// reemplazar la vocal o consonante por la letra correspondiente
// retornar la nueva palabra

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
const vowels = ['a','e','i','o','u'];

function reemplazar( palabra ){
    let nuevoString = '';
    const letras = palabra.split("")
    for (const letra of letras) {
        if( consonants.includes( letra ) ){
           const indiceConsonante =  alphabet.indexOf( letra )
           const vocal = alphabet.slice( indiceConsonante ).find( elemento => vowels.includes(elemento) )
           nuevoString += vocal || 'a'
        }else{
            const indiceVocal =  alphabet.indexOf( letra )
            nuevoString += alphabet[indiceVocal - 1] || 'z'
        }
    }
    return nuevoString;
}

console.log( "return funcion:", reemplazar("codewars") )

fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then( res => res.json())
    .then( data => console.log(data) )
    .catch(err => console.log(err))

    
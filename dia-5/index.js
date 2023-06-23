// JavaScript 
// -> tiene 1 solo hilo de ejecución
// -> Ejecuta una cosa a la vez

// sincrono
// -> que pase algo inmediatamente

// asincrono 
//-> que pase algo después de un tiempo

const $btn = document.getElementById('btn')
let personajes = "hola"
console.log( 'Inicio' )

const fnEvento = () => {
    console.log('hiciste click')
}

$btn.addEventListener( "click", fnEvento )
const request = fetch( './data.json' )
const fnThen = response => response.json()
const fnThenDos =  data => {
    personajes = data.data
    console.log( "personajes en el then", personajes )
} 
const fnSetTimeOut = () => {
    console.log('settimeout')
} 
setTimeout( fnSetTimeOut, 0 ) 


console.log(request)

request.then( fnThen )
    .then( fnThenDos )
    .catch( err => console.log(err) ) 
    
console.log( "personajes:", personajes )

console.log( 'Fin' )


 
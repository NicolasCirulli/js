console.log('Dia 4')

// funciones de orden superior
// cumplir con alguno de estos 2 requisitos
// reciba una funcion por parametro
// retorne una funcion


const numeros = [ 1, 2, 3, 4, 5]
/* console.log(numeros) */

// metodo map recibe una funcion
// Recorre un array y retorna un array nuevo
// El array nuevo tiene la misma cantidad de elementos
// 
const fnMap = currentValue  => currentValue * 10

const numerosNuevos = numeros.map( fnMap )

// [  ]
// fnMap( 1, 0, [ 1, 2, 3, 4, 5, 6, 7, 8, 9] ) -> 10
// fnMap( 2, 1, [ 1, 2, 3, 4, 5, 6, 7, 8, 9] ) -> 20
// fnMap( 3, 2, [ 1, 2, 3, 4, 5, 6, 7, 8, 9] ) -> 30
// fnMap( 4, 3, [ 1, 2, 3, 4, 5, 6, 7, 8, 9] ) -> 40
// fnMap( 5, 4, [ 1, 2, 3, 4, 5, 6, 7, 8, 9] ) -> 50
// return del nuevo array

/* console.log( numerosNuevos ) // -> [ 10, 20 , 30, 40, 50 ] */


const numerosFiltrados = numeros.every( numero => numero % 2 == 0  )
console.log( numerosFiltrados )
// [  ]
// fn( 1, 0, [ 1, 2, 3, 4, 5, 6, 7, 8, 9] ) -> false
// fn( 2, 1, [ 1, 2, 3, 4, 5, 6, 7, 8, 9] ) -> true
// fn( 3, 2, [ 1, 2, 3, 4, 5, 6, 7, 8, 9] ) -> false
// fn( 4, 3, [ 1, 2, 3, 4, 5, 6, 7, 8, 9] ) -> true
// fn( 5, 4, [ 1, 2, 3, 4, 5, 6, 7, 8, 9] ) -> false
// return del nuevo array [ 2, 4 ]

/* console.log( numeros.filter( numero => numero % 2 == 0  ) ) // -> [ 2, 4] */

// la diferencia entre si una funcion tiene parentesis o no 

/* 
    console.log( fnMap )
    console.log( fnMap(100) ) 
*/

const $btn = document.getElementById( 'btn' )

$btn.addEventListener( "click", fnEvento )
// cuando el usuario haga click -> fnEvento( event )
console.log('Después del event listener')
function fnEvento( e ){
    console.log("param e:", e )
    console.log('hiciste click')
}


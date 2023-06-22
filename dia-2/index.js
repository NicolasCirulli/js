

// tipos de datos primitivos
// string, number, boolean, undefined, null
/* console.log( typeof "hola" )
console.log( typeof 2 )
console.log( typeof true )
console.log( typeof undefined ) */

// tipos de objetos
/* console.log( typeof {} )
console.log( typeof [] )
console.log( typeof new Date() ) */

// tipo function 
/* console.log(typeof saludar) */
function saludar(){
    console.log("hola")
}

// variables

// var
// se puede redeclarar y reasignar
// var tiene scope de funcion o local


// let te permite reasignar pero no redeclarar
// let tiene scope de bloque


// const se tiene que declarar y asignar en la misma linea

const nico = {
    nombre: "Nico",
    edad: 29
}
const copiaFalsaNico = nico
/* console.log( copiaNico == nico ) */
copiaFalsaNico.apellido = "Cirulli"
console.log( nico )
console.log( copiaFalsaNico )

const copiaRealNico = {...nico}
/* console.log( copiaRealNico == nico ) */



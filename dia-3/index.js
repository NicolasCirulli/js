function findUniq( palabras ){
    palabras.sort( (a,b) => b.localeCompare(a) )
    for (let indexArray = 0; indexArray < palabras.length; indexArray++) {

        const palabra = palabras[indexArray]
        const boolDeLaPalabra = []
        for (let indexPalabra = 0; indexPalabra < palabra.length; indexPalabra++) {
            const letraActual = palabra[indexPalabra].toLowerCase()
            if(letraActual == " "){
                continue
            }
            let contadorletraActual = 0
            for (let i = 0; i < palabras.length; i++) {
                let aux = palabras[i].toLowerCase().includes( letraActual )
                if( aux ){
                    contadorletraActual += 1
                }
            }
            boolDeLaPalabra.push( contadorletraActual >= palabras.length - 1 )
        }
        console.log( boolDeLaPalabra, palabra )
        if( boolDeLaPalabra.includes( false )){
            return palabras[indexArray]
        }
        if( boolDeLaPalabra.length == 0 && palabra.replaceAll(" ", "").length == 0 && palabra != "" ){
            return palabra
        }
    }  
}

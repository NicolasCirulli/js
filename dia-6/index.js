const $titulo = document.getElementById('titulo');
const $prioridad = document.getElementById('prioridad');
const $descripcion = document.getElementById('descripcion');
const $contenedor = document.getElementById('contenedor-notas');
const $form = document.getElementById( 'form-notas' )
const $busqueda = document.getElementById( 'busqueda' )
const $checkRealizada = document.getElementById( 'check-realizadas' )
const fnReduce = (acc,act) => acc + `<div class="card border-primary">
        <div class="card-body">
        <div class="form-check form-switch">
                            <label class="form-check-label" for="check-${act.id}" data-id="${act.id} data-action="estado">Realizada</label>
                            <input class="form-check-input" ${act.estado ? "checked" : ""} value="${act.titulo}" type="checkbox" id="check-${act.id}" data-check="check-${act.id}" data-id="${act.id}" data-action="estado" >
                        </div>
        <h4 class="card-title">${act.titulo}</h4>
        <p class="card-text">${act.descripcion}</p>
        </div>
            <button class="btn btn-danger" data-id="${act.id}" data-action="eliminar" >Eliminar</button>
        </div>`
let notas = [
    {
        titulo : "preparar workshop",
        prioridad : "alta",
        descripcion : "descripcion 1",
        estado : true,
        id : 0
    },
    {
        titulo : "ir a comprar",
        prioridad : "alta",
        descripcion : "descripcion 2",
        estado : false,
        id : 1
    },
    {
        titulo : "pasear al perro",
        prioridad : "alta",
        descripcion : "descripcion 3",
        estado : false,
        id : 2
    },
    {
        titulo : "jugar al padel",
        prioridad : "alta",
        descripcion : "descripcion 4",
        estado : false,
        id : 3
    },
]
let id = 4
renderCards( notas )
const fn = event => {
    event.preventDefault()
    let aux = {
        titulo : $titulo.value,
        prioridad : $prioridad.value,
        descripcion : $descripcion.value,
        estado : false,
        id : id++
    }
    notas.push( aux )
    renderCards(notas)
}

$form.addEventListener( 'submit', fn ) // -> fn(event)




function renderCards( notas ){

    let aux  = notas.reduce( fnReduce , "" )
    $contenedor.innerHTML = aux

} 

$contenedor.addEventListener( 'click', event => {
    const data = event.target.dataset
    if( data.action == "eliminar" ){
            notas = notas.filter( nota => nota.id != data.id )
            renderCards( notas )
    }
    if( data.action == "estado" ){
            let aux = notas.find( nota => nota.id == data.id )
            aux.estado = !aux.estado
            document.getElementById( data.check ).checked = aux.estado
    }
} )


document.getElementById( 'filtros').addEventListener( "input", () => {
    console.log($busqueda.value)
    console.log($checkRealizada.checked)
    let aux = notas.filter( nota => nota.titulo.toLowerCase().includes( $busqueda.value.toLowerCase() ) )
    if( $checkRealizada.checked ){
        aux = aux.filter( nota => nota.estado )
    }
    renderCards( aux)
} )
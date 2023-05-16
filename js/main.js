class Tareas { //clase que crea el objeto donde se almacenan todas las tareas con sus descripciones y estados
    constructor(nombre) {
        this.nombre = nombre;
        this.estado = "no hecha";
    }
}
const verificacionNombre = (array, nombre, decision) => {
    if (decision === "c"){ 
        while (nombre === "" || array.some((el) => el.nombre === nombre ) === true) { // si no se ingreso ningun nombre, o el que se ingreso ya existe entra en el bucle
            if (nombre === "") {
                alert("debe colocar un nombre a su tarea");
            } else {
                alert("ya existe una tarea con ese nombre");
            }
            nombre = prompt("ponga el nombre de la tarea");
        }
    } else if (decision === "d"){
        while (nombre === "" || array.some((el) => el.nombre === nombre ) === false){ // si no se ingreso ningun nombre, o el que se ingreso no existe  entra en el bucle
            if (nombre === ""){
                alert("debe colocar un nombre a su tarea");
            } else {
                alert("no existe una tarea con ese nombre")
            }
            nombre = prompt("ponga el nombre de la tarea");
        }
    }
    return nombre;
}
const crearTarea = (array, objeto) => { //funcion que agrega tareas
    array.push(objeto); //agrega el objeto tarea al final del array
}
const mostrarTarea = (array) => {  //funcion que muestra las tareas en un alert()
    for (const el of array) { //agarra todos los elementos del array
        alert(`${el.nombre}, Estado: ${el.estado}`); //muestra las tareas y el estado
    }
}
const cumplirTarea = (array, nombre) => { //funcion que cambia el estado de las tareas de no hecho a hecho    
    let tareaCumplida = array.find((el) => el.nombre === nombre); //toma la tarea
    tareaCumplida.estado = "hecho"; //la marca como hecha
}


const array = []

let decision = prompt("que accion desea tomar?: crear tarea (C), ver tareas (V) o completar tareas (D)");

while (decision !== null) {
    if (decision === "c") { //si quiere crear una tarea
        let nombre = verificacionNombre(array, prompt("ponga el nombre de la tarea"), decision); //verifica si se ingreso o no el nombre de la tarea, en caso de que no se vuelve a pedir.
        crearTarea(array, new Tareas(nombre)); //crea el objeto tarea, con nombre y estado como propiedades
    } else if (decision === "d") { //si quiere marcar una tarea como hecha
        let nombre = verificacionNombre(array, prompt("que tarea desea marcar como hecha"), decision); //verifica si se ingreso o no el nombre de una tarea existente, en caso de que no se vuelve a pedir.
        cumplirTarea(array, nombre); //cambia el estado de la tarea
    } else if (decision === "v") {
        mostrarTarea(array); //muestra diferentes alert() con las tareas hechas y no hechas
    } else {
        alert("opcion no valida"); //muestra un alert() si el usuario no indico ninguna opcion
    }
    decision = prompt("que accion desea tomar?: crear tarea (C), ver tareas (V) o completar tareas (D) o si quiere terminar y que se borren todas las tareas oprima ESC"); //si el usuario lo desea puede poner mas tereas, revisarlas devuelta, cumplirlas, o terminar con el programa
}


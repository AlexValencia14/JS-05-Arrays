/*

Un array es un conjunto de datos que se pueden almacenar en una sola variables. Un arreglo es una estructura de datos que podemos definir como una colección de variables (que pueden ser diferentes, pero con un mismo contexto)


*/

//variables que estan "sueltas"
let nombre = "Alejandro";
let edad = 24;
let puesto = "Participante";

//Usar un array (arreglo), para juntar nuestras variables
//Agregamos los elementos al array separados por coma
let personasDeLaCH31 = ["Felipe", "Jose Angel", "Marco", "Evelyn", "Alejandro"];

//Podemos almacenar cualquier tipo de dato en un array
let cosasRandom = ["Pelota", 31, true, undefined, null];

console.log(typeof (cosasRandom));//Se imprimira objeto

//Al imprimir el tipo de dato de nuestro arreglo, obtenemos un object por que los arrays son objetos (despues veremos que tenemos muchos tipos de objetos)

//los arreglos al ser objetos, cuentan con métodos que nos permiten manipularlos

//Ya que tengo mi arreglo, como podemos acceder a esa información?
//Para mostrar la cantidad de elementos que tengo en un arreglo, usamos un metodo llamado Length


//Método length para mostrar los elementos de un array
console.log(personasDeLaCH31.length);//Primero se pone el objeto y despues el método

//Declarar un array
[5, 4, 3, 2, 1]

//inicializar un array
let cuentaRegresiva = [5, 4, 3, 2, 1];

//Acceder a un elemento en especifico utilizando los indices

console.log(personasDeLaCH31[0]);//Felipe
console.log(personasDeLaCH31[25]);//Undefined porque el elemento aun no existe

//Tambien podemos acceder a un elemento de mi arreglo por medio de una variable

//Declaro el indice en una variable
let index = 4;

//Pasoo esta variable como indice del arreglo
console.log(personasDeLaCH31[index]);//Alejandro



//Ejemplo de un array para un consultorio dental
let pacientes = [];
let dentistas = ["Dr. Smith", "Dra. Garcia", "Dr. House", "Dr. Simi"];

//Para hacer modificaciones, usamos el index para acceder al dato, y luego lo reasignamos
dentistas[3] = "Similares";

dentistas[8] = "Dr. Strange";//Se agrega en esa posicion y los que no tienen valor antes de este indice se quedan vacios

console.log(dentistas[7]);//Imprime undefined


//////////////////////////////////////////////////////////
//Funcion para imprimir asteriscos y poner una division en la informacion de la consola
function imprimirAsteriscos() {
    console.log("****************************************");
}

//Invocacion de la funcion
imprimirAsteriscos();

//Metodos de arrays
let listaDelSuper = ["Gansitos", "Coca-colas", "Arroz", "Atun", "Verduras"];

//Metodo length para conocer la longitud del array
console.log("La cantidad de elementos de mi array es de: " + listaDelSuper.length);

//Método push() para poner elementos al final de mi array
listaDelSuper.push("Jabon para ropa", "Jabon para trastes");

console.log(listaDelSuper);


//Metodo pop() para eliminar elementos del final del array
listaDelSuper.pop();

console.log(listaDelSuper);


//Agregar un elemento al principio del array con el metodo unshift
listaDelSuper.unshift("Sabritones");
console.log(listaDelSuper);

//Eliminar el primer elemento del array shift elimina elementos al principio del array
listaDelSuper.shift();
console.log(listaDelSuper);


//Saber la posicion de las verduras
console.log(listaDelSuper.indexOf("Verduras"))


//Metodo splice para agregar, eliminar o reemplazar elementos

//nombreArreglo.splice(inicio, cantidadElementosAEliminar, elementosAInsertar, elementosAInsertar2,...)

listaDelSuper.splice(2, 0, "Cacahuates", "Manzana");//Agrego los dos elementos y desplazo los demas, los cacahuates se colocaron en la posicion 2

listaDelSuper.splice(5, 2, "Platano");//Elimino la posicion numero 5 y la 6 y en su lugar se coloco platano


//Metodo .map()

let numeros = [1, 2, 3, 4, 5];

//Crear otro arreglo con los numeros multiplicados x2 [2, 4, 6, 8 ,10]

let numerosPor2 = numeros.map(function (numero) {
    return numero * 2;
})

console.log(numerosPor2);



/*

Imaginemos que tenemos un array de pacientes. Este array tiene datos registrados como nombre, edad. Necesitamos modificar este arreglo para que revisemos la edad de cada paciente, y si la edad es mayor a 40 años, el paciente necesita una atencion especial.

    Aspectos a considerar

    - 2 arreglos (original y el modificado)
    - condicion if
    - funcion para agregar el nuevo dato de cada elemento
    - metodo map()

*/

//Arreglos de pacientes original
let pacientesConsultorio = [{
    nombre: "Alejandro", edad: 24
},
{
    nombre: "Fatima", edad: 26
}, {
    nombre: "Jesus", edad: 51
}]


//Funcion para agregar el texto Necesita atencion especial
function agregarEstadoSalud(paciente){
    let estado ="Saludable";

    //Si el paciente tiene más de 40 años
    if (paciente.edad>40){
        estado="Necesita atención especial"
    }
    return {
        ...paciente, //Crear una copia del paciente
        estadoSalud: estado,//para agregar un nuevo campo o variable (como la edad o el nombre)
    };
}

//vamos a aplicar la función en cada elemento del arreglo con el map

let pacientesConsultorioConEstado=pacientesConsultorio.map(agregarEstadoSalud);

console.log(pacientesConsultorio);
console.log(pacientesConsultorioConEstado);
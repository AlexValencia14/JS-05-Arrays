/*sistema para registrar pacientes y citas de estos pacientes, utilizando metodos de array


Lista de cosas para hacer/ cosas para tomar en cuenta

- Un array para pacientes
- Un array para citas

- prompt para registrar los datos
- Datos a registrar: nombre, apellido, fecha, edad, hora, especialista
- Función registrarPaciente
- Function registrarCita
- Métodos para modificar los arrays (push, forEach, splice)


*/

//Crear un array para almacenar mis pacientes

//la variable pacientes esta declarada e inicializada (tiene un nombre, y tiene un valor, a pesar de que su arreglo este vacio)

//los indices del arreglo estan undefined, porque no hay elementos pero si hay espacios disponibles
let pacientes=[];//pacientes = definido


//funcion para registrar un nuevo paciente
//paso 1: Ejecución de mi función. Pido dos datos
function registrarPaciente(nombre, edad){

    //crear un array dentro de otro array
    //paso 2: guardo cada par de datos (nombre y edad en una variante llamada paciente)
    let paciente={nombre, 
        edad, 
        cita:[]
    };

    //Agregar paciente al array
    //paso 3: ya que tengo el par de datos, le hago un push a mi array para guardar al paciente
    pacientes.push(paciente);

    return paciente;
}

// funcion para registrar citas de un paciente

//Cuando ejecuto mi funcion, necesito un paciente, una hora y una fecha para registrar la cita
function registrarCita(paciente,fecha, hora){
    //Cuando tenga estos datos, buscare dentro del paciente el apartado citas para hacerle un push ahí
    paciente.cita.push(
        {
            fecha,
            hora
        }
    );
}


//Funcion para mostrar la información del paciente con su cita
function mostrarInfoPaciente(paciente){
    console.log("Nombre del paciente: "+paciente.nombre);
    console.log("Edad del paciente: ",paciente.edad);
    console.log("Citas registradas: ");

    //forEach para imprimir citas 
    paciente.cita.forEach((citas, indice)=>{
        console.log("Indice: "+indice+" Fecha: "+citas.fecha+" hora: "+citas.hora);
    })
}


/*Funcionamiento del forEach anterior
paso 1: Definir una variable temporal llamada cita y otra variable temporal llamada indice
paso 2: Cada que se ejecute el forEach, busca y encuentra una cita, asigna esa información a las variables temporales e imprime la información.
paso 3: Vuelve a buscar y encontrar otra cita, reasigna esa información a las variables temporales*/




//Registra un paciente desde la invocación de la función
let paciente1=registrarPaciente("Alejandro",24);
let paciente2=registrarPaciente("Naruto",20);
let paciente3=registrarPaciente("Dr. Simi",50);

//Registrar la cita de un paciente desde la invocación de la función registrarCita
registrarCita(paciente1,"2023-09-12","1:00 PM");

//Mostrar informacion del paciente
mostrarInfoPaciente(paciente1);
mostrarInfoPaciente(paciente2);
mostrarInfoPaciente(paciente3);



/*ForEach

Es un metodo de array que tiene como objetivo iterar o recorrer cada elemento del array con la finalidad de aplicarle una función establecida.

Generalmente el for each se utiliza para imprimir la información del arreglo.

Sintaxis ForEach

array.forEach( function(Elemento, indice, arreglo))

- elemento: el elemento actual del arreglo que se esta procesando
- indice: la posicion del elemento actual en el array
- arreglo: el array que se esta recorriendo (opcional)

    Ejemplo del supermercado

- elemento: producto que compre y que esta en el carrito
- indice: la posicion del producto
- arreglo: carrito del super (opcional)

*/

let carritoSuper=["Manzanas", "papitas", "huevo", "jabon de trastes", "pan"];

//oye JS, para cada elemento del tipo "producto" que tenga una posicion dentro del arreglo llamado "carritoSuper", vamos a hacer algo
carritoSuper.forEach(function(producto, indice){
    console.log("Producto: "+ producto+" con la posicion: "+indice);
});

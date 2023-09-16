//Inicializar variable con el numero de competidores
let numeroCompetidores = 5

//Nombre de los competidores, ordenandolos de acuerdo con la posición inicial en la que se encuentran
let corredoresEnOrden = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];


console.log(corredoresEnOrden);

console.log("Despues de tres vueltas");

//Se crea una función que mueve a un competidor delante de otro
function adelantar(nombreCompetidorQueAdelanta, nombreCompetidorAdelantado) {
    //Se busca el indice de la posición donde el competidor que adelanto, estaba
    let indiceEliminar = corredoresEnOrden.indexOf(nombreCompetidorQueAdelanta);
    //Se elimina de esa posición
    corredoresEnOrden.splice(indiceEliminar, 1);

    //ahora se obtiene el indice del competidor al que adelanto
    let indiceAdelantado = corredoresEnOrden.indexOf(nombreCompetidorAdelantado);
    //Se coloca el que adelanta enfrente del que fue adelantado
    corredoresEnOrden.splice(indiceAdelantado, 0, nombreCompetidorQueAdelanta);
}

//funcion que elimina a los competidores que fueron lesionados
function lesionar(competidorLesionado) {
    //Se busca la posicion del competidor lesionado
    let indiceEliminar2 = corredoresEnOrden.indexOf(competidorLesionado);
    //Se elimina competidor
    corredoresEnOrden.splice(indiceEliminar2, 1);
}

//funcion que mueve de posición a una persona que descendio
function bajarPosicion(competidorQueDesciende, posiciones) {
    //Se busca el indice donde estaba el competidor que descendio
    let indiceDescenso = corredoresEnOrden.indexOf(competidorQueDesciende);
    //Se elimina de esa posición
    corredoresEnOrden.splice(indiceDescenso, 1);
    //Se agrega en la posición actual
    corredoresEnOrden.splice(indiceDescenso + posiciones, 0, competidorQueDesciende);
}

//Se realizan las operaciones utilizando las funciones descritas
adelantar("Jorge", "Roberto");
console.log(corredoresEnOrden);
adelantar("Ramiro", "Jorge");
console.log(corredoresEnOrden);
lesionar("Roberto");
console.log(corredoresEnOrden);
bajarPosicion("Andrea", 1);
console.log(corredoresEnOrden);
corredoresEnOrden.splice(4, 0, "Jose");
console.log(corredoresEnOrden);



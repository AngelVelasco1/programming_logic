/* Basic Example */
const successMsg = () => { // Callback Funcion
    console.log("The process was succesfully");
}
const errorMsg = () => { // Callback Funcion
    console.log("Error");
}

const createRandomNumbers = (callback, callbackError) => { // Main Funcion
    const number = ~~(Math.random() * 50) + 1;
    (number > 25) ? callback() : callbackError();
    console.log(number);
}
createRandomNumbers(successMsg, errorMsg)

/* Advanced Example 
 * Crea un simulador de pedidos de un restaurante utilizando callbacks.
 * Estará formado por una función que procesa pedidos.
 * Debe aceptar el nombre del plato, una callback de confirmación, una
    * de listo y otra de entrega.
 * - Debe imprimir un confirmación cuando empiece el procesamiento.
 * - Debe simular un tiempo aleatorio entre 1 a 10 segundos entre
    * procesos.
 * - Debe invocar a cada callback siguiendo un orden de procesado.
 * - Debe notificar que el plato está listo o ha sido entregado.
*/
function checkOrder(dishName) {
    console.log(`The ${dishName} is confirmed to process`);
}

function readyOrder(dishName) {
    console.log(`The ${dishName} is ready`);
}

function deliverOrder(dishName) {
    console.log(`The ${dishName} was deliver`);

}

function manageOrders(dishName, callCheck, callReady, callDeliver) {
    const randomTime = Math.floor(Math.random() * 1000) + 1
    let counter = 0;
    setTimeout(() => {
        callCheck(dishName)
        const readyOrder = setInterval(() => {
            callReady(dishName)
            if (counter >= 1) {
                clearInterval(readyOrder)
            }
        }, randomTime)
        const deliverOrder = setInterval(() => {
            callDeliver(dishName)
            if (counter >= 1) {
                clearInterval(deliverOrder)

            }
        }, randomTime)
        counter++
    }, randomTime)
}

manageOrders("Pizza Barbacoa", checkOrder, readyOrder, deliverOrder)
manageOrders("Pizza 4 Quesos", checkOrder, readyOrder, deliverOrder)
manageOrders("Pizza Margarita", checkOrder, readyOrder, deliverOrder)
manageOrders("Pizza con Piña", checkOrder, readyOrder, deliverOrder)
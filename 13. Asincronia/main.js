
/* Asyncronous function with custom time execution */
const asyncronousProcess = async (name, time) => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(name)
        }, time)
    })
}

const measureProcessTime = (name, time) => {
    const startTime = performance.now()

    const resultFunction = asyncronousProcess(name, time);

    const endTime = performance.now()
    const totalTime = endTime - startTime;

    console.log(`Starts in ${startTime} milseconds`);
    console.log(`Ends in ${endTime} milsecods`);
    console.log(`Process duration: ${totalTime} milseconds`);

    return resultFunction;
}

measureProcessTime("Angel", 2000)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error.message);
    })


/* Extra */
/* 
* Utilizando el concepto de asincronía y la función anterior, crea
* el siguiente programa que ejecuta en este orden:
 * - Una función C que dura 3 segundos.
 * - Una función B que dura 2 segundos.
 * - Una función A que dura 1 segundo.
 * - Una función D que dura 1 segundo.
 * - Las funciones C, B y A se ejecutan en paralelo.
 * - La función D comienza su ejecución cuando las 3 anteriores han finalizado.
*/

const functionC = async () => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Function C executed")
        }, 3000)
    })
}
const functionB = async () => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Function B executed")
        }, 2000)
    })
}
const functionA = async () => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Function A executed")
        }, 1000)
    })
}
const functionD = async () => {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve("Function D executed")
        }, 1000)
    })
}

Promise.all([functionC, functionB, functionA])
    .then(data => console.log(data))


functionD()
    .then(data => console.log(data))
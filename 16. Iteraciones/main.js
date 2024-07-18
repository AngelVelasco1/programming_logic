/* Emplea 3 mecanismos diferentes para imprimir números del 1 al 10 mediante iteración */

// 1. for
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. while
let counter = 1;
const limit = 10
while(counter <= limit) {
    console.log(counter);
    counter++
}

/* 3. for of(arrays) */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (number of numbers) {
 console.log(number);
}

/* DIFICULTAD EXTRA (opcional):
 * Escribe el mayor número de mecanismos que posea tu lenguaje
 * para iterar valores. ¿Eres capaz de utilizar 5? ¿Y 10? 
*/

/* for in (objects) */
const users = {
   name: "Juan",
   age: 17
}

for(key in users) {
    console.log(key, users[key]);
}

/* forEach (ejecuta una funcion en cada elemento de un array) */
numbers.forEach(number => {
    console.log(number);
})

/* map (crea un nuevo array con la funcion aplicada a cada elemento, ideal para trasnformar elementos) */
const exponentialNumbers = numbers.map(number => number ** 2)
console.log(exponentialNumbers);

/* for await (iterar sobre objetos asincronos) */
async function fetchData() {
    const urls = ['url1', 'url2', 'url3']

    for await (const url of urls) {
        const response = await fetch(url);
        const data = await response.json()
        console.log(data);
    }
}
fetchData()
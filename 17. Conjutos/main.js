/* EJERCICIO:
 * Crea un conjunto de datos y realiza las siguientes operaciones (debes utilizar una estructura que las soporte):
 * - Añade un elemento al final.
 * - Añade un elemento al principio.
 * - Añade varios elementos en bloque al final.
 * - Añade varios elementos en bloque en una posición concreta.
 * - Elimina un elemento en una posición concreta.
 * - Actualiza el valor de un elemento en una posición concreta.
 * - Comprueba si un elemento está en un conjunto.
 * - Elimina todo el contenido del conjunto.
*/

const data = [5, 10, 20, 40, 50]
data.push(10) // - Añade un elemento al final
data.unshift(1) // - Añade un elemento al inicio
data.push(5, 10, 55) // - Añade varios elementos en bloque al final.
data.splice(1, 0, "New item", "Second new item", "Third new item") // - Añade varios elementos en bloque en una posición concreta.
data.splice(1, 1) // - Elimina un elemento en una posición concreta
data.splice(2, 1, "Third Updated item") // - Actualiza el valor de un elemento en una posición concreta.
const validateIfItemExist = data.some((value) => value === "Third Updated item") // - Comprueba si un elemento está en un conjunto.
data.splice(0, data.length) // - Elimina todo el contenido del conjunto

/* Extra 
 * Muestra ejemplos de las siguientes operaciones con conjuntos:
 * - Unión.
 * - Intersección.
 * - Diferencia.
 * - Diferencia simétrica.
*/

let object1 = { a: 1, b: 2, c: 3 }
let object2 = { d: 4, e: 5, f: 6 }
let union1 = { ...object1, ...object2 } // -- Unión en objetos
let union2 = Object.assign({}, object1, object2) // - Unión en objetos

const numbers = [10, 5, 10, 25, 51, 1]
const numbers2 = [10, 5, 24, 1]

const intersection = new Set(numbers.filter(number => numbers2.includes(number))) // - Interseccion en arrays
console.log(intersection);

const difference = new Set(numbers.filter(number => !numbers2.includes(number))) // - Diferencia en arrays
console.log(difference);

const simetricDifference = new Set([
    ...[...numbers.filter(number => !numbers2.includes(number))],
    ...[...numbers2.filter(number => !numbers.includes(number))]
])
console.log(simetricDifference);



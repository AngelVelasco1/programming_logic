/* Expresiones regulares */
//? Son secuencias de caracteres que forma un patron de busqueda, util para validacion de formatos tales como emails, fechas, telefonos, etc.

//* - Sintaxis
const literalRegex = /patron/
const classRegex = new RegExp('patron')


//* - Ejercicio
/** Utilizando tu lenguaje, explora el concepto de expresiones regulares,
 * creando una que sea capaz de encontrar y extraer todos los números
 * de un texto. 
*/
const text = "Im 28 years old and 24 careers"
const findNumbers = /\d+/g

const numbers = text.match(findNumbers)
console.log(numbers);

//* - Extra
/* Crea 3 expresiones regulares(a tu criterio) capaces de:
 - Validar un email.
 - Validar un número de teléfono.
 - Validar una url 
*/

const myEmail = "angelgg2020@outlook.com"
const validateEmail = /\w+@[a-zA-Z_]+.+com/
const testEmail = validateEmail.test(myEmail)
console.log(testEmail);

const myPhone = "angelgg2020@outlook.com"
const validatePhone = /\w+@[a-zA-Z_]+.+com/
const testPhone = validateEmail.test(myPhone)
console.log(testEmail);

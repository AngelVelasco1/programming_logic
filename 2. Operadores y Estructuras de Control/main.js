//! Variables usadas */
const apples = true
const bananas = false;
const number = 10;
const number2 = "10";
const number3 = "10";
let owner = "Juan"
let employee = "David"

//! 1. Tipos de operadores

// --> Aritmeticos 
const sum = 5 + 5;
const subs = 10 - 4;
const mult = 25 * 1;
const div = 5 / 2;
const exp = 5 ** 2;
const mod = 10 % 2;
console.log(sum, subs, mult, div, exp, mod);

// --> Logicos 
if (apples && bananas) { // And
    console.log("We have bananas and apples");
} else if (apples || bananas) { // Or
    console.log('We only have one of the two fruits');

} else if (!apples) { // Not
    console.log('We only have bananas');

}
console.log(!10 + 4 == 14); // Not --> Niega un valor (Si es true pasa a false y viceversa)

// --> Comparacion 
const comp = number != number2 // Diferente a (No estricto)
const comp2 = number !== number3 // Diferente a (Estricto)
const comp3 = number == number2 // Igual a (No estricto)
const comp4 = number === number3 // Igual a (Estricto)
const greaterThan = number > number2 // Mayor a
const lowerThan = number < number2 // Menor a
const lowerOrEqualThan = number <= number2 // Menor o igual a

// --> Asignacion 
owner = employee // Owner is assinged employee value
console.log(owner); // David
console.log(employee);

// --> Ternario 
const userExist = true;
const validUser = (userExist) ? "Succesfull login" : "Bad News";
console.log(validUser);

// --> Nullish coalescing
//* Retorna el valor de la derecha solo si el valor de la izquierda es null o undefined
const nullValue = null ?? "This is a null value";
const undefinedValue = undefined ?? "This a undefined value"
const message = "This is a string" ?? "This is undefined or null"
console.log(nullValue, undefinedValue, message);

//? 2. Estructuras de control

//* Condicionales
// --> if 
const age = 18
const password = "1524"
if (age >= 18 && password === "1524") {
    console.log('You can pass');
} else if (age >= 18 && password !== "1524") {
    console.log("Reset your password");
} else {
    console.log('You cant pass');
}

// --> switch 
const month = 10;
switch (true) {
    case (month > 0 && month <= 4):
        console.log('Its Spring');
        break;
    case (month > 4 && month <= 6):
        console.log('Its Summer');
        break;
    case (month > 6 && month <= 10):
        console.log('Its Autum');
        break;
    case (month > 10 && month <= 12):
        console.log('Its Winter');
        break;
    default:
        console.log("Its not a month")
}

//* Bucles
// --> for 
const numbers = [1, 4, 5, 2, 24, 10, 12]
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 === 0) {
        console.log(number);
    } 
}

/* Recorrer objecto con array extenso */
const object = {
    array: new Array(1000)
};
let arrayLength = object.array.length; // --> Cacheamos la comprobacion de condicion pasandola a una variable (Mejora el rendimiento)
for(let i = 0; i < arrayLength; i++) {
    object.array[i] = 'Hola'
}
console.log(object);

// --> for each (Focus on arrays)
const fruits = ['Orange', 'Apple', 'Grapes']
fruits.forEach((fruit, index) => {
    console.log(`The contain fruit is: ${fruit} and its position is: ${index}`);
})

const nums = [10, 50, 4]
let total = 0
 nums.forEach((number) => {
    total += number
})
console.log(total);

// --> for in (Focus on objects)
const book = {
    title: 'Learning Javascript',
    author: 'Angel Velasco',
    pages: 200,
    price: 25.5
}

for(let prop in book) {
    const value = book[prop];
    console.log(`${prop} : ${value}`);
}

// -> while 
let result = 1;
let counter = 0;
while (counter < 10) {
    result *= 2 // = result = result * 2
    counter += 1
}
console.log(result);

// --> do while 
let letter;
do {
    letter = prompt("Enter the letter A")
} while (letter != 'A') {
    alert('Congratulations');
}

let evenOrOdd;
do {
    evenOrOdd = Number(prompt("Insert a number"))
    if (evenOrOdd < 0 || evenOrOdd > 100) {
        alert('The number must be between 0 and 100')
    }

} while (evenOrOdd < 0 || evenOrOdd > 100 || (evenOrOdd % 2 === 0));
if (evenOrOdd % 2 !== 0) {
    alert("It's an odd number");
}

//* Manejo de exepciones
// --> try catch
try {
    const badOperation = 10 / 0;
    console.log(badOperation);
} catch(err) {
    console.error(err.message);
}

//? Ejercicio Extra
const limit = 10
const limit2 = 55;
const isMultOf3 = (number) => {
    let sum = 0;
    const numberString = number.toString();
    for (let digit in numberString) {
        sum += parseInt(numberString[digit])
    }
    if (sum % 3 === 0) {
        return true
    }
    return false
}

for (let i = limit; i <= limit2; i++) {
    if (i % 2 === 0 && !isMultOf3(i) && i !== 16) {
        console.log(i);
    }
}
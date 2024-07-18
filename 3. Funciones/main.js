//? 1. Tipos de Funciones

//* Basicas (Por declaracion)
// --> Sin parametros ni retorno
function sayHello() {
    console.log("Hi");
}
//--> Con un parametro
function sayGoodbay(name) {
    console.log(`Bye ${name}, have a good one`);
}

// --> Con varios parametros
function sendEmail(name, message) {
    console.log(`Hi ${name}, ${message}`);
}

// --> Con parametros por default (Si no se especifica un valor)
function sendEmailDefault(name = "Unknown", message = "Inform the project in the next link: ....") {
    console.log(`Hi ${name}, ${message}`);
}
console.log(sendEmailDefault());

// --> Con retorno
function expNumber(number) {
    const num = number ** 2
    return num;
}
console.log(expNumber(5));

//* Adicionales

// --> Tipo flecha
const sum = (num1, num2) => {
    return num1 + num2
}

// --> Por expresion y anonimas
const greeting = function (name) { // Funcion anonima
    console.log(`Hi ${name}`);
}
greeting("Angel")

    // --> Autoejecutables
    (() => {
        console.log("No need execute or declarate");
    })();
((fruit) => {
    console.log(`I want an ${fruit}`);
})("Apple")

// --> Callbacks
const successMsg = () => { // Callback Funcion
    console.log("The process was succesfully");
}
const errorMsg = () => { // Callback Funcion
    console.log("Error");
}

const createRandomNumbers = (callback, callbackError) => { // Main Funcion
    const number = ~~(Math.random() * 50);
    if (number > 25) callback();
    else callbackError();
    console.log(number);
}
createRandomNumbers(successMsg, errorMsg)

// --> Clausures (Clausuras)
function counter() {
    let i = 0;  // --> let es local, cada variable que referencia es independiente

    return () => {
        console.log(`The number is ${++i}`);
    }
}
const localContext1 = counter()
const localContext2 = counter()

localContext1(); // 1
localContext1(); // 2
localContext1(); // 3

localContext2(); // 1
localContext2(); // 2

function counter2() {
    this.i = 0; // --> this es global para todas las variables de este funcion

    return () => {
        console.log(`The number is ${++i}`);
    }
}
const globalContext1 = counter2()
const globalContext2 = counter2()

globalContext1(); // 1
globalContext1(); // 2
globalContext1(); // 3

globalContext2(); // 4
globalContext2(); // 5

//? 2. Comprobacion de funcion dentro de otra funcion
// Los callbacks y claurures son ejemplos de que si se puede agregar una funcion dentro de otra.

//? 3. Variable local y global
// --> this es global
// --> let es local

//? 4. Ejercicio extra
/*
Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
  - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
  - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
  - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
  - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
  - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
*/
const limit = 1;
const limit2 = 100;
const printNumbers = (message1, message2) => {
    let counterMessages = 0;
    let counterNumbers = 0;

    for (let i = limit; i <= limit2; i++) {
        const div3 = i % 3 === 0;
        const div5 = i % 5 === 0;

        if (div5 && div3) {
            console.log(`${message1} and ${message2}`);
            counterMessages++
        } else if (div3) {
            console.log(message1);
            counterMessages++

        } else if (div5) {
            console.log(message2);
            counterMessages++

        } else {
            console.log(i);
            counterNumbers++
        }
    }
    const diffNumbersStrings = counterNumbers - counterMessages;
    return diffNumbersStrings

}

console.log(printNumbers("is divisible for 3", "is divisible for 5"));


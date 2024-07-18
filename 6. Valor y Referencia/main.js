//* Datos por valor (Primitivos)
let string = "Hi";
let number = 10;
let older = false;
let noValue = null;

//? Ejemplo
let a = 10;
let b = a; // b gets a copy of the value of a in a different memory space

console.log(a, b); // 10, 10

a = 25

console.log(a); // 25 (Value changed)
console.log(b); // 10 (Value unchanged)

//* Datos por referencia (No primitivos)
// Objetos, arrays, funciones, sets, maps, clases, etc
let obj = {
    name: "Angel"
}
let numbers = [1, 2, 5, 10]
let occupations = new Set();

//? Ejemplo
let obj1 = { name: "Andrew" }
let obj2 = obj1; // obj2 gets a reference to the obj1 sharing memory space

console.log(obj1, obj2);

obj2.name = "Julian"

console.log(obj1); // name: Julian (Property Changed)
console.log(obj2); // name: Julian (Property Changed)

//* Extra

let name = "Angel"
let lastName = "Velasco"
const dataByValue = (val1, val2) => {
    let name = val1
    val1 = val2
    val2 = name

    return { val1, val2 }

}

let days = [10, 11, 12]
let students = ["Petter", "Potter", "Puttar"]
const dataByReference = (val1, val2) => {
    let days = val1
    val1 = val2
    val2 = days

    return { val1, val2 }
}

let upsideDownValues = dataByValue(name, lastName)
let upsideDownReferences = dataByReference(days, students)

console.log(upsideDownValues);
console.log(upsideDownReferences);

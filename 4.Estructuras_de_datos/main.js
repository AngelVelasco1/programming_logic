// 1. Estructuras de datos

//* Arrays

//? Array unidimensional
const array1 = [5, 0, 1, "element"]
const array2 = new Array();
array2.push(10, 12, 25, 1, 0, 31, 24, 26)

// Acceder elementos
const firstElement = array1[0];
const firstElementOtherWay = array1.at(0)
const lastElement = array1.at(-1)

// Añadir elementos
array1[4] = "other element" // Specificing index
array1.unshift("first element") // Add at the beginning
array1.push(21) // Add at the end 
array1.splice(5, 0, "element added at index 5") // Specific index with method
array1.push("Cat", "Dog") // Can add multiple items at the time

// Eliminar elementos
array1.pop() // Delete the last item
array1.shift() // Delete the first item
array1.splice(6, 1) // Delete specific element with index
array1.splice(0, 3) // Delete multiple consecuent elements

// Actualizar elementos
array1[array1.length - 1] = "rabbit" // Update the last element (Cat -> Rabbit)

// Ordernar elementos
const orderedArray = array1.sort() // Ordered descendent (Greather to Lower)
const orderedArrayAscendent = array2.sort((a, b) => a - b) // Ordered descendent (Lower to Greater)
const orderedArrayDescended = array2.sort((a, b) => b - a) // Ordered descendent (Lower to Greater)

// Buscar elementos


//? Array multidimensional
let students = [
    ['Phoden', 21],
    ['Halland', 22],
    ['Kevin', 32]
]

// Acceder elementos
const firstItem = students[0]; // ['Phoden', 21]
const specificValue = students[0][0]; // Phoden
const kevinAge = students[2][1] // 32

// Añadir elementos
students.push(['Jack Grealish', 21]) // Add an item at the end
students[2].push("Belgium") // Add an item at specific index

//* Objetos
let customerInfo = {
    name: "Juan",
    age: 19,
    occupation: "Digital Marketer",
    email: "juangh@gmail.com"
}

// Añadir Campos
customerInfo.phone = 34874115;

// Eliminar Campos
delete customerInfo.email;

// Actualizar campos
customerInfo.occupation = "Lawyer"


//* Sets


//* Maps


//* Agenda de contactos
// - Busqueda, insercion, actualizacion, eliminacion
// - Contacto: Nombre y numero de telefono
// - Solicita operacion a realizar
// - No numeros de telefono no numericos y mayor a 11 digitos
// - Comando de salida 
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class User {
    constructor({ name, phone }) {
        this.name = name;
        this.phone = phone
    }
}

let directory = [];

const validatePhone = (number) => {
    const allowedPhone = /^\d{11}$/.test(number)
    return allowedPhone
}

const searchUser = (name) => {
    const findedUser = directory.find(user => user.name = name);

    if (findedUser) {
        console.log(`User ${findedUser.name} with phone number ${findedUser.phone}`);
    } else {
        console.log("User not found");
    }
    manageDirectory()
    return findedUser
}

const searchUserIndex = (name) => {
    const userIndex = directory.findIndex(user => user.name = name);
    return userIndex
}

const addUser = () => {
    try {
        rl.question("Insert your name ", (name) => {
            rl.question("Insert your number (Must be numeric and maximum 11 digits) ", (phone) => {
                if (validatePhone(phone)) {
                    const newUser = new User({ name, phone });
                    directory.push(newUser)
                    console.log(`User ${name} added`)
                    manageDirectory()
                } else {
                    console.log(`The phone must be numeric and maximum contain 11 digits`)
                    addUser()
                }
            })
        })
    } catch (err) {
        console.log(err.message);
    }
}

const updateUser = (name) => {
    const findedUser = directory.find(user => user.name = name);

    if (findedUser) {
        rl.question(`Insert the new phone number for ${name} `, (newNumber) => {
            findedUser.phone = newNumber
            console.log("Phone number updated ")
            manageDirectory();
        })
    } else {
        console.log("User not found");
        manageDirectory();
    }
}

const deleteUser = (name) => {
    const user = searchUserIndex(name);
    if (user !== -1) {
        directory.splice(user, 1);
        console.log(`User ${name} deleted `)
        manageDirectory();
    } else {
        console.log("User not found ");
        manageDirectory();
    }
}

const manageDirectory = () => {
    rl.question("What do you want to do: search an user (s), add and user (a), update and user (u), delete an user (d), exit the program (e) ", (option) => {
        switch(option) {
            case "s":
                rl.question("Insert the user's name ", (name) => {
                    searchUser(name);
                })
                break;
            case "a": 
                addUser()
                break;
            case "u":
                rl.question("Insert the user's name you want to update ", (name) => {
                    updateUser(name);
                })
                break;
            case "d":
                rl.question("Insert the user's name you want to delete ", (name) => {
                    deleteUser(name);
                })
                break;
            case "e": 
                console.close();
                break;
            default: 
                console.log("Operation not allowed, please try again ")
                manageDirectory()
                break;
        }
    })
}
manageDirectory()
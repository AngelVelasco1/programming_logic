//* Pilas y Colas como clase
class Stack {
    constructor() {
        this.items = []
    }

    isEmpty() {
        return this.items.length <= 0
    }

    add(item) {
        this.items.push(item)
    }

    delete() {
        if (this.isEmpty()) {
            console.log("Can't delete, there aren't elements");
        }
        return this.items.pop()

    }

    size() {
        return this.items.length
    }

    print() {
        if (this.isEmpty()) {
            console.log("There aren't elements to show");
        }
        return this.items
    }
}

class Queue {
    constructor() {
        this.items = []
    }

    isEmpty() {
        return this.items.length <= 0

    }

    add(item) {
        this.items.push(item)
    }

    delete() {
        if (this.isEmpty()) {
            console.log("Can't delete, there aren't elements");
        }
        return this.items.shift()
    }

    size() {
        return this.items.length

    }

    print() {
        if (this.isEmpty()) {
            console.log("There aren't elements to show");
        }
        return this.items
    }
}

//* Herencia
class Animal {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size
    }

    emitSound(sound) {
        console.log(sound);
    }
}

class Dog extends Animal {
    constructor(name, age, size, race) {
        super(name, age, size) // Inherit Properties 
        this.race = race // Own Properties
    }

    emitSound() {
        console.log("Guau");
    }

    showInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Size: ${this.size} metters, Race:${this.race}`);
    }
}

const myDog = new Dog("Tobi", 17, 1.5, "Pomeranean");
console.log(myDog.showInfo());
console.log(myDog.emitSound());

//* Extra
/* Implementa la jerarquía de una empresa de desarrollo formada por Empleados que
   pueden ser Gerentes, Gerentes de Proyectos o Programadores.
   Cada empleado tiene un identificador y un nombre.
   Dependiendo de su labor, tienen propiedades y funciones exclusivas de su
   actividad, y almacenan los empleados a su cargo.
*/

class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name
        this.employees = []
    }

    addEmployee(employee) {
        this.employees.push(employee)
    }

    printEmployees() {
        if(this.employees.length <= 0) {
            console.log(`There are't employees at expense of ${this.name}`);
        } else {
            for (let employee of this.employees) {
                console.log(employee.name);
            }
        }
       
    }
}

class Manager extends Employee {
    constructor(id, name, experience) {
        super(id, name)
        this.experience = experience
    }

   

    checkDealines(deadlines) {
        console.log(`${this.name} is checking the current deadline: ${deadlines}`);
    }
}

class ProductManager extends Employee {
    constructor(id, name, productType) {
        super(id, name)
        this.productType = productType;
    }


    desingProducts() {
        console.log(`I'm designing the product ${this.productType}`);
    }
}

class Developer extends Employee {
    constructor(language) {
        super()
        this.language = language
    }

    addEmployee() {
        return
    }

    readDocumentation() {
        console.log(`I'm reading ${this.language} documentation`);
    }
}

const manager = new Manager(1, "Pedro", 5)
let productManager1 = new ProductManager(2, "Ana", "Marketing product")
manager.addEmployee(productManager1)
manager.printEmployees()
manager.checkDealines("Do the head")

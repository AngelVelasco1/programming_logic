const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//* Pilas/Stacks (El ultimo elemento que se añade es el primero que se sale o elimina)
class Stack {
    constructor() {
        this.items = []
    }

    isEmpty() { // Verifica si un array esta vacio
        return this.items.length === 0
    }

    top() { // El top de un array como pila es el ultimo elemento añadido
        if (this.isEmpty()) {
            return "La pila esta vacia"
        }
        return this.items[this.items.length - 1]
    }

    size() {
        if (this.isEmpty()) {
            return "La pila esta vacia"
        }
        return this.items.length
    }

    push(item) { // Nos permite añadir un elemento nuevo al final
        this.items.push(item)
    }

    pop() { // Nos permite eliminar el ultimo elemento (Osea el top)
        if (this.isEmpty()) {
            return "La pila esta vacia"
        }
        return this.items.pop()
    }

    print() {
        return this.items
    }
}

// Browser System
class Browser extends Stack {
    constructor() {
        super()
        this.history = 0
        this.currentPage = "";
    }

    addPage(url) {
        this.items.push(url)
        this.currentPage = url
        this.history = this.size() - 1
        startNavigation()

    }

    goBack() {
        if (this.currentPage == this.items[0]) {
            console.log('Not there previous pages');
            startNavigation()
        }
        else {
            this.history--
            this.currentPage = this.items[this.history]
            console.log(`${this.currentPage}`);
            startNavigation()

        }

    }

    goAhead() {
        if (this.currentPage == this.top()) {
            console.log('Not there next pages');
            startNavigation()


        } else {
            this.history++
            this.currentPage = this.items[this.history]
            console.log(`${this.currentPage}`);
            startNavigation()
        }



    }

    showAllPages() {
        if (this.isEmpty()) {
            console.log('The arent pages to show');
        } else {
            console.log(this.print());
            startNavigation()

        }

    }
}
const myOwnBrowser = new Browser()

const startNavigation = () => {
    rl.question("Go ahead with 'next' or back with 'back'. If u want introduce a page type the name. For watch all page type 'view' For exit type 'e'", (answer) => {
        switch (answer) {
            case 'next':
                myOwnBrowser.goAhead()
                break;
            case 'back':
                myOwnBrowser.goBack()
                break;
            case 'view':
                myOwnBrowser.showAllPages()
                break;
            case 'e':
                rl.close()
                break;
            default:
                myOwnBrowser.addPage(answer)
                break;
        }
    })

}
startNavigation();


//* Colas/Queues (El primer elemento que se añade es el primero que se sale o elimina)
class Queue {
    constructor() {
        this.items = []
        this.initialIndex = 0;
    }

    isEmpty() {
        return this.initialIndex >= this.items.length;
    }

    top() {
        if (this.isEmpty()) {
            return "La cola esta vacia"
        }
        return this.items[this.initialIndex]
    }

    enqueue(item) { // (Add and element)
        this.items.push(item)
    }

    dequeue() { // shift (Extract or delete the first element)
        return this.items.shift()
    }
}

// Printer System
class Printer extends Queue {
    constructor() {
        super()
        this.currentFile = ""
    }

    addFile(file) {
        super.enqueue(file)
        this.currentFile = file
        console.log(`The file added is ${file}`);
        startPrinter()
    }

    printFile() {
        if (this.isEmpty()) {
            console.log('Not there any files to print');
            startPrinter()
        } else {
            let printedFile = super.dequeue()
            this.currentFile = super.top()
            console.log(`The file printed is ${printedFile}`);
            startPrinter()
        }
    }

    showAllFiles() {
        if (this.isEmpty()) {
            console.log('There arent files to show');
            startPrinter()
        } else {
            console.log(`The files: ${this.items}`);
            startPrinter()
        }
    }


}
const myPrinter = new Printer()

const startPrinter = () => {
    rl.question("Add any file name, print a file with 'print'. If u want watch all files type 'view'. For exit type 'e'", (answer) => {
        switch (answer) {
            case 'print':
                myPrinter.printFile()
                break;
            case 'view':
                myPrinter.showAllFiles()
                break;
            case 'e':
                rl.close()
                break;
            default:
                myPrinter.addFile(answer)
                break;
        }
    })
}
startPrinter();
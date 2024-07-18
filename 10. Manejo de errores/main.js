//? Sintaxis
function induceError() {
    throw new Error("Something was wrong") // Crear error Generico de tipo 'Error'
}

function catchError() {
    try {
        induceError()
    } catch (err) { // Atrapa el error
        console.log(`Error message: ${err.message}, Error Type: ${err.name}`); // El objeto erro contiene las propiedades message y name
    }
}

catchError()

//? Errores personalizados
class UndefinedToken extends Error {
    metadata;
    constructor(message, metadata) {
        super(message)
        this.name = "Missing Data"
        this.metadata = metadata
    }
}

function getToken(url) {
    const apiUrl = new URL(url);
    const params = apiUrl.searchParams
    const token = params.get("token")
    if(!token || token == null) {
        throw new UndefinedToken("Token not exist", {
             token,
             url
        })
    }
    console.log({ token });
}
function manageErrors() {
    try {
        getToken("https://myapi.com?")

    } catch (err) {
        if(err instanceof TypeError) {
            console.log("The URL haven't a valid structure");
        } else if (err instanceof UndefinedToken) {
            console.log(err.message, err.name, err.metadata);
        }
    }
}

manageErrors()

//? Tipos de errores existentes
const array = new Array(-1) // Range Error

console.log(a); // Reference Error
let a = 1;

function () { // Sintax Error
    console.log('hola')  
}

const average = 10;
average.reverse() // Type Error



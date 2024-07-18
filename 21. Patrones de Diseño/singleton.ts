
/* Sintax */
class Singleton {
    private static instance: Singleton // Unique static instance

    private constructor() { // Private constructor to avoid unexpected changes

    }

    public static getInstance() { // Method to get or create the unique instance
        if (!Singleton.instance) {
            Singleton.instance = new Singleton()
        }
        return Singleton.instance
    }
}
// Define instances
const singleton1 = Singleton.getInstance(); // Both constants target to the same instance
const singleton2 = Singleton.getInstance();

/* Example */
interface ISettings {
    apiUrl: string
    timeOut: number
}

type keyConfig = keyof ISettings
class Config {
    private static instance: Config;
    private settings: ISettings

    private constructor() {
        this.settings = {
            apiUrl: "https://api.example.com",
            timeOut: 5000,
        }
    }

    public static getInstance() {
        if (!Config.instance) {
            Config.instance = new Config()
        }
        return Config.instance
    }

    public get(key: keyConfig): ISettings[keyConfig] {
        return this.settings[key]
    }
    public set<K extends keyConfig>(key: K, value: ISettings[K]): void {
        this.settings[key] = value
    }
}

const config = Config.getInstance()
console.log(config.get("timeOut"));

config.set("timeOut", 100000)
console.log(config.get("timeOut"));

/*
 * DIFICULTAD EXTRA(opcional):
 * Utiliza el patrón de diseño "singleton" para representar una clase que
 * haga referencia a la sesión de usuario de una aplicación ficticia.
 * La sesión debe permitir asignar un usuario(id, username, nombre y email),
 * recuperar los datos del usuario y borrar los datos de la sesión.
*/

interface UserData {
    id: string
    username: string
    name: string
    email: string
}

class UserSession {
    private static instance: UserSession
    private id: UserData['id']
    private username: UserData['username']
    private name: UserData['name']
    private email: UserData['email']

    private constructor({ id, username, name, email }: UserData) {
        this.id = id
        this.username = username
        this.name = name
        this.email = email
    }

    public static getIntance() {
        if (!UserSession.instance) {
            UserSession.instance = new UserSession({id: '1' , username: 'Angel55', name: 'Angel', email: 'angelgg@gmail.com' })
        }
        return UserSession.instance
    }
    public set({id, username, name, email} : UserData) {
        this.id = id
        this.username = username
        this.name = name
        this.email = email

    }
    public get() {
        return `${this.id}, ${this.username}, ${this.name}, ${this.email}`
    }

    public deleteSession(): this {
        this.id =  ''
        this.name = ''
        this.username = ''
        this.email = ''
        return this
    }
}

const user1 = UserSession.IN
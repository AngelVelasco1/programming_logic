const readline = require('readline')
const console = readline.createInterface({
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
        console.question("Insert your name", (name) => {
            console.question("Insert your number (Must be numeric and maximum 11 digits", (phone) => {
                if (validatePhone(phone)) {
                    const newUser = new User({ name, phone });
                    directory.push(newUser)
                    console.write(`User ${name} added`)
                    manageDirectory()
                } else {
                    console.write(`The phone must be numeric and maximum contain 11 digits`)
                    addUser()
                }
            })
        })
    } catch (err) {
        console.log(err.message);
    }
}

const updateUser = (name) => {
    const user = searchUser(name);

    if (user) {
        console.question(`Insert the new phone number for ${name}`, (newNumber) => {
            user.phone = newNumber
            console.write("Phone number updated")
            manageDirectory();
        })
    } else {
        console.write("User not found");
        manageDirectory();
    }
}

const deleteUser = (name) => {
    const user = searchUserIndex(name);
    if (user !== -1) {
        directory.splice(user, 1);
        console.write(`User ${name} deleted`)
        manageDirectory();
    } else {
        console.write("User not found");
        manageDirectory();
    }
}

const manageDirectory = () => {
    console.question("What do you want to do: search an user (s), add and user (a), update and user (u), delete an user (d), exit the program (e)", (option) => {
        switch(option) {
            case "s":
                console.question("Insert the user's name", (name) => {
                    searchUser(name);
                })
                break;
            case "a": 
                addUser()
                break;
            case "u":
                console.question("Insert the user's name you want to update", (name) => {
                    updateUser(name);
                })
                break;
            case "d":
                console.question("Insert the user's name you want to delete", (name) => {
                    deleteUser(name);
                })
                break;
            case "e": 
                console.close();
                break;
            default: 
                console.write("Operation not allowed, please try again")
                manageDirectory()
                break;
        }
    })
}
manageDirectory()
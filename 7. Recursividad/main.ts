// Print a countdown

const coutdown = (number: number) => {
    if (number < 0) {
        return
    }
    console.log(number)
    coutdown(number - 1)
}

console.log(coutdown(10));


// Factorial
const factorialNumber = (n: number): number => {
    if (n < 0) {
        console.log('Value not allowed')
        return 0
    }
    if (n === 1 || n === 0) {
        return 1
    }
    return n * (factorialNumber(n - 1));
};
console.log(factorialNumber(5));



// Fibonacci
const Fibonacci = (position: number) => {
    if (position <= 0) {
        return 0
    }
    if (position === 1) {
        return 0

    } else if (position === 2) {
        return 1
    }
    return Fibonacci(position - 1) + Fibonacci(position - 2)
}

console.log(Fibonacci(5));

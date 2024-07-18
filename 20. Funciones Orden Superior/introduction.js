//* Abstraction 
function sumRange(min, max) { // sum every number bewtween an specific range
    let total = 0;
    for (let i = min; i <= max; i++) {
        total += i
    }
    return total
}
console.log(sumRange(2, 4));

//* Functions returns 
const checkGreaterThanTen = (num) => num > 10 // Return implicity an function
console.log(checkGreaterThanTen(11));

//* Factory and secondary return functions 
const checkGreaterThan = (greaterThanNumber) => {
    return (num) => num > greaterThanNumber // Return an function
}
const checkGreaterThanTwenty = checkGreaterThan(20) // Define a function by other main function
const checkGreaterThanThirty = checkGreaterThan(30)
console.log(checkGreaterThanTwenty(10));
console.log(checkGreaterThanThirty(31));

//* Search methods and transformations
const numbers = [10, 20, 30, 40]
const animals = ["Cat", "Dog", "Fish"]
const products = [
    {
        name: "Oats",
        price: 2000
    },
    {
        name: "Sugar",
        price: 1500
    },
    {
        name: "Roast Beef",
        price: 4000
    },
    {
        name: "Roast Chicken",
        price: 3500
    },
]
//? forEach
numbers.forEach((num) => {

})
products.forEach((product) => {
    console.log(product.name);
})

//? find

const currentDate = new Date()
console.log(currentDate);
const myBirthday = new Date('2005-09-25')

const diference = currentDate - myBirthday

const milisecondsToYears = (number) => {
    const milisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    return Math.trunc(number / milisecondsPerYear)
}

console.log(`I'm ${milisecondsToYears(diference)} years`);


/* Extra */
console.log(`${myBirthday.getUTCDate()}-${myBirthday.getMonth() + 1}-${myBirthday.getFullYear()}`);
console.log(`${myBirthday.getHours()}-${myBirthday.getMinutes()}-${myBirthday.getSeconds()}`);

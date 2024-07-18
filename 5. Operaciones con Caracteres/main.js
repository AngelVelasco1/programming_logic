function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}
console.log(disemvowel('This website is for losers LOL!'));

function nbYear(p0, percent, aug, p) {
    percent = percent / 100
    let days = 0
    while (p0 <= p) {
        p0 = Math.floor(p0 + p0 * percent + aug)
        days += 1
    }
    return days

}
console.log(nbYear(1000, 2.0, 50, 1214))
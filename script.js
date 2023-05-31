/*let js = 'amazing';
console.log(40 + 9 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let $funciton = 27;

let Person = 'Jonas';

let myFirstJob = 'Trim crew member';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);

*/

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 55);
// console.log(typeof 'hello world!');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);

// year = 1995;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 65;

// const birthYear = 1995;

// var job = 'programmer';
// job = 'software engineer';

// lastName = 'Smith';
// console.log(lastName);

// let currentYear = 2023;
// const ageJonas = currentYear - 1991;
// const ageRyan = currentYear - 1995;
// console.log(ageJonas, ageRyan);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Smith';

// console.log(firstName + ' ' + lastName);

// // Assignment operators
// let x = 10 + 5;
// x += 10;
// // This x = x + 10;
// x *= 4;
// x++;
// console.log(x);

// console.log(ageJonas > ageRyan);
// console.log(ageRyan >= 18);

// const isFullAge = ageRyan >= 18;

// console.log(currentYear - 1991 > currentYear - 2023);

// let currentYear = 2023;
// const ageJonas = currentYear - 1991;
// const ageRyan = currentYear - 1995;
// console.log(currentYear - 1991 > currentYear - 2017);

// console.log(ageJonas, ageRyan);
// const averageAge = (ageJonas + ageRyan) / 2;
// console.log(averageAge);

// CODING CHALLENGE 1

// const bmi = mass / height ** 2;
// mass in kg and height in meter

// let massMark = 78;
// let heightMark = 1.69;
// const bmiMark = massMark / heightMark ** 2;
// console.log(bmiMark);

// let massJohn = 92;
// let heightJohn = 1.95;
// const bmiJohn = massJohn / heightJohn ** 2;
// console.log(bmiJohn);

// const markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

// const firstName = 'Jonas'
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2023;

// // Old way
// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// // New way
// const newJonas = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(newJonas);

// console.log(`String
// multiple
// lines`);

const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving!🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1995;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
'use strict'
let hasDriverLicense = false;

const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('I can drive: D');

//const interface = "Audio";
//const private = 345;

//Functions - Block of codes that are resusable

function greet() {
    console.log("I'm a Software Engineer");
    console.log("I'm a Software Engineer");
    console.log("I'm a Software Engineer");
}

//Calling / running / invoking
greet();
greet();
greet();
greet();
greet();
greet();
greet();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} and ${oranges} oranges.`;

    return juice;

}

fruitProcessor(500, 10);

const appleJuice = fruitProcessor(50, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(10, 10);
console.log(appleOrangeJuice);


//Function declaration
function calcAge1(birthYear){
    return 2023 - birthYear;
}

const age1 = calcAge1(1972);

//Function Expression
const calcAge2 = function(birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(1972)
console.log(age1, age2);


//Arrow function
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    // return retirement

    return `${firstName} retires in ${retirement} years`;

}

console.log(yearUntilRetirement(1972, 'BAB'))
console.log(yearUntilRetirement(1973, 'MEGH'))

// Arrays
const friend1 = "Shaymal";
const friend2 = "Bimol";
const friend3 = "Amal";

const friends = ["Shamal", "Bimol", "Amal"];
console.log(friends);

const years = new Array(1971, 1972, 1973);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);































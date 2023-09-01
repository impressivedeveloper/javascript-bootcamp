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



























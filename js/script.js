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

























// console.log('Hello js');

// let name = 'sakwa' // string literal
// console.log(name);

// let firstName = 'js';
// let lastName ='master';
// console.log(firstName, lastName);

// const intRate = 3.3;
// intRate = 3.3;
// console.log(interestRate);

// let age = 30; //number literal

// let applicationDocs = true; //boolean literal

// let firstName = undefined;
// let lastName = null; 


// let name = 'sakwa';
// let age = 30;

let person ={
name: "sakwa",
age: 30
};

// dot notation
person.name = 'john';

// bracket notation
person ['name'] = 'Mary'

console.log(person.name);

let selectedColors =['red', 'blue'];
selectedColors[2] = 'green'
console.log(selectedColors.length); //displays blue in the console

//a function that performs a task - displays a value
function greet(name, lastName){
    console.log('hello ' + name + ' ' + lastName);
}
greet('john', 'john');
greet('mary');
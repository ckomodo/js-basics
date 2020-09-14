// // console.log('Hello js');

// // let name = 'sakwa' // string literal
// // console.log(name);

// // let firstName = 'js';
// // let lastName ='master';
// // console.log(firstName, lastName);

// // const intRate = 3.3;
// // intRate = 3.3;
// // console.log(interestRate);

// // let age = 30; //number literal

// // let applicationDocs = true; //boolean literal

// // let firstName = undefined;
// // let lastName = null; 


// // let name = 'sakwa';
// // let age = 30;

// let person ={
// name: "sakwa",
// age: 30
// };

// // dot notation
// person.name = 'john';

// // bracket notation
// person ['name'] = 'Mary'

// console.log(person.name);

// let selectedColors =['red', 'blue'];
// selectedColors[2] = 'green'
// console.log(selectedColors.length); //displays blue in the console

// //a function that performs a task - displays a value
// function greet(name, lastName){
//     console.log('hello ' + name + ' ' + lastName);
// }
// greet('john', 'john');
// greet('mary');

// //function that calculates a value
// function square (number){
//     return number * number;
// }
// // let number = square(10);
// console.log(square(5));

// alert('this is it')
// console.log(1);
// let age = 4;
// let year = 2020;
// console.log(age, year);

// age = 76;
// console.log(age)

// const cars = 6;
// console.log(cars);

// cars = 5;

var msgOne = document.querySelector(".btnOne");
var msgTwo = document.querySelector(".btnTwo");
var rstBtn = document.querySelector(".resetBtn")
function firstFunction(){
    
    msgOne = confirm("this is my first function");
    msgTwo = confirm("this is me showing off");
}
msgOne.addEventListener("click", firstFunction);
msgTwo.addEventListener("click", firstFunction);


var paragraph = document.querySelector("#para");
function secondFunction(){
    paragraph = document.querySelector("#para").textContent = "this is my first DOM-injected paragraph";
}
secondFunction();

document.querySelector("body").style.backgroundColor = "yellow";
document.querySelector("img").style.float = "right";

function resetPage (){
    rstBtn = document.querySelector("body").style.backgroundColor = "snow";
    rstBtn = document.querySelector("p").textContent = "this page has been reset";
    rstBtn = document.querySelector("img").src = "http://lorempixel.com/400/200/";
    rstBtn = document.querySelector("img").style.float = "left";
    rstBtn = document.querySelector("h1").textContent = "this is DOM 101";
    rstBtn = document.querySelector("h1").style.textDecoration = "underline";

}
rstBtn.addEventListener("click", resetPage);
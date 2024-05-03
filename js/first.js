// const input = require("readline-sync");
// const name,age= input.question.("enter your name:- ");
// console.log(name );
const input= require("readline-sync");
const name=input.question.apply("enter your name:-");
console.log("hello",name);
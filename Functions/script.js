sayMyName();

//This Function prints the name

function sayMyName() {
    var name = "Rakesh";
 console.log("My Name is", name);
 console.log("Execution Done------");
}
 console.log("Program Done");

 // Adding Parameters and Arguments
 function addTwoNumbers(num1, num2) {
// parameters (num1, num2)
const value = num1 + num2 ;
console.log(value);
 }

 //Argumets
 addTwoNumbers(13,4);
 addTwoNumbers(46,7);

 function isDivisible(num, divisor) {
  if (num % divisor === 0) {
     return true;
  } else {
    return false;
  }
  }

  // Getting values in a console
  console.log(true);
  const result = true;
  console.log(result);

  isDivisible(); //true
  console.log(isDivisible(5,2));
  const divResult = isDivisible(12,4);
  console.log(divResult);


//ES-6 (Anonymous functions)
 
let anon_func = function (param) {
    console.log("I.m anonymous function", param);
};
anon_func("new param");

//Arrow function
// we dont need to have any return key word in a single line
let arrow_func = (a,b) => a + b;
console.log("function value", arrow_func(30,10)); //40

//IIFE (Immediately invoked function)
(function callMe(name) {
    console.log("I was called", name);
}) ("Immediately");
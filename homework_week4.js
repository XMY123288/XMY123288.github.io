// write a variable that is a string and output to console (hint: it's console.log(variable name))
let myString = "Hello, my name is Yidan"
console.log(myString);
// write a variable that is a number and output to console (hint: it's console.log(variable name))
let myNumber = 66;
console.log(myNumber);
// write a variable that takes any two numbers and adds them 
let num1 = 10;
let num2 = 22;
let sum = num1 + num2;
console.log(sum);
// write a variable that takes any two numbers and subtracts them and output to console
let subtractNumbers = 22 - 10;
console.log(subtractNumbers);
// write a variable that takes any two numbers and performs a modulo that has a value of 1  and output to console 
let moduloNumbers = 13 % 5;
console.log(moduloNumbers); 
// write a variable that takes any two numbers and perform an exponential value and output to console 
let exponential = 2 ** 4;
console.log(exponential); 
// write a statement that is false using a conditional statement and output to console 
let falseStatement = 5 > 9;
console.log(falseStatement); 
// I have created an object below, output to console the value of "breed" (hint: the structure is ObjectName.value you want to call)
// the keyword "this" is self referencing the object 

let siggy = {
    breed : "cat", 
    baby: "big baby", 
    fluffy: "fluffy", 
    output: function() {

        return `Siggy is a ${this.breed} that is a ${this.fluffy} ${this.baby}`

    }
}
console.log(siggy.breed); 
// methods! You call methods the same way you call a function.  I'll call siggy.output() below. 

console.log(siggy.output()); 

// copy + paste the siggy object below and rename the variable from Siggy to an animal or name of your choice 
// then, I want you to change the object to the value of your choosing  
let myPet = {
    breed : "black cat", 
    baby: "small baby", 
    fluffy: "very fluffy", 
    output: function() {

        return `My pet is a ${this.breed} that is a ${this.fluffy} ${this.baby}`

    }
}
// console.log the values of that object one by one. 
console.log(myPet.breed); 
console.log(myPet.body); 
console.log(myPet.fluffy); 
console.log(myPet.output()); 
// create an array 
let myArray = ["a", "b", "c", "d"]
// call the value in the 3 position of this array and output to console 
let someArray = ["Ishrat", "Is", "Really", "Proud", "Of", "You"]
console.log(someArray[2]); 
// call all values in the array using a loop 
for (let i = 0; i < someArray.length; i++) {
    console.log (someArray[i]);
    
}
// what is the value of the variable ifStatement, leave your answer in the console. 

let ifStatement; 
let value = 5; 

if(value < 5)
{
    ifStatement = true;
}

else{
    ifStatement = false; 
}
console.log(ifStatement); 

// // JS Variables 1-1: Create a variable called carName, assign the value Volvo to it.
// var carName = "Volvo";
// document.write(carName);
// console.log(carName);
// // JS Variables 2-1: Create a variable called x, assign the value 50 to it.
// var x = 50;
// document.write(x);
// console.log(x);
// // JS Variables 3-1: Display the sum of 5 + 10, using two variables: x and y.
// var x = 5;
// var y = 10;
// document.getElementById("demo").innerHTML = x + y;
// var test = document.getElementById("demo").innerHTML;
// var divText = document.getElementById("myDiv").innerHTML;
// console.log(test);
// console.log(divText);
// // JS Variables 4-1: Create a variable called z, assign x + y to it, and display the result in an alert box.
// var x = 5;
// var y = 10;
// var z = x + y;
// alert(z);
// JS Variables 5-1: On one single line, declare three variables with the following names and values:
// firstName = "John"
// lastName = "Doe"
// age = 35
// var firstName = "John", lastName = "Doe", age = 35;
// console.log(firstName, lastName, age);
// JS Operators 1-1: Multiply 10 with 5, and alert the result:
// alert(10*5);
// JS Operators 2-1: Divide 10 by 2, and alert the result:
// alert(10/2);
// JS Operators 3-1: Alert the remainder when 15 is divided by 9.
// alert(15%9);
// JS Operators 4-1: Use the correct assignment operator that will result in x being 15 (same as x = x + y).
// x = 10;
// y = 5;
// x += y;
// console.log(x);
// JS Operators 5-1: Use the correct assignment operator that will result in x being 50 (same as x = x * y).
// x = 10;
// y = 5;
// x *= y;
// console.log(x);
// JS Data Types 1-1: Use comments to describe the correct data type of the following variables:
// let length = 16 // number (int)
// let lastName = "Johnson"; // string
// const x = {
//     firstName: "John",
//     lastName: "Doe"
// };                        // object
// JS Functions 1-1: Execute the function named myFunction.
// function myFunction() {
//     alert("Hello World");
// };
// myFunction();
// JS Functions 2-1: Create a function called "myFunction".
// function myFunction() {
// };
// JS Functions 3-1: Make the function return "Hello".
// function myFunction() {
//     return "Hello";
// };
// document.getElementById('demo').innerHTML = myFunction();
// JS Functions 4-1: Make the function display "Hello" in the inner HTML of an element with the ID "demo".
// function myFunction() {
//     document.getElementById('demo').innerHTML = "Hello";
// };
// myFunction();
// JS Objects 1-1: Alert "John" by extracting information from the person object.
// const person = {
//     firstName : "John",
//     lastName : "Doe"
// };
// alert(person.firstName);
// JS Objects 2-1: Add the following property and value to the person object: country: Norway.
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     country: 'Norway'
// };
// console.log(person.country);
// JS Objects 3-1: Create an object called person with name = John, age = 50.
// Then, access the object to alert("John is 50").
// const person = {
//     name : "John",
//     age : 50
// }
// alert(person.name + " is " + person.age);
// JS Events 1-1: The <button> element should do something when someone clicks on it. Try to fix it!
/* <button onclick = "alert('Hello')">Click me.</button> */
// JS Events 2-1: When the button is clicked, the function "myFunction" should be executed.
/* <button onclick = "myFunction()">Click me.</button> */
// JS Events 3-1: The <div> element should turn red when someone moves the mouse over it.
/* <div onmouseover="this.style.backgroundColor='red'">myDIV.</div> */
// JS Strings 1-1: Use the length property to alert the length of txt.
// let txt = "Hello World!";
// let x = txt.length;
// alert(x);
// JS Strings 2-1: Use escape characters to alert We are "Vikings".
// alert("We are \"Vikings\".");
// JS Strings 3-1: Concatenate the two strings to alert "Hello World!".
// let str1 = "Hello ";
// let str2 = "World!";
// alert(str1 + str2);
// JS String Methods 1-1: Find the position of the character h in the string txt.
// let txt = "abcdefghijklm";
// let pos = txt.indexOf("h");
// console.log(pos);
// alert(pos);
// JS String Methods 2-1: Use the slice method to return the word "bananas".
// let txt = "I can eat bananas all day";
// let x = txt.slice(10, 17);
// console.log(x);
// JS String Methods 3-1: Use the correct String method to replace the word "Hello" with the word "Welcome".
// let txt = "Hello World";
// txt = txt.replace("Hello", "Welcome");
// console.log(txt);
// JS String Methods 4-1: Convert the value of txt to upper case.
// let txt = "Hello World";
// txt = txt.toUpperCase();
// console.log(txt);
// JS String Methods 5-1: Convert the value of txt to lower case.
// let txt = "Hello World";
// txt = txt.toLowerCase();
// console.log(txt);
// JS Arrays 1-1: Get the value "Volvo" from the cars array.
// const cars = ["Saab", "Volvo", "BMW"];
// let x = cars[1];
// console.log(x);
// JS Arrays 2-1: Change the first item of cars to "Ford".
// const cars = ["Volvo", "Jeep", "Mercedes"];
// cars[0] = "Ford";
// console.log(cars[0]);
// JS Arrays 3-1: Alert the number of items in an array, using the correct Array property.
// const cars = ["Volvo", "Jeep", "Mercedes"];
// alert(cars.length);
// JS Array Methods 1-1: Use the correct Array method to remove the last item of the fruits array.
// const fruits = ["Banana", "Orange", "Apple"];
// fruits.pop();
// fruits.splice(-1);
// console.log(fruits);
// JS Array Methods 2-1: Use the correct Array method to add "Kiwi" to the fruits array.
// const fruits = ["Banana", "Orange", "Apple"];
// fruits.push("Kiwi")
// console.log(fruits);
// JS Array Methods 3-1: Use the splice() method to remove "Orange" and "Apple" from fruits.
// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// fruits.splice(1, 2);
// console.log(fruits);
// JS Array Sort 1-1: Use the correct Array method to sort the fruits array alphabetically.
// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// fruits.sort();
// console.log(fruits);
// JS Dates 1-1: Create a Date object and alert the current date and time.
// const d = new Date();
// console.log(d);
// alert(d);
// JS Dates 2-1: Use the correct Date method to extract the year (four digits) out of a date object.
// const d = new Date();
// year = d.getFullYear();
// console.log(year);
// JS Dates 3-1: Use the correct Date method to get the month (0-11) out of a date object.
// const d = new Date();
// month = d.getMonth();
// console.log(month);
// JS Dates 4-1: Use the correct Date method to set the year of a date object to 2020.
// const d = new Date();
// d.setFullYear(2020);
// console.log(d);
// JS Math 1-1: Use the correct Math method to create a random number.
// let r = Math.random();
// console.log(r);
// JS Math 2-1: Use the correct Math method to return the largest number of 10 and 20.
// let x = Math.max(10, 20);
// console.log(x);
// JS Math 3-1: Use the correct Math method to round a number to the nearest integer.
// let x = Math.round(5.3);
// console.log(x);
// JS Math 4-1: Use the correct Math method to get the square root of 9.
// let x = Math.sqrt(9);
// console.log(x);
// JS Comparisons 1-1: Choose the correct comparison operator to alert true, when x is greater than y.
// let x = 10;
// let y = 5;
// alert(x > y);
// console.log(x > y);
// JS Comparisons 2-1: Choose the correct comparison operator to alert true, when x is equal to y.
// let x = 10;
// let y = 10;
// console.log(x == y);
// alert(x == y);
// JS Comparisons 3-1: Choose the correct comparison operator to alert true, when x is NOT equal to y.
// let x = 10;
// let y = 5;
// console.log(x != y);
// alert(x != y);
// JS Comparisons 4-1: Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
// var age = 20;
// var voteable = (age < 18) ? "Too young" : "Old enough"; 
// console.log(voteable);
// JS Conditions 1-1: Fix the if statement to alert "Hello World" if x is greater than y.
// var x = 100;
// var y = 15;
// if (x > y) {
//     alert("Hello World");
// };
// JS Conditions 2-1: Fix the if statement to alert "Hello World" if x is greater than y, otherwise alert "Goodbye".
// var x = 8;
// var y = 9;
// if (x > y) {
//     alert("Hello World");
// } else {
//     alert("Goodbye");
// }
// JS Switch 1-1: Create a switch statement that will alert "Hello" if fruits is "banana", and "Welcome" if fruits is "apple".
// fruits = "Apples";
// if (fruits == "Banana") {
//     console.log("Hello1");
// } else if (fruits == "Apple") {
//     console.log("Welcome1");
// } else {
//     console.log("No Match");
// }
// switch(fruits) {
//     case "Banana":
//         console.log("Hello")
//         break;
//     case "Apple":
//         console.log("Welcome")
//         break;
// }
// JS Switch 2-1: Add a section that will alert("Neither") if fruits is neither "banana" nor "apple".
// fruits = "Orange";
// switch (fruits) {
//     case "Banana":
//         console.log("Match B")
//         break;
//     case "Apple":
//         console.log("Match A")
//         break;
//     default:
//         console.log("Neither")
// }
// JS For Loops 1-1: Create a loop that runs from 0 to 9.
// let i;
// for (i = 0; i < 10; i++) {
//     console.log(i);
// }
// JS For Loops 2-1: Create a loop that runs through each item in the fruits array.
// const fruits = ["Apple", "Banana", "Orange"];
// for (x in fruits) {
//     console.log(x);
// }
// JS While Loops 1-1: Create a loop that runs as long as i is less than 10.
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++
// };
// JS While Loops 2-1: Create a loop that runs as long as i is less than 10, but increase i with 2 each time.
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i = i + 2;
// };
// JS Break Loops 1-1: Make the loop stop when i is 5.
// for (i = 0; i < 10; i++) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
// }
// JS Break Loops 2-1: Make the loop jump to the next iteration when i is 5.
// for (i = 0; i < 10; i++) {
//     if (i ==5) {
//         continue;
//     }
//     console.log(i);
// }
// JS HTML DOM 1-1: Use the getElementById method to find the <p> element, and change its text to "Hello".
/* <p id="demo">This is the text</p>
<script>document.getElementById("demo").innerHTML = "Hello";</script> */
// JS HTML DOM 2-1: Use the getElementsByTagName method to find the first <p> element, and change its text to "Hello".
/* <p id="demo">This is the text</p>
<script>document.getElementsByTagName("p")[0].innerHTML = "Hello";</script> */
// JS HTML DOM 3-1: Change the text of the first element that has the class name "test".

// JS HTML DOM 4-1: Use HTML DOM to change the value of the image's src attribute.

// JS HTML DOM 5-1: Use HTML DOM to change the value of the input field.

// JS HTML DOM 6-1: Change the text color of the <p> element to "red".

// JS HTML DOM 7-1: Change the font size of the p element to 40 pixels.

// JS HTML DOM 8-1: Use the CSS display property to hide the p element.

// JS HTML DOM 9-1: Use the eventListener to assign an onclick event to the <button> element.

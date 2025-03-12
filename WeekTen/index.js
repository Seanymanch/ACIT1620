// // // // // stack - you can only take from the top. push(inserts into the stack) pop(removes the top element) and peak(returns to the top)
// // // // // values won't change if scopes are different
// // // // //

// // // // // let dogname = "rover";
// // // // // let dogweight = 23;
// // // // // if (dogweight > 20) {
// // // // //     console.log(dogname + " says WOOF WOOF");
// // // // // }
// // // // // else {
// // // // //     console.log(dogname + " says woof woof");
// // // // // }

// // // // // dogname = "Spike";
// // // // // dogweight = 53;
// // // // // if (dogweight > 20) {
// // // // //     console.log(dogname + " says WOOF WOOF");
// // // // // }
// // // // // else {
// // // // //     console.log(dogname + " says woof woof");
// // // // // }

// // // // // dogname = "Spot";
// // // // // dogweight = 13;
// // // // // if (dogweight > 20) {
// // // // //     console.log(dogname + " says WOOF WOOF");
// // // // // }
// // // // // else {
// // // // //     console.log(dogname + " says woof woof");
// // // // // }
// // // // function bark(name, weight) {
// // // //     if (weight > 20) {
// // // //         console.log(name + " says WOOF WOOF");
// // // //     }
// // // //     else {
// // // //         console.log(name + " says woof woof");
// // // //     }
// // // // }

// // // // bark("Rover", 23);
// // // // bark("Spot", 52);
// // // // bark("Spike", 13);
// // // // bark("Lady", 17);

// // // let x = 32;
// // // let y = 44;
// // // let radius = 5;

// // // let centreX = 0;
// // // let centreY = 0;
// // // let width = 600;
// // // let height = 400;

// // // function setup(width, height) {
// // //     centreX = width / 2;
// // //     centreY = height / 2;
// // // }

// // // function computeDistance(x1, y1, x2, y2) {
// // //     let dx = x1 - x2;
// // //     let dy = y1 - y2;
// // //     let d2 = (dx * dx) + (dy * dy);
// // //     let d = Math.sqrt(d2);
// // //     return d;
// // // }

// // // function circleArea(r) {
// // //     let area = Math.PI * r * r;
// // //     return area;
// // // }

// // // setup(width, height);
// // // let area = circleArea(radius);
// // // let distance = computeDistance(x, y, centreX, centreY);
// // // alert("Area: " + area );
// // // alert("Distance: " + distance);

// // let scores = [60, 50, 60, 58, 54, 54, 
// //     58, 50, 53, 54, 48, 69, 
// //     34, 55, 51, 52, 44, 51, 
// //     69, 64, 66, 55, 52, 61, 
// //     46, 31, 57, 52, 44, 18, 
// //     41, 53, 55, 61, 51, 44
// // ];

// // let i = 0;
// // let highScore = 0;
// // while(i < scores.length) {
// //     console.log("Bubble solution #" + i + " score: " + scores[i]);
// //     if(scores[i] > highScore) {
// //         highScore = scores[i];
// //     }
// //     i = i + 1;
// // }
// // console.log("Bubble tests: " + scores.length);
// // console.log("Highest Bubble Score: " + highScore);

// // let bestSolution = [];
// // for (let i = 0; i < scores.length; i ++) {
// //     if (scores[i] == highScore) {
// //         bestSolution.push(i);
// //     }
// // }

// // console.log("Solutions with the highest score: " + bestSolution);

// let numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers); // outputs: [1, 2, 3, 4, 5]

// let num = new Array(5);
// console.log(num); // avoid doing this, creates empty array with 5 elements

// // let arr = Array.of(5); // creates a single array of 5 [5]
// // console.log(arr);

// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); // [1, 2, 3, 4]
// arr.pop();
// console.log(arr); // [1, 2, 3]
// arr.unshift(0);
// console.log(arr); // [0, 1, 2, 3]
// arr.shift();
// console.log(arr); // [1, 2, 3]

// console.log(arr.indexOf(2)); // 1
// console.log(arr.indexOf(7)); // -1 (not found)

// console.log(arr.lastIndexOf(2)); // 1

// console.log(arr.includes(2)); // checks if an element exists or not

// arr.splice(2, 1, 10, 20); // [1, 2, 10, 20]
// console.log(arr);

// console.log(arr.slice(1, 3)); // [2, 10]

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let combined = arr1.concat(arr2);
// console.log(combined); // [1, 2, 3, 4, 5, 6]

// let words = ["Hello", "world!"];
// console.log(words.join(" ")) // "Hello world!"

// let sentence = "JavaScript is fun";
// let wordsArray = sentence.split(" "); // ["JavaScript", "is", "fun"]

// function add(a, b) {
//     return a + b;
// }

// console.log(add(2, 3));

// const add = (a, b) => a + b;
// console.log(add(2, 3));

const multiply = (a, b) => {
    console.log(`Multiplying ${a} and ${b}`);
    return a * b;
};

console.log(multiply(4, 5)); // 20

const square = x => x * x;
console.log(square(6)); // 36

const greet = () => "Hello, World";
console.log(greet()); // Hello, World
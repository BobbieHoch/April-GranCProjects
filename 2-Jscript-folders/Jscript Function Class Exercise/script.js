
    // for (let i=1< 10; i++){
    //     console.log(i);
    // }
// }

//create a function that takes an arrya of numbers and prints out the numbers in the array.
//Use an arrow function

// const printNumbers = (numberArray) => {
//     for (let number of numberArray){
//         console.log(number);
//     }
// }
// const: numberArray = [
//     1,2,3,4,5,6,7,8,9,
// ]
// const printNumbers = (numberArray) => {
//     for (let i = 0 ; i < numberArray.length, i++)}
//         console.log(numberArray[i]);
//     }

// const numberArray = [
//     1,2,3,4,
// ]

// printNumbers([1,2,3,4]);
// printNumbers([7,5,6,2,9])

// Create a function that takes a parameter of an array of numbers and return the sum of all the numbers in the array.
// Function name is sumArray.
// Parameter name is numbers.
// sumArray([1,2,3,4]) //return 10


// function sumArray (numbers) {
//     let sum = 0;
//     for(let i=0; i < numbers.length; i++) {
//     sum += numbers[i];
//     }
//     console.log(sum);
// }
// sumArray([12,25,35,41])
// sumArray([1,2,3,4])

// function checkLeapYear (year) {
//         if (year % 4===0 && year % 100 !== 0 || year % 400 === 0) 
//             return console.log(`Year ${year} is a leap year');
//    else {
//      return console.log('Year ${year} is not a leap year".`) }

// checkLeapYear(2014)
// // checkLeapYear(2016)

function evalNumbers(num1, num2, operation) {
    if (operation ==="add") {
        let outCome = num1 + num2
        return 'Sum of ${num1} and ${num2} is ${outcome}.';
    }
    else if(operation === "subtract"){
        let outCome = num1 - num2
        return 'Difference of ${num1} and ${num2} is ${outcome}.';
    }
    else if(operation === "multiply"){
        let outCome = num1 * num2
        return 'Product of ${num1} and ${num2} is ${outcome}.';
    }
     else if(operation === "divide"){
            let outCome = num1 / num2
            return 'Division of ${num1} and ${num2} is ${outcome}.';
    }
    else if(operation === "modulus"){
        let outCome = num1 % num2
        return 'Modulus of ${num1} and ${num2} is ${outcome}.';
    }
    else if(operation === "square"){
        let outCome = num1 + num2
        return 'Square is an invalid operation.';
 }
    console.log(evalNumbers(15, 10, "add")              // "Sum of 15 and 10 is 25"
    // console.log(evalNumbers(6, 4, "subtract")         // "Difference of 20 and 8 is 12"
    // console.log(evalNumbers(8, 3, "multiply")        // "Product of 12 and 4 is 48"
    // console.log(evalNumbers(24, 6, "divide")         // "Division of 28 and 7 is 4"
    // console.log(evalNumbers(22, 3, "modulus")        // "Modulus of 22 and 3 is 1"
    // console.log(evalNumbers(24, 24, "square"))     // "square is an invalid operation"
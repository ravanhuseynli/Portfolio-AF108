// ----------------- TASK 1 ---------------------

// function calculator(a, b, operator) {
//     if (operator === "+") {
//         return a + b;
//     } else if (operator === "-") {
//         return a - b;
//     } else if (operator === "*") {
//         return a * b;
//     } else if (operator === "/") {
//     } else {
//         alert("Duzgun yazda");
//         return;
//     }
// }

// let num1 = Number(prompt("Birinci ədəd:"));
// let num2 = Number(prompt("İkinci ədəd:"));
// let operator = prompt("Operator:");

// let result = calculator(num1, num2, operator);

// alert("Neticr" + result);

//------------------- TASK 2 ----------------------

// function sum (...numbers) {

//     let odd = 0;
//     let even = 0;

//     for (let i = 0; i < numbers.length; i++) {

//         if (numbers[i] % 2 == 0) {
//             even++
//         }
//         else  {
//             odd++
//         }
//     }

//     return {even,odd}

//     }

//     console.log(sum(14, 20, 35, 40, 57, 60, 100))

//------------------- TASK 3 -----------------------

// function NumChecks(arr) {
//     let sum = 0;

//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] % 4 === 0 && arr[i] % 5 === 0) {
//             sum += arr[i];
//         }
//     }

//     return sum;
// }

// let numbers = [14, 20, 35, 40, 57, 60, 100];

// console.log("Cəm:", NumChecks(numbers));

//------------------- TASK 4 -----------------------

// function FindSymbol(sentence, symbol) {
//     let count = 0;

//     for (i = 0; i < sentence.length; i++) {
//         if (sentence[i] === symbol) {
//             count++;
//         }
//     }

//     return count;
// }

// let sentence = prompt("Cumle:");
// let symbol = prompt("simvol:");

// let count = FindSymbol(sentence, symbol);

// alert("Simvol sayi:" + " " + symbol);

//------------------- TASK 5 -----------------------

// function numCheck(n) {
//     let total = 0;

//     for (i = 1; i < n; i++) {
//         if (n % i === 0) {
//             total += i;
//         }
//     }

//     if (total > n) {
//         return `${n} - Abundant`;
//     } else {
//         return `${n} - Deficient`;
//     }
// }

// let eded = Number(prompt("Eded daxil et:"));

// let result = numCheck(eded);
// alert(result);

//------------------- TASK 6 -----------------------

// function arr(...args) {
//   let arr = [];

//   for (let i = 0; i < args.length; i++) {
//     arr.push(args[i] ** 2);
//   }
//   return arr;
// }

// alert(arr(1, 4, 5, 6, 7, 8));


//------------------- TASK 7 -----------------------


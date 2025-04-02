// --------------------------------- TASK 1 ---------------------------------
// console.log("Armstrong ədədləri");

// for (i = 1; i <= 999; i++) {

//     let digits = [];

//     let n = i;
//     while (n > 0) {
//}

// ------------------------------------- TASK 2 --------------------------

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + " x " + j + " = " + i * j);

//     }
//     console.log('\n')
// }

// ------------------------------------- TASK 3 --------------------------

// let users = [
//     { name: "Ravan", age: 20 },
//     { name: "Veli", age: 32 },
//     { name: "Resad", age: 28 },
//     { name: "Mehdi", age: 45 },
//     { name: "Aysu", age: 19 }
// ];

// console.log("30-dan kicik olanlar:");
// for (i = 0; i < users.length; i++) {
//     if (users[i].age < 30) {
//         console.log(users[i].name + " - " + users[i]['age']);
//     }
// }

// console.log("\n");

// console.log("30-dan boyuk olanlar:");
// for (i = 0; i < users.length; i++) {
//     if (users[i].age > 30) {
//         console.log(users[i].name + " - " + users[i]['age']);
//     }
// }

// ------------------------------------- TASK 4 --------------------------

// let numbers = [12, 25, 33, 41, 7, 19, 28, 50, 9, 15];
// let i = 0;
// let sum = 0;

// while (i < numbers.length) {
//     sum = sum + numbers[i];
//     i++;
// }

// let average = sum / numbers.length;

// console.log("Ədədi orta:", average);

// ------------------------------------- TASK 5 --------------------------

// let a = parseInt(prompt("Birinci ədədi daxil et:"));
// let b = parseInt(prompt("İkinci ədədi daxil et:"));

// let mod = a % b;

// console.log(mod);

// ------------------------------------- TASK 6 --------------------------

// let arr = [203, 19, 2, 13, 196, 86, 35, 77];

// let max = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// alert(max);

// ------------------------------------- TASK 7 --------------------------

// let arr = [203, 19, 2, 13, 196, 86, 35, 77];

// let min = arr[0];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// arr.push(min);
// arr.push(max);

// console.log(arr);

// ------------------------------------- TASK 8 --------------------------

// let arr = [203, 19, 2, 13, 196, 86, 35, 77];

// let min = arr[0];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != min && arr[i] != max) {
//         sum += arr[i];
//     }
// }

// alert(`Cəm: ${sum}`);

// ------------------------------------- TASK 9 --------------------------

// let arr = [203, 19, 2, 13, 196, 86, 35, 77];
// let num = Number(prompt(`Daxil et: `));

// let found = false;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//         found = true;
//         break; 
//     }
// }
// if (found == true) {
//     console.log(num + " arraydə mövcuddur.");
// } else {
//     console.log(num + " arraydə yoxdur.");
// }

// ------------------------------------- TASK 10 --------------------------
let arr = [203, 19, 2, 13, 196, 86, 35, 77];
let oneDigit = 0;
let twoDigit = 0;
let threeDigit = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0 && arr[i] <= 9) {
        oneDigit++;
    } 
    else if (arr[i] >= 10 && arr[i] <= 99) {
        twoDigit++;
    } 
    else if (arr[i] >= 100 && arr[i] <= 999) {
        threeDigit++;
    }
}

console.log("1-rəqəmli ədədlərin sayı:", oneDigit);
console.log("2-rəqəmli ədədlərin sayı:", twoDigit);
console.log("3-rəqəmli ədədlərin sayı:", threeDigit);

// Not: Tasklar yalniz Funksiya ile yazilmalidir.
// verilmis string: "I am frontend DEVELOPER I LEARN Javascript" 1.Verilmis string-de sait herflewrin tapilmasi, Funksiya ile yazilmalidir.

// let str = "I am frontend DEVELOPER I LEARN Javascript";
// let vowels = ['a', 'e', 'i', 'o', 'u', 'ə', 'ü', 'A', 'E', 'I', 'O', 'U', 'Ə', 'Ü'];
// let vowelCount = 0;
// let vowelArray = [];
// function findVowels(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             vowelCount++;
//             vowelArray.push(str[i]);
//         }
//     }
//     return `Sait herfler: ${vowelArray.join(', ')}. Say: ${vowelCount}`;
// }
// console.log(findVowels(str));

//2.Verilmish string-de sozlerin bosluga gore sayi.

// let str = "I am frontend DEVELOPER I LEARN Javascript";
// let wordCount = 0;
// function countWords(str) {
//     let words = str.split(' ');
//     wordCount = words.length;
//     return `Sozlerin sayi: ${wordCount}`;
// }
// console.log(countWords(str));

// 3.Verilmiş stringin-in ən uzun sözünü ekrana çıxaran proqram yazın. Funksiya ilə yazılmalıdır.

// let str = "I am frontend DEVELOPER I LEARN Javascript";
// let longestWord = "";

// function findLongestWord(str) {
//     let words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }

// console.log(findLongestWord(str));

// 4.Verilmiş string-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.

// let str = "I am frontend DEVELOPER I LEARN Javascript";
// let upperCaseWords = [];
// let upperCaseIndices = [];
// function findUpperCaseWords(str) {
//     let words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         if (words[i] === words[i].toUpperCase()) {
//             upperCaseWords.push(words[i]);
//             upperCaseIndices.push(i);
//         }
//     }
//     return `sozler: ${upperCaseWords.join(', ')}, indeksler: ${upperCaseIndices.join(', ')}`;
// }
// console.log(findUpperCaseWords(str));

// 5. Verilmiş string-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın

// let str = "I am frontend DEVELOPER I LEARN Javascript";
// let upperCaseWords = [];
//
// function findUpperCaseWords(str) {
//     let words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         let upperCaseCount = 0;
//         for (let j = 0; j < words[i].length; j++) {
//             if (words[i][j] === words[i][j].toUpperCase()) {
//                 upperCaseCount++;
//             }
//         }
//         if (upperCaseCount > 2) {
//             upperCaseWords.push(words[i]);
//         }
//     }
//     return upperCaseWords;
// }

// console.log(findUpperCaseWords(str));

// 6. Hər hansı bir cümlədə istənilən baş hərflə olan simvolları birləşdirib qaytaran funksiya yazın.Məsələn: My name is Jhon - MniJ

// let str = "My name is Jhon";
// let result = "";

// function getInitials(str) {
//     let words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         result += words[i][0].toUpperCase();
//     }
//     return result;
// }

// console.log(getInitials(str)); 

//7. Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin. Əgər söz 4 hərfdən azdırsa o qısaldılmır. İxtisar zamanı başdakı və sondakı hərflər saxlanılır, ortada olan hərflərin sayı yazılır. Cümlədə heç bir durğu işarəsi olmayacaq. Məsələn: komputer-k6r, stəkan-s4n, javascript- j8t

// let str = "komputer stəkan javascript";
// let result = [];

// function abbreviateWords(str) {
//     let words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > 4) {
//             let abbreviatedWord = words[i][0] + (words[i].length - 2) + words[i][words[i].length - 1];
//             result.push(abbreviatedWord);
//         } else {
//             result.push(words[i]);
//         }
//     }
//     return result.join(' ');
// }

// console.log(abbreviateWords(str)); 

// 1.Verilmis arrayde tekralanan reqemleri silmek ve tekrar reqemlerin sayini gostermek.

// let arr = [1, 2, 3, 4, 4, 1, 2, 0, 6, 7];
// let uniqueArr = [];
// let count = 0;

// function removeDuplicates(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueArr.includes(arr[i])) {
//             uniqueArr.push(arr[i]);
//         } else {
//             count++;
//         }
//     }
//     return `Tekrar reqemler: ${count}`;
// }

// console.log(removeDuplicates(arr));

// 2.Verilmis sozun polindrom olub olmadığını yoxlayan alqoritm yazmaq.

// let str = "test";
// let isPalindrome = true;
// let reversedStr = "";

// function checkPalindrome(str) {
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedStr += str[i];
//     }
//     if (str === reversedStr) {
//         isPalindrome = true;
//     } else {
//         isPalindrome = false;
//     }
//     return isPalindrome ? `${str} polindrom` : `${str} polindrom deyil`;
// }
// console.log(checkPalindrome(str));

// 3.Girilen ededin verilmis arreyde nece elementden kicik oldugunu yazan alqoritim.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let num = 5;
// let count = 0;

// function countLessThan(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < num) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countLessThan(arr, num));

// 4.customers array-in icindeki objectlerdeki hobbileri array-in reduce metodundan istifade ederek yazdirmaq.

// const customers = [
//     {
//       name: "Tyrone",
//       personal: {
//         age: 33,
//         hobbies: ["Bicycling", "Camping"],
//       },
//     },
//     {
//       name: "Elizabeth",
//       personal: {
//         age: 25,
//         hobbies: ["Guitar", "Reading", "Gardening"],
//       },
//     },
//     {
//       name: "Penny",
//       personal: {
//         age: 36,
//         hobbies: ["Comics", "Chess","Legos"],
//       },
//     },
//   ];

//     let hobbies = [];
//     function getHobbies(customers) {
//         hobbies = customers.reduce((acc, customer) => {
//             return acc.concat(customer.personal.hobbies);
//         }, []);
//         return hobbies;
//     }

//     console.log(getHobbies(customers));



// // 5.Random reqemlerden ibaret array yaratmaq,en boyuk ve en kicik elemanlar,ortalamani,toplami ve elemanlarin kvadratini tapmaq(Math metodlarindan istifade ederek)

let arr = [];
let min = 1;
let max = 100;
let sum = 0;
let average = 0;
let squares = [];
let largest = 0;
let smallest = 0;
let count = 10;

function generateRandomArray(count, min, max) {
    for (let i = 0; i < count; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

function findLargest(arr) {
    largest = Math.max(...arr);
    return largest;
}
function findSmallest(arr) {
    smallest = Math.min(...arr);
    return smallest;
}
function findSum(arr) {
    sum = arr.reduce((acc, num) => acc + num, 0);
    return sum;
}
function findAverage(arr) {
    average = sum / arr.length;
    return average;
}
function findSquares(arr) {
    squares = arr.map(num => num ** 2);
    return squares;
}

function displayResults() {
    console.log(`Array: ${arr}`);
    console.log(`En boyuk reqem: ${largest}`);
    console.log(`En kicik reqem: ${smallest}`);
    console.log(`Reqemlerin cemi: ${sum}`);
    console.log(`Reqemlerin ortalaması: ${average}`);
    console.log(`Reqemlerin kvadratı: ${squares}`);
}

generateRandomArray(count, min, max);
findLargest(arr);
findSmallest(arr);
findSum(arr);
findAverage(arr);
findSquares(arr);
displayResults();

console.log(largest);
console.log(smallest);
console.log(sum);
console.log(average);
console.log(squares);
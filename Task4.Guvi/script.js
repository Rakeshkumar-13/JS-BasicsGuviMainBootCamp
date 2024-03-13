// Programs in anonymous function & IIFE

//a. Print odd numbers in an array

(function() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,11,13];
    const oddNumbers = numbers.filter(function(num) {
      return num % 2 !== 0;
    });
    console.log("Odd Numbers:", oddNumbers);

  })();

  //b. Convert all the strings to title caps in a string array

  (function() {
    const strings = ["apple", "banana", "cherry"];
    const titleCaps = strings.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    console.log("Title Caps:", titleCaps);
  })();

  //c. Sum of all numbers in an array
  
  (function() {
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce(function(acc, num) {
    return acc + num;
  }, 0);
  console.log("Sum:", sum);
})();

//d. Return all the prime numbers in an array

(function() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    function isPrime(num) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    }
  
    const primeNumbers = numbers.filter(function(num) {
      return isPrime(num);
    });
    console.log("Prime Numbers:", primeNumbers);
  })();

  //e. Return all the palindromes in an array

  (function() {
    const words = ["level", "radar", "apple", "deified"];
  
    function isPalindrome(str) {
      const reversedStr = str.split("").reverse().join("");
      return str === reversedStr;
    }
  
    const palindromes = words.filter(function(word) {
      return isPalindrome(word);
    });
    console.log("Palindromes:", palindromes);
  })();

  //f. Return median of two sorted arrays of the same size

  (function() {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
  
    const mergedArray = [...arr1, ...arr2];
    const sortedArray = mergedArray.sort(function(a, b) {
      return a - b;
    });
  
    const length = sortedArray.length;
    const median = (sortedArray[(length - 1) / 2] + sortedArray[length / 2]) / 2;
  
    console.log("Median:", median);
  })();

  //g. Remove duplicates from an array

  (function() {
    const numbers = [1, 2, 2, 3, 4, 4, 5];
    const uniqueNumbers = [...new Set(numbers)];
    console.log("Unique Numbers:", uniqueNumbers);
  })();

  //h. Rotate an array by k times without using a separate function

  (function() {
    const numbers = [1, 2, 3, 4, 5];
    const k = 2;
  
    for (let i = 0; i < k; i++) {
      const lastElement = numbers.pop();
      numbers.unshift(lastElement);
    }
  
    console.log("Rotated Array:", numbers);
  })();
 
 // programs in arrow functions

 //a. Print odd numbers in an array

 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd Numbers:", oddNumbers);

//b. Convert all the strings to title caps in a string array

const strings = ["apple", "banana", "cherry"];
const titleCaps = strings.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log("Title Caps:", titleCaps);

//c. Sum of all numbers in an array

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

//d. Return all the prime numbers in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const primeNumbers = numbers.filter(num => isPrime(num));
console.log("Prime Numbers:", primeNumbers);

//e. Return all the palindromes in an array

const words = ["level", "radar", "apple", "deified"];

const isPalindrome = str => {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

const palindromes = words.filter(word => isPalindrome(word));
console.log("Palindromes:", palindromes);




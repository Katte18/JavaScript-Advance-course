"use strict"

// 1. Create function to find the largest digit in number
function getMaxDigit(num1) {
    let a = num1.toString();
    let b = a.split('');
        return Math.max.apply(null, b);
    }

    let outNum1 = getMaxDigit(1236);
    let outNum2 = getMaxDigit(987);
    let outNum3 = getMaxDigit(385);
    console.log("First max number from 1236:", outNum1);
    console.log("Second max number from 987:", outNum2);
    console.log("Third max number from 385:", outNum3);

    // output on web page
    document.getElementById('#btn-max');

// 2. Function for exponential via loop

function numExponent(num, exponent){
        let i;
        let result = 1;
        for (i = 0; i < exponent; i++){
        result *= num;
        }
        return result;
    }

    let outExponent = numExponent(2, 3);
    console.log("Output of exponent number 2**3 via loop:", outExponent);

    // output on web page
    document.getElementById('#btn-exponent');


// 3. Function for name formatting
function nameFormat (name1){
    let a = name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase();
    return a;
}
    let outName1 = nameFormat('влад');
    let outName2 = nameFormat('вЛАД');
  console.log("Correct name format convert of 'влад' input:", outName1);
  console.log("Correct name format convert of 'вЛАД' input:", outName2);

  // output on web page
  document.getElementById('#btn-format');

// 4. Function of salary net after taxes deduction
function SalaryPay (salary, deduction){
    let a = parseFloat(deduction) * 10;
    let c = salary - a;
    return c;
}
  let d = SalaryPay(1000, '19.5%');
  console.log("Net Salary pay with taxes deductions:", d);

  // output on web page
  document.getElementById('#btn-salary');


// 5. Random function to return integer from 1 to 10 inclusively
function getRandomNumber (min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
  let num = getRandomNumber(1, 10);
  console.info("Random number between 1 to 10:", num);

  // output on web page
  document.getElementById('#btn-random');


// 6. Function to output repeat letter in a word

function countLetter(str, letter)
{
 let letterCalc = 0;
 for (let position = 0; position < str.length; position++)
 {
    if (str.charAt(position) == letter)
      {
      letterCalc += 1;
      }
  }
  return letterCalc;
}

let count = countLetter('Hasta la vista', 'a');
console.log('The a letter count of the word Hasta la vista:', count);

  // output on web page
  document.getElementById('#btn-count');

// 7 - 8. Currency convert UAH > $, $ > UAH
// 100$ > 2500UAH; 2500UAH > 100$
// Other currencies error output message and symbol register doesn't matter

function convertCurrency(curr1) {

    let result;
    if (curr1.includes('$') === true){
        result = parseInt(curr1) * 25;
      } else if (curr1.toLowerCase().includes('uah') === true){
        result = parseInt(curr1) / 25;
      } else {
        result = 'please enter $ or UAH currency';
      }
    return result;
}

let dollarConv = convertCurrency('100$');
let hryvniaConv = convertCurrency('2500UAH');


console.log("100$ is converted into UAH: ", dollarConv);
console.log("2500UAH is converted into $: ", hryvniaConv);


// 9 - 10. Random number password
// user length input or 8 digits by default

function getRandomPassword (length) {

  let result;
    if (length > 0){
      result = parseInt((Math.random() * 9 + 1) * Math.pow(10,length-1), 10);
      console.warn("Password length entered by user:", result);
    }
    else if (length === 0){
      result = 'Password cannot be generated for 0 entry';
       console.error(result);
    }
    else{
      result = parseInt((Math.random() * 9 + 1) * Math.pow(10, 8-1), 10);
      console.info("No value entry generates default password:", result);
    }
  return result;
  }

getRandomPassword();
getRandomPassword(4);
getRandomPassword(0);


// 11. Remove letters from the string

function deleteLetters(word) {

  let templateLetter = ['a', 'A'];

  for (let letter of templateLetter) {
    word = word.split(letter).join('');
  }
  return word;
}

let inputWord = deleteLetters('blablabla');
console.log("Delete 'a' letter from blablabla:", inputWord);


// 12. Word palindrom check

function isPalindrome (word) {

  let regExp = /[.,\s]/g;
  word = word.toLowerCase().replace(regExp, '');
  let lenWord = word.length;
  for (let i = 0; i < lenWord / 2; i++) {
    if(word[i] !== word[lenWord -1 - i]) {
      return false;
    }
  }
  return true;
}

let outputPalindrome = isPalindrome('Я несу гусеня');
let outputPalindrome1 = isPalindrome('мадам');
let outputPalindrome2 = isPalindrome('кокос');
let outputPalindrome3 = isPalindrome('Я несу, гусеня');
console.log("Is palindrome entry 'Я несу гусеня':", outputPalindrome);
console.log("Is palindrome entry 'мадам':", outputPalindrome1);
console.log("Is palindrome entry 'кокос':", outputPalindrome2);
console.log("Is palindrome entry 'Я несу, гусеня':", outputPalindrome3); // check with comma


// 13. Remove letters appearing more than once

const str = 'Бісквіт був дуже ніжним';
const removeDuplicate = str => {
   const strArray = str.toLowerCase().split('');
   const duplicateArray = strArray.filter(el => {
      return strArray.indexOf(el) == strArray.lastIndexOf(el);
   });
   return duplicateArray.join('');
};
console.warn(removeDuplicate(str));

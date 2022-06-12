"use strict"

// 1. function to return array of random numbers
  // create function
function getRandomArray(length, min, max) {
  //create new array
    let arr = [];

  // iterate array
    for (let i = 0; i < length; i++){

  // add random values into array: push/unshift
      arr.push(Math.floor(Math.random() * (max - min) + min));

  // unshift gives the same output
      //arr.unshift(Math.floor(Math.random() * (max - min) + min));
    }
    return arr;
}

let result = getRandomArray(15, 1, 100);
console.table(result);

// display on web page
document.getElementById('#one-button');


// 2. function to calculate mode of array -> the value that appears
// most often in a set of data values

function getModa(...numbers) {

    let intNumMode = numbers.filter(el => Number.isInteger(el));

    let modes = [],
        count = [],
        i,
        number,
        maxIndex = 0;

    for (i = 0; i < intNumMode.length; i += 1) {
        number = intNumMode[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }

    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }

    return modes;
}
let resultMode = getModa(6, 2.1, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2.1, 11);
console.log("Return all mode integer values in array");
console.table(resultMode);

// display on web page
document.getElementById('#two-button');


// 3. Average of array

  // create function
function getAverage(...numbers) {

  // return array of integer numbers
  let intNum = numbers.filter(el => Number.isInteger(el));

  // declare variables for average count
  let totalVal = 0,
      i;

  // iterate array
  for(i=0; i < intNum.length; i += 1){
    totalVal += intNum[i];
  }

  // return average outcome
  return totalVal / intNum.length;
}

let numAv = getAverage(6, 2, 3.4, 55, 11, 5.7, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(`Average value of array is: ${numAv}`);

// display on web page
document.getElementById('#three-button');


// 4. Median of array
function getMedian(...numbers){
  let intMedian = numbers.filter(el => Number.isInteger(el));

  let median = 0,
      numLength = intMedian.length;
      intMedian.sort((a,b) => a - b);

  if (numLength % 2 === 0) {
    median = (intMedian[numLength / 2 - 1] + intMedian[numLength / 2]) / 2;
  } else {
    median = intMedian[(numLength - 1) / 2];
  }
  return median;
}

let input1 = getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
let input2 = getMedian(1, 2, 3, 4, 5.5);
let input3 = getMedian(1, 2, 3, 4, 5);

console.log(`Input first has median: ${input1}, Input second has median: ${input2},
  Input third has median: ${input3}`);

  // display on web page
  document.getElementById('#four-button');


// 5. Filter even array numbers, output odd numbers
function filterEvenNumbers(...numbers){
  let result = numbers.filter((n) => n % 2 == 1);
  return result;
}

let oddOutput = filterEvenNumbers(1, 2, 3, 4, 5, 6);
console.log("Array of odd numbers:")
console.table(oddOutput);

// display on web page
document.getElementById('#fifth-button');


// 6. Output quantity numbers higher 0
function countPositiveNumbers(...numbers){
  let positResult = numbers.filter((el) => el > 0);
  let countResult = positResult.length;
  return countResult;
}

let positiveNumOutput = countPositiveNumbers(1, -2, 3, -4, -5, 6);
console.log(`Output positive number of array: ${positiveNumOutput}`);

// display on web page
document.getElementById('#sixth-button');


// 7. Numbers divide by 5
function getDividedByFive(...numbers){
    let f = numbers.filter((el) => el % 5 === 0);
      return f;
}

let fiveOutput = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log("Numbers divided by 5:");
console.table(fiveOutput);

// display on web page
document.getElementById('#seventh-button');


// 8. Replace bad words with *

function replaceBadWords(string) {
    let search = ["fuck"],
        search1 = ["shit"],
        replace = "*",
        res1, res2;

        //output
            res1 = string.split(search).join(replace);
            res2 = res1.split(search1).join(replace);

    return res2;
  }

  let someValue = replaceBadWords("Are you fucking kidding?");
  let phrase2 = replaceBadWords("Holy shit!");
  let phrase3 = replaceBadWords("It's bullshit!");
  console.log(`replace bad words: ${someValue}, ${phrase2}, ${phrase3}`);

// display on web page
document.getElementById('#eighth-button');


// 9. Divide word into words with 3 letters. If letters less 3 keep interval
// delete white space, string to lower case

/*

  function divideByThree(word){

      let divide = [];


        for (let i = 0, wordLength = word.length;i < wordLength; i +=3){
              divide.push(word.substring(i, i + 3));
            }

      return divide;
    }

*/

    function divideByThree(str, n) {
        let chunk = str.split(' ').join(''),
            result = [],
            i = 0;

            if(chunk.length > n) {
              while(i < chunk.length) {
                 let arr = chunk.substring(i, i + n);
                 result.push(arr.slice());
                 i = i + n;
             }
        }else {
            return [chunk];
        }
        return result;
    }

      let wordInput = divideByThree("Commander", 3);
    console.warn(wordInput);

      let wordInput1 = divideByThree("live", 3);
    console.warn(wordInput1);

// additional check
      let wordInput2 = divideByThree("I have news", 5);
    console.warn(wordInput2);

// display on web page
document.getElementById('#ninth-button');


// 10. Generate random word combination

//possible solution
function swap(chars, i, j) {
      let tmp = chars[i];
      chars[i] = chars[j];
      chars[j] = tmp;
  }

function generateCombinations(word) {
    let counter = [],
        anagrams = [],
        chars = word.split(''),
        length = chars.length,
        i;

    for (i = 0; i < length; i++) {
        counter[i] = 0;
    }

    anagrams.push(word);
    i = 0;
    while (i < length) {
        if (counter[i] < i) {
            swap(chars, i % 2 === 1 ? counter[i] : 0, i);
            counter[i]++;
            i = 0;
            anagrams.push(chars.join(''));
        } else {
            counter[i] = 0;
            i++;
        }
    }
    return anagrams.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
}

  let newInput = generateCombinations("man");
    console.info(newInput);

  let newInput1 = generateCombinations("ol");
    console.info(newInput1);

    let newInput3 = generateCombinations("msm");
    console.info(newInput3);

// display on web page
    document.getElementById('#tenth-button');

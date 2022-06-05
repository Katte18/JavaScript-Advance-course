"use strict"

// another old way of creating arrays, with value creates value = length empty array
// not used method
let listStudents = new Array("Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана");
console.table(listStudents);
console.log("Length of array:", listStudents.length);

let subjects = new Array("Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних");
console.table(subjects);
console.log("Length of array:", subjects.length);

let achievments = new Array(4, 5, 5, 3, 4, 5);
console.table(achievments);
console.log("Length of array:", achievments.length);

let listStudents1 = [["Олександр", "Ігор"], ["Олена", "Іра"], ["Олексій", "Світлана"]];
console.table(listStudents1);


// arrays due to task

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


// 1. New array with pairs of students
  function createArray (arr) {
    // let group = [
        //[arr[0], arr[2]],
        //[arr[1], arr[3]],
        //[arr[4], arr[5]],];

        let group;
            group = arr.length / 2;
        let newArray = [];

          for (let i = 0; i < group; i++) {
            newArray.push([arr[i], arr[arr.length-i-1]]);
          }
      return newArray;
  }

let groupStudents = createArray(students);
console.log("New array of pair of students:", groupStudents);
console.table(groupStudents);

// webpage code output
document.getElementById('#top-left');


// 2. Combining students group with themes
function groupThemes (arr1, arr2) {
    let result =[];
    for (let i = 0; i < arr1.length; i++) {
    result.push([arr1[i].join(' i '), arr2[i]]);
  }
  return result;
}

let resultThemes = groupThemes(groupStudents, themes);
  console.log("New array of pair of students and themes: ", resultThemes);
  console.table(resultThemes);

  // webpage code output
  document.getElementById('#bottom-left');

// 3. Combining marks with students
function studentMarks (arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
    result.push([arr1[i], arr2[i]]);
  }
  return result;
}

let totalResult = studentMarks(students, marks);
  console.log("New array of students and marks: ", totalResult);
  console.table(totalResult);

  // webpage code output
  document.getElementById('#right-top');

// 4. Random marks limited from array data for students group
let randomMark = () =>
  marks[Math.floor(Math.random() * marks.length)];

let groupRandom = (arr) =>
  arr.map(x => x.concat(randomMark()));

const resultGroup = groupRandom(resultThemes);
  console.log("New array of students and random generated marks: ", totalResult);
  console.table(resultGroup);

  // webpage code output
  document.getElementById('#right-bottom');

// flat method returns a new array after concatenating all of the sub-arrays elements
  //const flatArray = groupStudents.flat();
  //console.log(flatArray);
  //console.log(groupStudents);

"use strict"

const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];


// 1. Function to return a list of subject of a student
// subject starts with capital letter, without _

function getSubjects(students) {

  let a;

    for (let prop in students) {
      a = Object.keys(students.subjects)
          .map(a => a.charAt(0)
          .toUpperCase()
          + a.substring(1)
          .toLowerCase()
          .replace("_", " "));
    }
    return a;
}

let listSubject1 = getSubjects(students[0]);
console.log("First student:", listSubject1);

let listSubject2 = getSubjects(students[1]);
console.log("Second student:", listSubject2);

let listSubject3 = getSubjects(students[2]);
console.log("Third student:", listSubject3);

// webpage code output
document.getElementById('#task-one');


// 2. Function to calculate the averaage of subjects marks of a students
function getAverageMark(marks) {
  let str,
      num,
      average;

    str = Object.values(students[0].subjects)
                .toString()
                .split(",");

    num = str.map(str => {
      return Number(str);
    });

    average = num.reduce((val1, val2) => val1 + val2, 0) / num.length;


  return average.toFixed(2);

}

let averageMark1 = getAverageMark(students[0]);
console.log("Marks average of first student:", averageMark1);

// webpage code output
document.getElementById('#task-two');


// 3. Function to output information of the student: course, name and average mark
function getStudentInfo(students) {

  return {
          name: students.name,
          course: students.course,
          "marks average": getAverageMark(students)
}
  }

let studentInfo = getStudentInfo(students[0]);
console.log("Information about student:", studentInfo);

// webpage code output
document.getElementById('#task-three');


// 4. Function to return students' names in alphabetical order
let getStudentsNames = Object.keys(students).map(function(e) {

   return students[e].name

});

console.log("Names of students in alphabetical order:", getStudentsNames.sort());

// webpage code output
document.getElementById('#task-four');

// 5. Function to return the best student based on average of marks

function getBestStudent() {
  let marks = {},
      result;

  students.forEach((student) => marks[student.name] = getAverageMark(student))
  result = Object.keys(marks)
                 .reduce((a, b) => marks[a] > marks[b] ? a : b)

  return result;
  }

console.log("Best student result:", getBestStudent(students));

// webpage code output
document.getElementById('#task-five');

// 6. Function to return letters as keys, values is frequency

function calculateWordLetters(word) {
    let result = {};

    word.split(' ').forEach(function(e) {
        result[e] = {};
        e.split('').forEach(function(c) {
            if(!result[e][c]) { result[e][c]=0; }
            result[e][c]++;
        });
    });

    return result;
}

console.log("New object with key of letters and values of frequency:", calculateWordLetters("тест"));

// webpage code output
document.getElementById('#task-six');

"use strict"


// Class, constructor, getter and setter

class Student {
    constructor (university, course, fullName, arrMarks, dismiss) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.arrMarks = arrMarks;
        this.dismiss = dismiss;
    }

  getInfo () {
      return `Студент ${this.course}-го курсу, ${this.university}, ${this.fullName}`;
        }


    get marks () {
      if (this.dismiss) {
        return null;
      } else {
        return this.arrMarks;
      }
    }

    set marks (value) {
      if (this.dismiss) {
        console.log(`Студент відрахований`);
      } else {
        this.arrMarks.push(value);
      }
    }

    getAverageMark () {
      const res = this.marks.reduce((val1, item) => val1 + item, 0) / this.marks.length;
      return Number(res);
    }


    dismissed () {
      this.dismiss = true;
    }

    recovered () {
      this.dismiss = false;
    }

}


const student1 =
new Student ("Вища школа Психотерапії м.Одеса", 1, "Остап Бендер", [5, 4, 4, 5], false);

// general information
  console.log (student1.getInfo());
  console.table (student1.marks);


// marks manipulation, added mark to student1
  student1.marks = 5;
  console.table (student1.marks);
  console.log (student1.getAverageMark());

// dismissed student status
  student1.dismissed ();
  console.log (`Студент відрахований з кусу навчання, статус: ${student1.dismiss};
  оцінки відрахованого студента ${student1.marks};`);


// recovered student status
  student1.recovered ();
  console.log (`Студент поновлений, статус відрахування: ${student1.dismiss};`);

/**************************************/
// Advanced Task: inheritance

class BudgetStudent extends Student {
  constructor (university, course, fullName, arrMarks, dismiss) {
    super (university, course, fullName, arrMarks, dismiss);
      setInterval (() => this.getScholarship (), 30000);
      setTimeout(() => clearInterval(), 30000);
  }

  getScholarship () {
    if (!this.dismiss && this.getAverageMark() >= 4){
     console.log(`Середній бал ${student2.getAverageMark()}, за яким нараховано 1400 грн. стипендії`);
   }else {
     console.log(`Середній бал ${student2.getAverageMark()}, який менше 4 для отримання стипендії`);
   }
   }

}


const student2 = new BudgetStudent("Львівська Політехніка", 4, "Август Віктор Вітковський", [5, 5, 5, 5], false);

console.log(`${student2.getInfo()}`);

"use strict"

// data for task

const ukraine = {
  tax: 0.195,
  middleSalary: 1789,
  vacancies: 11476
};

const latvia = {
  tax: 0.25,
  middleSalary: 1586,
  vacancies: 3921
};

const lithuania = {
  tax: 0.15,
  middleSalary: 1509,
  vacancies: 1114
};


// 1. Function to calculate taxes of one of the country

let getMyTaxes = function() {
  return (this.middleSalary - this.middleSalary * this.tax).toFixed(2);
};

console.info("Net salary Ukraine:", getMyTaxes.call(ukraine, ukraine.middleSalary));
console.info("Net salary Latvia:", getMyTaxes.call(latvia, latvia.middleSalary));
console.info("Net salary Lithuania:", getMyTaxes.call(lithuania, lithuania.middleSalary));


// 2. Function to calculate taxes of salary in each country

let getMiddleTaxes = function() {
  return (this.middleSalary * this.tax).toFixed(2);
};

console.warn("IT pays taxes in Ukraine:", getMiddleTaxes.call(ukraine, ukraine.tax));
console.warn("IT pays taxes in Latvia:", getMiddleTaxes.call(latvia, latvia.tax));
console.warn("IT pays taxes in Lithuania:", getMiddleTaxes.call(lithuania, lithuania.tax));

// 3. Function to calculate taxes for IT specialists in countries

let getTotalTaxes = function() {
  return (this.tax * this.middleSalary * this.vacancies).toFixed(2);
};

let ukraineResult = getTotalTaxes.call(ukraine),
    latviaResult = getTotalTaxes.call(latvia),
    lithuaniaResult = getTotalTaxes.call(lithuania);

console.info(`Amount of taxes paid by IT specialist in Ukraine is ${ukraineResult}, in Latvia is ${latviaResult}, in Lithuania is ${lithuaniaResult}`);


// 4. Function of { salary: number, taxes: number, profit: number } with value updates every 10 seconds
let arr = [ukraine, latvia, lithuania],
    countryArr = arr[Math.floor(Math.random() * arr.length)];


function getMySalary() {

  let salary = Math.floor(Math.random() * (2000 - 1500)) + 1500,
      taxes = Number((salary * this.tax).toFixed(2)),
      profit = Number((salary - taxes).toFixed(2));

  let objRan = {
        salary: salary,
        tax: taxes,
        profit: profit
      };

      console.log(objRan);

};

let SalaryRan = getMySalary.bind(eval(countryArr));

let timer = setInterval(SalaryRan, 1000);
setTimeout(() => clearInterval(timer), 10000);

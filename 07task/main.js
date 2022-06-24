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

const getMyTaxes = function(salary) {
  return Number((salary * this.tax).toFixed(2));
};

console.info("Tax salary Ukraine:", getMyTaxes.call(ukraine, 2400));
console.info("Tax salary Latvia:", getMyTaxes.call(latvia, 2000));
console.info("Tax salary Lithuania:", getMyTaxes.call(lithuania, 1800));


// 2. Function to calculate taxes of salary in each country

const getMiddleTaxes = function() {
  return Number((this.middleSalary * this.tax).toFixed(2));
};

console.warn("IT pays taxes in Ukraine:", getMiddleTaxes.call(ukraine));
console.warn("IT pays taxes in Latvia:", getMiddleTaxes.call(latvia));
console.warn("IT pays taxes in Lithuania:", getMiddleTaxes.call(lithuania));

// 3. Function to calculate taxes for IT specialists in countries

const getTotalTaxes = function() {
  return (this.tax * this.middleSalary * this.vacancies).toFixed(2);
};

const ukraineResult = getTotalTaxes.call(ukraine),
      latviaResult = getTotalTaxes.call(latvia),
      lithuaniaResult = getTotalTaxes.call(lithuania);

console.info(`Amount of taxes paid by IT specialist in Ukraine is ${ukraineResult}, in Latvia is ${latviaResult}, in Lithuania is ${lithuaniaResult}`);


// 4. Function of { salary: number, taxes: number, profit: number } with value updates every 10 seconds
const arr = [ukraine, latvia, lithuania],
      countryArr = arr[Math.floor(Math.random() * arr.length)];


function getMySalary() {

  const salary = Math.floor(Math.random() * (2000 - 1500)) + 1500,
        taxes = Number((salary * this.tax).toFixed(2)),
        profit = Number((salary - taxes).toFixed(2));

  const objRan = {
        salary: salary,
        tax: taxes,
        profit: profit
      };

      console.log(objRan);

};

const SalaryRan = getMySalary.bind(eval(countryArr));

const timer = setInterval(SalaryRan, 10000);
setTimeout(() => clearInterval(timer), 10000);

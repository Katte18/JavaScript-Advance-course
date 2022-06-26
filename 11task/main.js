"use strict"

async function getRandomChinese(length) {
  let result = "";

  while(length > 0) {
    const sign = Number(Date.now().toString().slice(-5));
    result += String.fromCharCode(sign);

    await new Promise(res => setTimeout(() => {
      length--;
      res(), 50;
    }));
  };
  return console.log(result);
}

getRandomChinese(4);

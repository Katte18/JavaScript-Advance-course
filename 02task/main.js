/* get integer N number from a user */

let nNum;
    do {
        nNum = prompt("Please enter an integer number N:");
   
    } while (!isFinite(nNum) || nNum % 1 !== 0);

    console.log("Integer N number:", nNum);

/* get integer M number from a user */ 

let mNum;
    do {
        mNum = prompt("Please enter an integer number M:");
    
    } while (!isFinite(mNum) || mNum % 1 !== 0);

    console.log("Integer M number:", mNum);

/* boolean parameter for omit even numbers */

//let evenNum = confirm ("Should omit even numbers?") // convert to constant
const EVEN_NUM = confirm ("Should omit even numbers?")
console.log(EVEN_NUM);
 
/* loop of N and M numbers */

let sum = 0;
for (let i = +nNum; i <= +mNum; i++) {
    if (EVEN_NUM &&  i%2  === 0)  continue;
    sum += i; 
}
console.log(sum);
document.writeln("Output of sum of numbers: ", sum);

/* loop of N and M numbers with add output */
//let evenSum = 0;
//let oddSum = 0;
//for (i = +nNum; i <= +mNum; i++) {
    //if (evenNum &&  i%2  === 0) {
        //evenSum +=i;
       // console.log(evenSum);
    //}else{
        //oddSum +=i;
       // console.log(oddSum);
  //  }
//}
  //  console.log(evenSum, oddSum);



/* practice of rule check */

  //  let a = prompt("Please input number:");

  //      if (isFinite(a) && a % 1 === 0) {
     //       console.log("number and integer", a);
     //   }else if (isNaN(a)){
     //       console.log("not a number");
     //   }else if (a % 1 !== 0) {
     //       console.log("not integer");
     //   }else {
     //       console.log("no data");
     //   }

 /* practice of switch */

   // let b = prompt("Please input number:");

   // switch(true) {
      //  case isFinite(b) && b % 1 === 0:
      //          console.log("number and integer");
      //      break;
      //   case isNaN(b):
      //         console.log("not a number");
      //      break;

      //  case b % 1 !== 0:
      //          console.log("not integer");
      //      break;
        
      //  default:
      //          console.log("no data");
 //   }




 
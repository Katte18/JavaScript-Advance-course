/* create 3 items of products */
const pencil = 15.678; 
const notebook = 123.965;
const pen = 90.2345;
console.log("pencil costs:", pencil, "notebook costs:", notebook, "pen costs:", pen);


/* max and min price */
const maxPrice = Math.max(pencil, notebook, pen);
console.log("Max value of price:", maxPrice);

const minPrice = Math.min(pencil, notebook, pen);
console.log("Min value of price:", minPrice);


/* sum of all items */
const products = pencil + notebook + pen;
console.log("Total sum of products:", products);


/* round numbers -> small value */
const sumRoundLessPenn = Math.floor(pencil) + Math.floor(notebook) + Math.floor(pen);
    /*  const roundLessNotebook = Math.floor(notebook);
        const roundLessPen = Math.floor(pen);
        const sumRoundLessPenn = roundLessPencil + roundLessNotebook + roundLessPen;
        console.log("Round to less price of each item:", roundLessPencil, roundLessNotebook, roundLessPen);
    */
console.log("Sum of items round to less price:", sumRoundLessPenn);


/* sum price round to 100 */
const moreSumProducts = Math.round(products / 100) * 100;
console.log("Round Total sum of products 229.8775 to 100:",moreSumProducts);


/* boolean value odd even items price */
    if (sumRoundLessPenn%2===0){
        console.log(sumRoundLessPenn + " is an even number");
    }else{
        console.log(sumRoundLessPenn + "is an odd number");
    }

/* let priceBool = sumRoundLessPenn;
    if (priceBool%2===0){
        console.log(priceBool + " is an even number");
    }else{
        console.log(priceBool + "is an odd number");
    }

additional check for odd value 
let priceBoolProducts = Math.floor(products);
    if (priceBoolProducts%2===0){
        console.log(priceBoolProducts + " is an even number");
    }else{
        console.log(priceBoolProducts + " is an odd number");
    } */


/* subtraction of 500 and total sum of products */
const paidSum = 500;
const restPaidSum = paidSum - products;
console.log("Rest of amount after 500 paid:", restPaidSum);


/* average of price remain with 2 digits after dot */
const averagePrice = ((pencil + notebook + pen) / 3).toFixed(2);
console.log("Price average of items:", averagePrice);


/* random discount in digits range 10 - 30 */
const randomDiscount = Math.floor(Math.random() * 21) + 10;
console.log("Random Discount in digits range 10-30:",randomDiscount);

/*const minDiscount = 10;
const maxDiscount = 20;
const randomDiscount = Math.floor(Math.random() * maxDiscount) + minDiscount +1;
 */


/* discount of total sum of items */
const productsDiscount = (products - products * randomDiscount / 100).toFixed(2);
console.log("Random Discount of Total sum of products:", productsDiscount);

/* cost of goods sold */
const goodsSold = products / 2;
console.log("Cost of goods sold:", goodsSold);

/* net revenue */
const netRevenue = (goodsSold - (products * randomDiscount / 100));
document.writeln("Net Revenue: ",netRevenue);

/* round to bigger digit net revenue 
const highNetRevenue = Math.ceil(netRevenue);
document.writeln("Round Net Revenue to bigger number is ",highNetRevenue); */


/* advanced literal template */
const tempBase = `Maximum price is ${maxPrice};
Minimum price is ${minPrice};
Total sum of products is ${products};
Sum of items round less to price ${sumRoundLessPenn};
Round to 100 Total sum of products ${moreSumProducts};
Rest of amount after 500 paid is ${restPaidSum};
Price average of items ${averagePrice};
Random discount in digits range 10-30 is ${randomDiscount};
Random discount of Total sum of product is ${productsDiscount};
Cost of goods sold is ${goodsSold};
Net Revenue is ${netRevenue};`;
console.log(tempBase);


/* max/min number of array -> additional practice 
const items = [15.678, 123.965, 90.2345];
console.log("Max value of array:", Math.max(...items),"Min value of array:", Math.min(...items));
*/

/* average with array -> additional practice 
function ArrayAvg(items) {
    var i = 0, summ = 0, ArrayLen = items.length;
    while (i < ArrayLen) {
        summ = summ + items[i++];
}
    return summ / ArrayLen;
}
var a = (ArrayAvg(items)).toFixed(2);
console.log(a) */


//1)
let num1 = 10;
num1++;
num1++;
num1--;
console.log(num1);


//2)
let num2 = 47;
num2 += 7;
num2 -= 18;
num2 *= 10;
num2 /= 15;
alert(num2);



/******* && *******/

//true + true = true
let data1 = 90;
let data2 = 10;
data1 -= 5;
data2 += 10;
const dataSaver = data1 <= 85 && data2 >= 20;
console.log(dataSaver);


//true + false = false
let salary1 = 20000;
let salary2 = 25000;
const accountingDept = salary1 >= 20000 && salary2 > 25000;
console.log(accountingDept);


//false + true = false
let index1 = 45;
let index2 = 35;
let index3 = 45;
const screen = index1 === index2 && index3 !== index2;
console.log(screen);


//false + false = false
let access1 = 22;
let access2 = 19;
let limit = 21;
const limit_display = access1 < limit && access2 > limit;
console.log(limit_display);



/******* || *******/

//true + true = true

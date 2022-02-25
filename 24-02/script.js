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
let x = 23;
let y = 24;
const result = x === 23 || y === 24;
console.log(result);


//true + false = true
let digit1 = 99;
let digit2 = 29;
digit1++;
const result2 = digit1 === 100 || digit2 <= 28;
console.log(result2);


//false + true = true
let graph_a = 10;
let graph_b = 20;
graph_a *= 10;
graph_b /= 10;
const result3 = graph_a <= 99 || graph_b >= 2;
console.log(result3);


//false + false = false
let point_z = 999;
let point_q = 109;
point_z--; //998
point_q++; //110
let result4 = point_z === 999 || point_q !== 110;
console.log(result4);
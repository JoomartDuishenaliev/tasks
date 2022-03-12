//1
let array = [0,1,2,3,5,10,11];

for(let i = 0; i < array.length; i++){
    if(array[i] > 0 && array[i] < 10){
        console.log(array[i]);
    }
}


//2
let sumArray = [1, 2, 5, 6, 88, 5];
let sum = 0;

for(let i = 0; i < sumArray.length; i++){
    sum += sumArray[i];
}
console.log(sum);


//3
let squareArray = [1,2,3,4,5,6,7,8,9,10,11];
let square = 0;

for(let i = 0; i < squareArray.length; i++){
    square += squareArray[i] * squareArray[i];
}
console.log(square);


//4
let justArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let evenArray = [];

for(let i = 0; i < justArray.length; i++){
    if(justArray[i] % 2 === 0) {
        evenArray.push(justArray[i]);
    }
}
console.log(evenArray);


//5
let xArray = [];

for(let i = 10; i >= 1; i--){
    xArray.push('x');
}
console.log(xArray);
//arrays into object task
let justArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let evenArray = [];
let oddArray = [];

for(let i = 0; i < justArray.length; i++){
    if(justArray[i] % 2 === 0) {
        evenArray.push(justArray[i]);
    } else {
        oddArray.push(justArray[i]);
    }
}

let justObject = {
    odd:oddArray,
    even:evenArray
};

console.log(justObject);


//function task
let message = function showMinimal(n, m) {
    return (n < m) ? n : m;
}

function showValue(n) {
    console.log(n);
}

showValue(message(3, 4));
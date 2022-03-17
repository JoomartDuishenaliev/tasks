const goods = [
    {
        name:'Iphone 12',
        price:790
    },
    {
        name:'Iphone 12 pro',
        price:800
    },
    {
        name:'Iphone 12 pro max',
        price:1050
    },
    {
        name:'Iphone 12 pro',
        price:1000
    },
    {
        name:'Iphone 13 pro max',
        price:1200
    }
]

function filteredPrice(array, benchmark, symbol){
    return goods.filter(array => (symbol === '<') ? array.price < benchmark : array.price > benchmark);
}
console.log(filteredPrice([goods], 1000, '>'));



//1
let someArr = [2,3,4,5,6,7];
let total = 1;

for(let i = 0; i < someArr.length; i++){
    total = total *= someArr[i];
}

let someObj = {
    totalResult:total
};
console.log(someObj);



//2
let newArr = [];

function someContent(element, length){
    for(let i = 0; i < length; i++){
        newArr.push(element);
    }
}
someContent('a', 3);
console.log(newArr);



//3
const data = [1,2,3];

function reverseFunc(lastEl, firsEl) {
    const sorter = data.sort((firstEl,lastEl)=>lastEl-firstEl);
}
reverseFunc(3, 1);
console.log(data);
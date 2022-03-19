//1
function updateContent(element, length){
    let newArr = [];
    for(let i = 0; i < length; i++){
        newArr.push(element);
    }
    return newArr;
}
console.log(updateContent('a', 3));


//2
let arr = [-5,10,5,55,-1,22,-4,36,-45];

let result = arr.reduce(function(sum, elem){
    if(elem >= 0){
        return sum + elem;
    } else{
        return sum;
    }
}, 0);
console.log(result);
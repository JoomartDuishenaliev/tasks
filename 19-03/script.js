//1
const displayMsg = (msg) => {
    alert(msg);
}
setTimeout(displayMsg, 4000, 'Hello world after 4 seconds');
setTimeout(displayMsg, 8000, 'Hello world after 8 seconds');


//2
const mul = (n, m) => n * m;
console.log(mul(7, 8));


//3
const findFact = (num) => {
    let init = 1;
    for(let i = 1; i <= num; i++){
        init *= i;
    }
    return init;
}
console.log(findFact(7));
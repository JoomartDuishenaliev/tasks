
//1
let hello = () => 'Привет, Javascript';
console.log(hello());


//2
let numCube = (x) => x * x * x;
console.log(numCube(3));


//3
let name = 'Василий';

let getName = () => (name === undefined || name !== 'Василий' ) ? `Привет, гость` : `Привет, ${name}`;
console.log(getName());


//4
let array = [1, 2, 3, 4, 1, 1, 1, 4, 2, 2, 2, 2, 2, 2];

let mapped = array.map(value => value + value);

console.log(mapped);
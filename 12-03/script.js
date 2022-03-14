
//1
let hello = () => 'Привет, Javascript';
console.log(hello());


//2
let numCube = (x) => x * x * x;
console.log(numCube(3));


//3
let name = 'Василий';

let getName = () => (name == null || name !== 'Василий' ) ? `Привет, гость` : `Привет, ${name}`;
console.log(getName());


//4
let array1 = [1, 2, 3];
let array2 = [4, 1, 1, 1, 4];
let array3 = [2, 2, 2, 2, 2, 2];

let double1 = array1.map(currentValue => currentValue + currentValue);
let double2 = array2.map(currentValue => currentValue + currentValue);
let double3 = array3.map(currentValue => currentValue + currentValue);

console.log(double1, double2, double3);

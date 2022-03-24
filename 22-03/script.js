//99
/*let nums = prompt('Введите число');
let x = 0;

while(nums != 99){
    x++;
    nums = prompt('Введите число');
}
console.log('Количество чисел - ' + x);*/


//999
let q = 0;
let sum = 0;
let count = Number(prompt('Введите число'));

while(count != 999){
    q++;
    sum += count;
    count = Number(prompt('Введите число'));
}
console.log('Количество чисел = ' + q, '; Сумма чисел = ' + sum);




//For i variant
/*let q = 0;
let sum = 0;
let count = Number(prompt('Введите число'));

for(let i = 0; count != 999; i++){
    q++;
    sum += count;
    count = Number(prompt('Введите число'));
} if(count == 999){
    console.log('Количество чисел = ' + q, '; Сумма чисел = ' + sum);
}*/
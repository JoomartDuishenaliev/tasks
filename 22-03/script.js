//99
const countNums = (x) => {
    let nums = prompt('Введите число');
    while(nums != 99){
        x++;
        nums = prompt('Введите число');
    }
    return `Количество чисел = ${x}`;
}
console.log(countNums(0));


//999
const addNums = (q, sum) => {
    let count = Number(prompt('Введите число'));
    while(count != 999){
        q++;
        sum += count;
        count = Number(prompt('Введите число'));
    }
    return `Количество чисел = ${q} ; Сумма чисел = ${sum}`;
}
console.log(addNums(0, 0));
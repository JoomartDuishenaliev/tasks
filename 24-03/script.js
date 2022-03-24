const countNums = (x) => {
    let nums = prompt('Введите число');
    while(nums != 99){
        x++;
        nums = prompt('Введите число');
    }
    return `Количество чисел = ${x}`;
}


const addNums = (q, sum) => {
    let count = Number(prompt('Введите число'));
    while(count != 999){
        q++;
        sum += count;
        count = Number(prompt('Введите число'));
    }
    return `Количество чисел = ${q} ; Сумма чисел = ${sum}`;
}


const showResult = (text) => {
    console.log(text);
}
showResult(countNums(0));
showResult(addNums(0, 0));
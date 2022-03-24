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


//1
const showAge = () => {
    let inputAge = Number(prompt('Введите ваш год рождения'));
    let inputYear = Number(prompt('Введите нынешний год'));
    return `Вам ${inputYear - inputAge} лет`;
}
console.log(showAge());


//2
const sayHi = (text) => {
    let count = 0;
    const intervalId = setInterval(() => {
        console.log(text);
        count++;
        if(count === 5){
            clearInterval(intervalId);
            console.log('Done');
        }
    }, 1000)
}
sayHi('Hello world');

const courseDollar = 40;
for(i = 10; i <= 100; i+=10){
    let result = i * courseDollar
    console.log(`${i}$ ровняется ${result} UAH`)
}

const inputNum = prompt('Введите число');

if (!inputNum?.trim() || isNaN(inputNum) || !+inputNum || +inputNum < 0 || !Number.isInteger(+prompt)){
    alert(`Не валидные данные`)
}else if(inputNum === 1){
    alert(`${inputNum} является простым`)
}else{
    let inputNumConvert = +inputNum
    let counter = 0
    for(i=2; i<inputNumConvert; i++){
        if (Number.isInteger(inputNumConvert / i)){
            counter++
        }
    }
    counter === 0 ? alert(`${inputNum} является простым`) : alert(`${inputNum} не является простым`)

}

const inputNumForTree = prompt('Введите число');
let numTree = 3;
let resultNumTree = 0;
if (!inputNumForTree?.trim() || isNaN(inputNumForTree) || !+inputNumForTree || +inputNumForTree < 0 || !Number.isInteger(+inputNumForTree)){
    alert(`Не валидные данные`)
}else{
    let inputNumForTreeConvert = +inputNumForTree
    for(i=1;resultNumTree < inputNumForTreeConvert; i++){
        resultNumTree = Math.pow(numTree,i);
        if (resultNumTree === inputNumForTreeConvert){
            alert(`${inputNumForTreeConvert} возможно получить путем возведение числа 3`)
        }
    }
    if(resultNumTree > inputNumForTreeConvert || resultNumTree !== inputNumForTreeConvert){
        alert(`${inputNumForTreeConvert} невозможно получить путем возведение числа 3`)
    }
}



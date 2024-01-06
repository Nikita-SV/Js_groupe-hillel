
const courseDollar = 40;
for(let i = 10; i <= 100; i+=10){
    const result = i * courseDollar
    console.log(`${i}$ ровняется ${result} UAH`)
}

const inputNum = prompt('Введите число');

if (inputNum === null){
    alert(`u r cancel.... okey..`)
}

else if (!inputNum.trim() || isNaN(inputNum)){
    alert(`Не валидные данные`)
}
else{
    const inputNumConvert = +inputNum   
    if (inputNumConvert <= 0 || inputNumConvert === 1){
        alert(`${inputNumConvert} не является простым`);
    }
    else if(!Number.isInteger(inputNumConvert)){
        alert(`${inputNumConvert} не является простым`);
    }
    else{
        let counter = 0
        for(let i = 2; i<inputNumConvert; i++){
            if (Number.isInteger(inputNumConvert / i)){
                counter++
            }
        }
        counter === 0 ? alert(`${inputNumConvert} является простым`) : alert(`${inputNum} не является простым`)
    
    }
}

const inputNumForTree = prompt('Введите число');
const numTree = 3;
let resultNumTree = 0;
if (!inputNumForTree?.trim() || isNaN(inputNumForTree) /*|| !+inputNumForTree*/){
    alert(`Не валидные данные`)
}else{
    const inputNumForTreeConvert = +inputNumForTree
    for(let i=0; resultNumTree < inputNumForTreeConvert; i++){
        resultNumTree = Math.pow(numTree, i);
        if (resultNumTree === inputNumForTreeConvert){
            alert(`${inputNumForTreeConvert} возможно получить путем возведение числа 3`)
        }
    }
    if(resultNumTree >= inputNumForTreeConvert || resultNumTree !== inputNumForTreeConvert){
        alert(`${inputNumForTreeConvert} невозможно получить путем возведение числа 3`)
    }
}



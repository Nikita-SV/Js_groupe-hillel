const baseNum = prompt('Введите число которое нужно возвести в степень:') 
const degree = prompt('Введите степень:') 
let result = baseNum;
let counter = 0;

function checkValue (checkBase, checkDegree){
    if (checkBase === null || checkDegree === null) return alert('Okey... u cancel')

    if(!checkBase?.trim() ||!checkDegree?.trim() || isNaN(checkBase) || isNaN(checkDegree)){
        return alert(`Не валидные данные`)
    }

    if(+checkDegree === 0 || checkBase === 1){
        return alert(`Результат возведения в степень ровняется: 1`)
    }

    if(!Number.isInteger(+checkBase)){
        return alert('Невозможно посчитать степень для нецелого числа')
    }

    else if(!Number.isInteger(+checkDegree)){
        return alert('Не целые степени не считаем')
    }

    else{
        const numBase = +checkBase
        const numDegree = +checkDegree

        pow(numBase,numDegree)
    }
}
function pow(base, degree){
    if (degree > 0){
        counter++
        if(counter === degree){
            return alert(`Результат возведения в степень: ${result}`)
        }
    }else if(degree < 0){
        counter--
        if(counter === degree){
            return alert(`Результат возведения в степень: ${1 / result}`)
        }
    }
    result *= base
    pow(base, degree)
}

checkValue(baseNum, degree);

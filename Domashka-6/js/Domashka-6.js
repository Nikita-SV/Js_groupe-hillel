
const numbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sum = 0;
let quantity = 0
for(let i = 0;i<numbers.length;i++){
    if(numbers[i]>0){
        sum += numbers[i]
        quantity++
    }
}
//---
let indexMax = 0
let max = numbers[0]
for(let i = 0; i<numbers.length;i++){
    if (max < numbers[i]){
    max = numbers[i]
    indexMax = i
    }
}
//---
let negativeNum = 0
const n = 0
for(let i = 0; i < numbers.length;i++){
    if (n > numbers[i]){
        negativeNum++
    }
}
//---
let oddPositiveCount = 0;
let sumOddPositive = 0;

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) {
        if(numbers[i] % 2 > 0) {
            oddPositiveCount++;
            sumOddPositive += numbers[i];
        }
    }
}

//--
let evenPositiveCount = 0;
let sumEvenPositive = 0;

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) {
        if(numbers[i] % 2 === 0) {
            evenPositiveCount++;
            sumEvenPositive += numbers[i];
        }
    }
}
//----
let multiplication = 1;
for(let i = 0;i<numbers.length;i++){
    if(numbers[i]>0){
        multiplication *= numbers[i]
    }
}
alert
(`Сумма положительных чисел ${sum}, а количество ${quantity};
Максимальное число является ${max}, а его индекс ${indexMax};
Количество негативных чисел ${negativeNum};
Количество положительных нечетных элементов: ${oddPositiveCount};
Сумма положительных нечетных элементов: ${sumOddPositive};
Количество положительных четных элементов: ${evenPositiveCount};
Сумма положительных четных элементов: ${sumEvenPositive};
Добуток ровняется ${multiplication}`)
// // ------------ 1 Task ------------

// let firstName = prompt('What is your name?');
// if(!isNaN(firstName) || firstName === "" || firstName === null){
//     alert(`Invalid data entered`);
// }else{
//     alert(`Hello, ${firstName}! How are you?`)
// }
 
// console.log(firstName)
// // ------------ 2 Task ------------


// const calkNumOne = prompt(`Введите первое число`);
// const calkOperator = prompt(`Введите оператор - + * /`);
// const calkNumTwo = prompt(`Введите второе число`);

// let calcResult 
// if (calkNumOne !== null && calkNumTwo !== null && !isNaN(calkNumOne) && !isNaN(calkNumTwo) && calkNumOne !== "" && calkNumTwo !== ""){
    
//     if(calkOperator !== null || calkOperator !== "" || !isNaN(calkOperator)){
//         if (calkOperator === "/"){
//             if(calkNumTwo === "0"){
//                 alert('На ноль делить нельзя')
//             }else{
//                 calcResult = calkNumOne / calkNumTwo
//                 alert(calcResult);
//             }
//         }else if(calkOperator === "*"){
//             calcResult = calkNumOne * calkNumTwo
//             alert(calcResult);
//         }else if(calkOperator === "+"){
//             calcResult = calkNumOne + calkNumTwo
//             alert(calcResult);
//         }else if(calkOperator === "-"){
//             calcResult = calkNumOne - calkNumTwo
//             alert(calcResult);
    
//         }else{
//             alert("Ops, Samsing wrong")
//         }
//     }
// }else{
//     alert("Ops, Samsing wrong")
// }

// // // ------------ 3 Task ------------
// const numOne = prompt("Введите число 'a'");
// const numTwo = prompt("Введите число 'b'");

// if (numOne === numTwo){
//     alert('true')
// }else{
//     alert('false')
// }

// // // ------------ 4 Task ------------

// let entryNum = prompt('Enter five number');
// let resultEntryNum;
// if(entryNum === null || entryNum === ""){
//     alert("Ops, whrites 0 or empty entry")
// }else if (!isNaN(entryNum) && entryNum.length === 5  && entryNum[0] > 0){
//     resultEntryNum = String((Math.floor((entryNum % 100000) / 10000))+" "+(Math.floor((entryNum % 10000) / 1000))+" "+(Math.floor((entryNum % 1000) / 100))+" "+(Math.floor((entryNum % 100) / 10))+" "+(Math.floor((entryNum % 10) / 1)));
//     alert(`результат: ${resultEntryNum}`);
// }else if(entryNum.length === 6 && entryNum[0] === "-" && !isNaN(entryNum) && entryNum[1] > 0){
//     entryNum = entryNum * -1
//     resultEntryNum = String("-"+(Math.floor((entryNum % 100000) / 10000))+" "+(Math.floor((entryNum % 10000) / 1000))+" "+(Math.floor((entryNum % 1000) / 100))+" "+(Math.floor((entryNum % 100) / 10))+" "+(Math.floor((entryNum % 10) / 1)));
// alert(`результат: ${resultEntryNum}`);
// }
// else{
//     alert("Ops, Samsing wrong")
// }

// const numbers = [5, 8, -1, '-6', 11, 'ololo', '-2']
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     if(Number.isInteger(+numbers[i])){
//         sum += Number(numbers[i]);
//     }
// }
// console.log('Sum is ' + sum)

// let input
// do{
//     input = promt('Invalide. Enter num')
// if(input === null){
//     break
// }}

// while(!input.trim() || isNaN(input))

// const num = +input
// alert(`${num} is number`);


// const num = -12345;
// let absNum = Math.abs(num)

// let result = '';

// while (absNum > 0){
//     result = ' ' + (absNum % 10) + result;
//     absNum = (absNum - absNum % 10) /10;
// };
// alert('enter num ' + (num < 0 ? '-' : '') + result.trim());

// for(let i = 1; i>6; i++){
//     console.log(i);
// }
// otherNum:while(true){
//     while(true){
//         if(i===7){
//             break otherNum
//         }
//     }
// }

//---------------------------------------------------&&--------------------

// const courseDollar = 40;
// for(i = 10; i <= 100; i+=10){
//     let result = i * courseDollar
//     console.log(`${i}$ ровняется ${result} UAH`)
// }

// const inputNum = prompt('Введите число');

// if (!inputNum?.trim() || isNaN(inputNum) || !+inputNum || +inputNum < 0 || !Number.isInteger(+prompt)){
//     alert(`Не валидные данные`)
// }else if(inputNum === 1){
//     alert(`${inputNum} является простым`)
// }else{
//     let inputNumConvert = +inputNum
//     let counter = 0
//     for(i=2; i<inputNumConvert; i++){
//         if (Number.isInteger(inputNumConvert / i)){
//             counter++
//         }
//     }
//     counter === 0 ? alert(`${inputNum} является простым`) : alert(`${inputNum} не является простым`)

// }

// const inputNumForTree = prompt('Введите число');
// let numTree = 3;
// let resultNumTree = 0;
// if (!inputNumForTree?.trim() || isNaN(inputNumForTree) || !+inputNumForTree || +inputNumForTree < 0 || !Number.isInteger(+inputNumForTree)){
//     alert(`Не валидные данные`)
// }else{
//     let inputNumForTreeConvert = +inputNumForTree
//     for(i=1;resultNumTree < inputNumForTreeConvert; i++){
//         resultNumTree = Math.pow(numTree,i);
//         if (resultNumTree === inputNumForTreeConvert){
//             alert(`${inputNumForTreeConvert} возможно получить путем возведение числа 3`)
//         }
//     }
//     if(resultNumTree > inputNumForTreeConvert || resultNumTree !== inputNumForTreeConvert){
//         alert(`${inputNumForTreeConvert} невозможно получить путем возведение числа 3`)
//     }
// }


//---------------------------------------------------&&--------------------


// Домашка с массивами

// const numbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let sum = 0;
// let quantity = 0
// for(let i = 0;i<numbers.length;i++){
//     if(numbers[i]>0){
//         sum += numbers[i]
//         quantity++
//     }
// }
// console.log(`Сумма положительных чисел ${sum}, а количество ${quantity}`)
// //---
// let max = 0
// let indexMax = 0
// for(let i = 0; i<numbers.length;i++){
//     if (max < numbers[i]){
//         max = numbers[i]
//         indexMax = i
//     }
// }
// console.log(`Максимальное число является ${max}, а его индекс ${indexMax}`)
// //---
// let negativeNum = 0
// let n = 0
// for(let i = 0; i < numbers.length;i++){
//     if (n > numbers[i]){
//         negativeNum++
//     }
// }
// console.log(`количество негативных чисел ${negativeNum}`)
// //---
// let oddPositiveCount = 0;
// let sumOddPositive = 0;

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > 0) {
//         if(numbers[i] % 2 > 0) {
//             oddPositiveCount++;
//             sumOddPositive += numbers[i];
//         }
//     }
// }

// console.log("Количество положительных нечетных элементов: " + oddPositiveCount);
// console.log("Сумма положительных нечетных элементов: " + sumOddPositive);
// //--
// let evenPositiveCount = 0;
// let sumEvenPositive = 0;

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > 0) {
//         if(numbers[i] % 2 === 0) {
//             evenPositiveCount++;
//             sumEvenPositive += numbers[i];
//         }
//     }
// }

// console.log("Количество положительных четных элементов: " + evenPositiveCount);
// console.log("Сумма положительных четных элементов: " + sumEvenPositive);


// //----
// let multiplication = 1;
// for(let i = 0;i<numbers.length;i++){
//     if(numbers[i]>0){
//         multiplication *= numbers[i]
//     }
// }
// console.log(`Добуток ровняется ${multiplication}`)


//-------------------&&--------------------
const array = [1, '2', 5, 3, '5', 4, 5, 6, '7'];
function removeElement(arrayInput, item){
    let j = 0
    for (removeItem of arrayInput){
        if (removeItem === item){
            arrayInput.splice(j , 1);
        }else{
            j++;
        }
    }
}

removeElement(array, 5);
console.log(array)
// Результат: [1, '2', 3, '5', 4, 6, '7']

























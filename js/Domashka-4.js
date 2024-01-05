
let entryNum = prompt('Enter five number');
let resultEntryNum;
if(entryNum === null || entryNum === ""){
    alert("Ops, whrites 0 or empty entry")
}else if (!isNaN(entryNum) && entryNum.length === 5  && entryNum[0] > 0){
    resultEntryNum = String((Math.floor((entryNum % 100000) / 10000))+" "+(Math.floor((entryNum % 10000) / 1000))+" "+(Math.floor((entryNum % 1000) / 100))+" "+(Math.floor((entryNum % 100) / 10))+" "+(Math.floor((entryNum % 10) / 1)));
    alert(`результат: ${resultEntryNum}`);
}else if(entryNum.length === 6 && entryNum[0] === "-" && !isNaN(entryNum) && entryNum[1] > 0){
    entryNum = entryNum * -1
    resultEntryNum = String("-"+(Math.floor((entryNum % 100000) / 10000))+" "+(Math.floor((entryNum % 10000) / 1000))+" "+(Math.floor((entryNum % 1000) / 100))+" "+(Math.floor((entryNum % 100) / 10))+" "+(Math.floor((entryNum % 10) / 1)));
alert(`результат: ${resultEntryNum}`);
}
else{
    alert("Ops, Samsing wrong")
}

const numbers = [5, 8, -1, '-6', 11, 'ololo', '-2']
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    if(Number.isInteger(+numbers[i])){
        sum += Number(numbers[i]);
    }
}
console.log('Sum is ' + sum)

let input
do{
    input = promt('Invalide. Enter num')
if(input === null){
    break
}}

while(!input.trim() || isNaN(input))

const num1 = +input
alert(`${num1} is number`);


const num2 = -12345;
let absNum = Math.abs(num2)

let result = '';

while (absNum > 0){
    result = ' ' + (absNum % 10) + result;
    absNum = (absNum - absNum % 10) /10;
};
alert('enter num ' + (num2 < 0 ? '-' : '') + result.trim());

for(let i = 1; i>6; i++){
    console.log(i);
}
otherNum:while(true){
    while(true){
        if(i===7){
            break otherNum
        }
    }
}
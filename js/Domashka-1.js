// ------------ 1 Task ------------

let firstName = prompt('What is your name?');
if(!isNaN(firstName) || firstName === "" || firstName === null){
    alert(`Invalid data entered`);
}else{
    alert(`Hello, ${firstName}! How are you?`)
}
 
console.log(firstName)
// ------------ 2 Task ------------


const calkNumOne = prompt(`Введите первое число`);
const calkOperator = prompt(`Введите оператор - + * /`);
const calkNumTwo = prompt(`Введите второе число`);

let calcResult 
if (calkNumOne !== null && calkNumTwo !== null && !isNaN(calkNumOne) && !isNaN(calkNumTwo) && calkNumOne !== "" && calkNumTwo !== ""){
    
    if(calkOperator !== null || calkOperator !== "" || !isNaN(calkOperator)){
        if (calkOperator === "/"){
            if(calkNumTwo === "0"){
                alert('На ноль делить нельзя')
            }else{
                calcResult = calkNumOne / calkNumTwo
                alert(calcResult);
            }
        }else if(calkOperator === "*"){
            calcResult = calkNumOne * calkNumTwo
            alert(calcResult);
        }else if(calkOperator === "+"){
            calcResult = calkNumOne + calkNumTwo
            alert(calcResult);
        }else if(calkOperator === "-"){
            calcResult = calkNumOne - calkNumTwo
            alert(calcResult);
    
        }else{
            alert("Ops, Samsing wrong")
        }
    }
}else{
    alert("Ops, Samsing wrong")
}

// // ------------ 3 Task ------------
const numOne = prompt("Введите число 'a'");
const numTwo = prompt("Введите число 'b'");

if (numOne === numTwo){
    alert('true')
}else{
    alert('false')
}

// // ------------ 4 Task ------------

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


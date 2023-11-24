// ------------ 1 Task ------------
/*
let firstName = prompt('What is your name?');
if(Number(firstName)){
    alert(`Write you are Name`)
}else if(String(firstName)){
    alert(`Hello, ${firstName}! How are you?`)
}else{
    alert(`Well come!`)
} */    

// ------------ 2 Task ------------

/*
let calkNumOne = prompt(`Введите первое число`);
let calkOperator = prompt(`Введите оператор - + * /`);
let calkNumTwo = prompt(`Введите второе число`);

let calcResult 

if (calkOperator === "/"){
    calcResult = calkNumOne / calkNumTwo
}else if(calkOperator === "*"){
    calcResult = calkNumOne * calkNumTwo
}else if(calkOperator === "+"){
    calcResult = Number(calkNumOne) + Number(calkNumTwo)
}else if(calkOperator === "-"){
    calcResult = calkNumOne - calkNumTwo
}
calcResult = isNaN(calcResult) ? alert(`Введены неверные значения`) : alert(calcResult);
*/

// ------------ 3 Task ------------

/*
let numOne = prompt("Введите число 'a'");
let numTwo = prompt("Введите число 'b'");

if (numOne === numTwo){
    alert('true')
}else{
    alert('false')
}
*/

// ------------ 4 Task ------------

/* */
let entryNum = prompt ('Enter five number');
if (entryNum < 10000 || entryNum > 99999 || isNaN(entryNum) ){
    alert(`Error, entered a number exceeding five digits`)
}
else{
    entryNum = String((Math.floor((entryNum % 100000) / 10000))+" "+(Math.floor((entryNum % 10000) / 1000))+" "+(Math.floor((entryNum % 1000) / 100))+" "+(Math.floor((entryNum % 100) / 10))+" "+(Math.floor((entryNum % 10) / 1)));
    alert(`результат: ${entryNum}`);
}

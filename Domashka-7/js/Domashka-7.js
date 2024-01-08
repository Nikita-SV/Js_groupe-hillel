const array = [1, '2', 5, 3, '5', 4, 5, 6, '7'];
function removeElement(arrayInput, item){
    let j = 0
    for (let removeItem of arrayInput){
        if (removeItem === item){
            arrayInput.splice(j , 1);
            j++
        }else{
            j++;
        }
    }
    return console.log(arrayInput)
}

removeElement(array, 5);
// Результат: [1, '2', 3, '5', 4, 6, '7']
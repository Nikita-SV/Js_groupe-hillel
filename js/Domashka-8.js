const inputArr = prompt('Enter values separated by " , " :')

function showSumNum(arrWhithNum){
    let sumNum = 0;
    if(arrWhithNum === null){
        alert('Ops... Okey.')
    }

    else if(!arrWhithNum.trim()){
        alert("Nothing entered")
    }
    
    else{
        const newArr = arrWhithNum.split(",");
        for(itemArr of newArr){
            if(!isNaN(+itemArr)){
                sumNum += +itemArr
            }
        }
        return alert(sumNum)
    }
}

showSumNum(inputArr)
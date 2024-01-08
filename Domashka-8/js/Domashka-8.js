const inputArr = prompt('Enter values separated by " , " :')

function showSumNum(arrWhithNum){
    let sumNum = 0;
    if(arrWhithNum === null){
        return alert('Ops... Okey.')
    }

    else if(!arrWhithNum.trim()){
        return alert("Nothing entered")
    }
    
    else{
        const newArr = arrWhithNum.split(",");
        for(let itemArr of newArr){
            if(!isNaN(+itemArr)){
                sumNum += +itemArr
            }
        }
        return alert(sumNum)
    }
}

showSumNum(inputArr)
const arrList = [1, 2, 3, 92, 7312, -20, 31, "ds", 3.2]

function someMy(arrSome, funcCondition) {
    if(typeof funcCondition !== "function"){
        return console.error(`${typeof funcCondition} ${funcCondition} is not a Function`) 
    }else{
        for(item of arrSome){
            if(funcCondition(item) === true){
                return true
            }
        }
    }
        
    return false
}

function filterMy(arrSome, ){

}




console.log(someMy(arrList, 92))
// console.log(filter(arrList, value => value === "dst"))
// console.log(reduce(arrList, value => value === "dst"))

function sumValue(val){
    return function(num){
        return val += num
    }   
}
const updateNum = sumValue(0);

console.log(updateNum(3)) // 3 
console.log(updateNum(5)) // 8 
console.log(updateNum(20)) // 28
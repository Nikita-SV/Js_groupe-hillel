function sumValue(val = 0){
    let x = val
    return function(num = 0){
        return x += num
    }
}
const updateNum = sumValue(0);

console.log(updateNum(3)) // 3 
console.log(updateNum(5)) // 8 
console.log(updateNum(20)) // 28
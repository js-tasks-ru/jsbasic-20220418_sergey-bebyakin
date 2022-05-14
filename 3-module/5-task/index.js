let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
let numKey = [];

function getMinMax(str) {
    let result = {};
    let newArr = str.split(' ').map(Number);
    for (let key of newArr) {
        if (isFinite(key)) {
            numKey.push(key);
        }
    }
    result.min = Math.min(...numKey);
    result.max = Math.max(...numKey);
    return result;


}
console.log(getMinMax(inputData));
Math.max(...numKey);
Math.min(...numKey);
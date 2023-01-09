const fibonacci = function(val) {
    let num = parseInt(val);
    if (num < 0) {
        return "OOPS"
    }
    let arr = Array(num).fill(1);
    for (let i = 2; i < num; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;

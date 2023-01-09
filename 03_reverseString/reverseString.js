const reverseString = function(word) {
    let result = "";
    for (let i = word.length; i >= 0; i--){
        result += word.charAt(i);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;

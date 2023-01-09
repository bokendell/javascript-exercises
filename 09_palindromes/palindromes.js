const palindromes = function (string) {
    string = string.replace(/[^A-Za-z]/g, '');
    string = string.toLowerCase();
    let reverseWord = "";
    for (let i = string.length; i >= 0; i--){
        reverseWord += string.charAt(i);
    }
    if (string === reverseWord){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;

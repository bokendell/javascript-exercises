const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let result = 0;
	for (let i = 0; i < array.length; i++){
    result += array[i];
  }
  return result;
};

const multiply = function(array) {
  let result = array[0];
	for (let i = 1; i < array.length; i++){
    result *= array[i];
  }
  return result;
};

const power = function(num, power) {
	let result = num;
  for (let i = 1; i < power; i++){
    result *= num;
  }
  return result;
};

const factorial = function(num) {
  if (num === 0){
    return 1;
  }
	result = num;
  for (let i = num - 1; i > 0; i--){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

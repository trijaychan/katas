const camelCase = function(input) {
  let result = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ' && i != 0) {
      result += input[i + 1].toUpperCase();
      i++;
    } else {
      result += input[i];
    }
  }

  return result;
};
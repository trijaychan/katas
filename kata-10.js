const multiplicationTable = function(maxValue) {
  let table = '';

  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      table += i*j + ' ';
    }
    
    table += '\n';
  }

  return table;
};
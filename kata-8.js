const repeatNumbers = function(data) {
  let result = '';

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i][1]; j++) {
      result += data[i][0];
    }

    if (data.length > 1 && i != data.length - 1) {
      result += ', ';
    }
  }

  return result;
};
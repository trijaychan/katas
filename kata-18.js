
const squareCode = function(message) {
  let temp = message.replace(/ /g, '');

  let square = '';
  let condition = true;
  let i = 0;
  let counter1 = 0;
  let counter2 = 0;

  while (counter1 != temp.length) {
    square += temp[i];
    i += Math.ceil(Math.sqrt(temp.length));
    counter1++;

    if (i >= temp.length) {
      square += ' ';
      counter2++;
      i = counter2;
    }
  }

  return square;
};
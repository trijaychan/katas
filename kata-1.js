const sumLargestNumbers = function (data) {
  let sum = 0;
  let largest = 0;

  for (let i = 0; i < 2; i++) {
    for (num of data) {
      if (num > largest && num != sum) {
        largest = num;
      }
    }

    sum += largest;
    largest = 0;
  }
  
  return  sum;
}
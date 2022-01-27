const conditionalSum = function (values, condition) {
  let val;
  let sum = 0;

  if (condition === "even") {
    val = 0;
  } else {
    val = 1;
  }

  for (num of values) {
    if (num % 2 === val) {
      sum += num;
    }
  }

  return sum;
}
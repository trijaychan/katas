const calculateChange = function(total, cash) {
  const amounts = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  };

  cash -= total;
  let change = {};

  for (let key in amounts) {
    if (cash / amounts[key] >= 1) {
      change[key] = Math.floor(cash / amounts[key]);
      cash = cash % amounts[key];
    }
  }

  return change;
};
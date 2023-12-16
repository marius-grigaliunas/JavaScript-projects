function checkCashRegister(price, cash, cid) {
  let registerSum = Math.round(cid.reduce((accumulator, current) => accumulator + current[1], 0)*100)/100;

  let registerCash = cid.map(([unit, amount]) => ({
    unit, amount}));

  const values = {
    "PENNY"       : 0.01,
    "NICKEL"      : 0.05,
    "DIME"        : 0.1,
    "QUARTER"     : 0.25,
    "ONE"         : 1,
    "FIVE"        : 5,
    "TEN"         : 10,
    "TWENTY"      : 20,
    "ONE HUNDRED" : 100
  };

  let change = Math.round((cash - price) * 100) / 100;

  let result = [];

  if(change > registerSum) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  else if(change == registerSum) {
    return {status: "CLOSED", change: cid.map(item => item)};
  }
  else {
    for(let i = registerCash.length - 1; i >= 0; i--) {
      if(change > values[registerCash[i].unit]){
        
        if(registerCash[i].amount > change) {
          
          let wholePart = Math.trunc(change / values[registerCash[i].unit]);
          let placeholder = [registerCash[i].unit , wholePart * values[registerCash[i].unit]];
          result.push(placeholder);
          change = Math.round((change - (wholePart * values[registerCash[i].unit])) * 100) / 100;

        }
        else {

          let placeholder = [registerCash[i].unit , registerCash[i].amount];
          result.push(placeholder);
          change = Math.round((change - registerCash[i].amount) * 100) / 100;
        }
      }
    }

    if(change > 0)
      return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  return {status: "OPEN", change: result};

}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
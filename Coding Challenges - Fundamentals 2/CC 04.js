let calcTip = (bill) => (bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

let calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(tips));

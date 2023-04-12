let calcTip = (bill) => (bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2);

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// let calcTip = function (bill) {
//   if(bill <= 300 && bill >= 50) {
//     let tip = bill * .15;
//     tips.push(tip);
//     total.push(bill + tip)
//   } else {
//      let tip = bill * .20;
//     tips.push(tip);
//     total.push(bill + tip)
//   }
// }

console.log(tips, totals);

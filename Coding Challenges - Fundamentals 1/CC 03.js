// const dolphinsAvg = ( 96 + 108 + 89) / 3;
// const koalasAvg = (88 + 91 + 110) / 3;

// Bonus 1
// const dolphinsAvg = (97 + 112 + 101) / 3;
// const koalasAvg = (109 + 95 + 123) / 3

// Bonus 2
const dolphinsAvg = (97 + 112 + 101) / 3;
const koalasAvg = (109 + 95 + 106) / 3;

console.log(Math.round(dolphinsAvg), Math.round(koalasAvg));

if (dolphinsAvg == koalasAvg || (dolphinsAvg <= 100 && koalasAvg <= 100)) {
  console.log("No team won");
} else if (dolphinsAvg > koalasAvg) {
  console.log("Dolphins win!");
} else {
  console.log("Koalas win!");
}

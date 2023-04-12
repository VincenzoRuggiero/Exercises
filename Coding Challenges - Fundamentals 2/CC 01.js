//Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

//Data 2
// let scoreDolphins = calcAverage(85, 54, 41);
// let scoreKoalas = calcAverage(23, 34, 27);

// let winner = avgDolphins > avgKoalas ? `Dolphins wins (${avgDolphins} vs ${avgKoalas}) ` : `Koalas wins (${avgKoalas} vs ${avgDolphins}) `

let checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas}) `);
  } else if (avgKoalas >= 2 * avgDolphins) {
    `Koalas wins (${avgKoalas} vs ${avgDolphins}) `;
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

function calcAverage(score1, score2, score3) {
  return (average = (score1 + score2 + score3) / 3);
}

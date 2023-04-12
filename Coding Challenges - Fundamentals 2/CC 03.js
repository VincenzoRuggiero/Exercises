const mark = {
  firstName: "Mark",
  lastName: "Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  firstName: "John",
  lastName: "Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

let winner =
  mark.calcBMI() > john.calcBMI()
    ? `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})!`
    : `${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})!`;

winner;

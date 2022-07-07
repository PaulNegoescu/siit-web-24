const user1 = {
  fName: 'Paul',
  lName: 'Negoescu',
  age: 37,
  weight: 95,
  height: 1.85,
  calculateBmi() {
    return (this.weight / this.height ** 2).toFixed(2);
  },
};

console.log(user1.calculateBmi());

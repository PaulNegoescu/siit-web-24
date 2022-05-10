function getStringFromUser(message) {
  const str = prompt(message);

  if (str === '' || str === null) {
    //|| !str.match(/[a-z]+/i)) {
    throw 'Nu ati introdus un text valid.';
  }

  return str;
}

const fName = getStringFromUser('Care este prenumele tau?');
const lName = getStringFromUser('Care este numele tau de familie?');

function getNumberFromUser(message) {
  const input = prompt(message);
  const num = Number(input);

  if (input === '' || input === null) {
    throw 'Nu ati introdus niciun numar!';
  }

  if (Number.isNaN(num)) {
    throw 'Nu ati introdus un numar valid!';
  }

  return num;
}

const weight = getNumberFromUser('Greutatea in kg: ');
const height = getNumberFromUser('Inaltimea in metri: ');

if (weight <= 20 || weight > 200 || height < 0.5 || height > 2.5) {
  throw 'Nu putem calcula IMC cu aceste valori!';
}

const bmi = weight / height ** 2;

// console.log(fName + ' ' + lName + ' has a BMI of: ' + bmi.toFixed(2));
// Template literal
// Interpolation
console.log(`${fName} ${lName} has a BMI of: ${bmi.toFixed(2)}!`);

// switch (weight) {
//   case 10: {
//     console.log('Greutatea e 10');
//     break;
//   }
//   case 'Paul': {
//     console.log('Greutatea nu e un numar');
//     break;
//   }
//   default: {
//     console.log('Greutatea a fost altceva');
//     break;
//   }
// }

// if(weight === 10) {
//   console.log('Greutatea e 10');
// } else if(weight === 'Paul') {
//   console.log('Greutatea nu e un numar');
// } else {
//   console.log('Greutatea a fost altceva');
// }

const age = 16;
console.log(`Utilizatorul este ${age >= 18 ? 'adult' : 'minor'}`);
const state = age >= 18 ? 'adult' : 'minor';

const titles = ['Spiderman', 'Star Wars', 'The good doctor'];

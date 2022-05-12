function averageOf3Numbers(n1, n2, n3) {
  const average = (n1 + n2 + n3) / 3;

  return average;
}

// consolelog(averageOf3Numbers(2, 5, 9));

function maximumOf3Numbers(n1, n2, n3, n4) {
  let max = n1;
  if (n2 > max) {
    max = n2;
  }

  if (n3 > max) {
    max = n3;
  }

  if (n4 > max) {
    max = n4;
  }

  return max;
}

// console.log(maximumOf3Numbers(-6, 0, -3, -7));

function showNumbers() {
  // let n = 1;
  // while (n <= 10000) {
  //   console.log(n);
  //   n++;
  // }
  for (let n = 1000; n >= 1; n = n - 10) {
    console.log(n);
  }
}

// showNumbers();

function getNumberFromUser(message) {
  let num;
  let input;
  do {
    input = prompt(message);
    num = Number(input);
  } while (Number.isNaN(num) || input === '' || input === null);

  return num;
}

// getNumberFromUser('Introdu un numar: ');

// const arr = ['Spiderman', 'Superman', 'Batman'];

function showNamesWithS(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i][0] === 'S') {
      console.log(a[i]);
    }
  }
}

showNamesWithS(['Spiderman', 'Superman', 'Batman']);
showNamesWithS(['Simona', 'Paul', 'Sergiu']);
// showNamesWithS();

/*
default paremeter: function sumOfNumbers(a, b = 0) {}
arguments -> Aici sunt toate argumentele pe care le primeste functia
rest parameter -> ...altele
*/
function sumOfNumbers(...arr) {
  let suma = 0;
  console.log(arr);
  // for (let i = 0; i < arr.length; i++) {
  //   const num = altele[i];

  // for .. of
  for (const n of arr) {
    suma = suma + n;
  }
  return suma;
}

console.log(sumOfNumbers(1, 7, 3, 4, 5, 7, 5, 3, -1, 0, -23, 100, 500, 77));

// Callbacks
const sum = function (a, b) {
  return a + b;
};
console.log(sum(1, 3));

function onlyPositive(p1, p2, cb) {
  if (p1 > 0 && p2 > 0) {
    return cb(p1, p2);
  }
  return null;
}

console.log(onlyPositive(-1, 3, sum));

function multiply(a, b) {
  return a * b;
}

console.log(onlyPositive(2, 3, multiply));

console.log(onlyPositive(4, 6, Math.min));

// Arrow functions
const func1 = function (a, b) {
  return a + b;
};
const func2 = (a, b) => a + b;

const func3 = (a, b) => {
  return a + b;
};

func1(1, 2);
func2(1, 2);
func3(1, 2);

// Object Literals
const person = {
  firstName: 'Paul',
  lastName: 'Negoescu',
  'full-name': 'Paul Negoescu',
  age: 36,
  weight: 95,
  height: 1.85,
  calculateBmi(roundTo) {
    return (this.weight / this.height ** 2).toFixed(roundTo);
  },
};

const ceCaut = 'firstName';

console.log(person[ceCaut]);

/*** Array Functions ***/
/*
0. Sa se scrie o functie care primeste array-ul de mai jos ca parametru 
si returneaza un array de numere unde toate numerele au fost adunate cu 2
*/
// console.clear();
const strArr = ['13', '2', '34', '14', '5', '86', '3.46'];

console.log('Typecast: ', typeCastAndAdd(strArr));

function typeCastAndAdd(arr) {
  // return myMap(arr, (elem) => Number(elem) + 2);

  return arr.map((elem) => Number(elem) + 2);

  // function mappingFn(elem) {
  //   return Number(elem) + 2;
  // }

  // const newArr = arr.map(mappingFn);

  // return newArr;

  // const newArr = [];
  // for (const elem of arr) {
  //   newArr.push(Number(elem) + 2);
  // }
  // return newArr;

  // const newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   const elem = arr[i];
  //   newArr.push(Number(elem) + 2);
  // }

  // return newArr;
}

function myMap(arr, callbackfn) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    const newElem = callbackfn(elem, i, arr);
    newArr.push(newElem);
  }

  return newArr;
}

/* 
1. Sa se implementeze o functie care primeste un array de obiecte si un nume de cheie 
si returneaza un array cu toate valorile corespunzatoare cheii din obiectele din array.
*/
const demoArr = [
  { id: 1, color: 'red', height: 15, width: 20, distance: 10 },
  { id: 2, color: 'green', height: 5, width: 30, distance: 15 },
  { id: 3, color: 'turqoize', height: 7, width: 9, distance: 8 },
  { id: 4, color: 'blue', height: 2, width: 3, distance: 3 },
  { id: 5, color: 'red', height: 10, width: 10, distance: 2 },
  { id: 6, color: 'crimson', height: 7, width: 8, distance: 16 },
];

function pluck(arr, orice) {
  return arr.map((obj) => obj[orice]);

  // const newArr = [];
  // for (const obj of arr) {
  //   newArr.push(obj[orice]);
  // }
  // return newArr;

  // const newArr = [];
  // for (i = 0; i < arr.length; i++) {
  //   newArr.push(arr[i][orice]);
  // }
  // return newArr;
}

console.log('Pluck: ', pluck(demoArr, 'color')); // => ['red', 'green', 'turqoize' .......];

/*
2. Sa se implementeze o functie care returneaza un array cu ariile tuturor elementelor 
din array-ul de mai sus, aria e inaltime * latime.
*/
console.log('Calclulate area:', calculateArea(demoArr));

function calculateArea(arr) {
  return arr.map((elem) => elem.height * elem.width);

  // const newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   const elem = arr[i];

  //   newArr.push(elem.height * elem.width);
  // }
  // return newArr;
}

/*
3. Sa se scrie o functie care returneaza un subset din array-ul de mai sus 
unde elementele au aria mai mica sau egala cu 100
*/
function filterArr(arr) {
  return arr.filter((elem) => elem.height * elem.width <= 100);

  // const newArr = [];
  // for (const elem of arr) {
  //   if (elem.height * elem.width <= 100) {
  //     newArr.push(elem);
  //   }
  // }
  // return newArr;
}

console.log('Filter: ', filterArr(demoArr));

/*
4. Sa se implementeze o functie numita reject, care primeste un array si o 
functie iterator. Functia iterator primeste cate un element din array ca si 
parametru si trebuie sa returneze true sau false. Daca returneaza true, elementul 
in cauza nu va fi inclus de functia parinte in array-ul rezultat. Daca returneaza 
false va fi inclus.
*/

function iterator(elem) {
  return elem.height * elem.width <= 100;
}

function reject(arr, cb) {
  const newArr = [];
  for (const elem of arr) {
    if (!cb(elem)) {
      newArr.push(elem);
    }
  }
  return newArr;
}
console.log('Reject', reject(demoArr, iterator));

/*
5. Sa se scrie o functie care returneaza elementul cu culoarea crimson
*/
console.log('Find Color: ', findColor(demoArr, 'crimson'));

function findColor(arr, color) {
  return arr.find((elem) => elem.color === color);
  // for (const elem of arr) {
  //   if (elem.color === color) {
  //     return elem;
  //   }
  // }
}
/*
6. Sa se scrie o functie care returneaza true daca toate elementele din array 
au aria >= 10, false altfel.
*/
console.log('Areas are Bigger: ', areasAreBigger(demoArr, 7));

function areasAreBigger(arr, area) {
  return arr.every((elem) => elem.height * elem.width >= area);
  // for (const elem of arr) {
  //   if (!(elem.height * elem.width >= area)) {
  //     return false;
  //   }
  // }

  // return true;
}

/*
7. Sa se scrie o functie care returneaza true daca cel putin unul din elementele 
array-ului are culoarea 'green';
*/
console.log('At Least One: ', atLeastOneIsOfColor(demoArr, 'green'));

function atLeastOneIsOfColor(arr, color) {
  return arr.some((elem) => elem.color === color);
  // for (const elem of arr) {
  //   if (elem.color === color) {
  //     return true;
  //   }
  // }

  // return false;
}

/*
8. Sa se scrie o functie care returneaza distanta totala (suma distantelor elementelor)
*/
console.log('Sum of distances: ', sumOfDistances(demoArr));

function addTogether(sum, elem) {
  return sum + elem.distance;
}

function sumOfDistances(arr) {
  return arr.reduce(addTogether, 0);

  // let sum = 0;
  // for (const elem of arr) {
  //   sum = sum + elem.distance;
  // }

  // return sum;
}

/*
9. Sa se scrie o functie care returneaza un obiect in care se numara de cate 
ori apare fiecare culoare in parte in array-ul de obiecte. {red: 2, blue: 1, etc...}
*/
console.log('Number of colors: ', noColors(demoArr));

function noColors(arr) {
  const obj = {};

  for (const elem of arr) {
    if (obj[elem.color] !== undefined) {
      obj[elem.color] += 1;
    } else {
      obj[elem.color] = 1;
    }
  }

  return obj;
}

/*
10. Sa se scrie o functie care returneaza un array cu toate elementele care au 
o culoare unica. Oricare element dupa primul care are o culoare care s-ar 
repeta nu este inclus in array.
*/
console.log('Unique Colors: ', uniqueColors(demoArr));

function uniqueColors(arr) {
  const newArr = [];
  const foundColors = {};

  for (const elem of arr) {
    if (!foundColors[elem.color]) {
      newArr.push(elem);
      foundColors[elem.color] = true;
    }
  }

  return newArr;
}

/*
11. Sa se inverseze doua variabile.
*/
let a = 5,
  b = 8;

// Destructuring assignment
[a, b] = [b, a];

console.log('A:', a, 'B:', b);

//Destructuring assignment with rest operator
const [one, two, ...altele] = demoArr;
const clone = [...demoArr];

const unu = demoArr.at(-2);
const doi = demoArr.at(-1);

console.log({ one, two, altele });

/*
12. Folosind array-ul de mai jos, vreau sa se obtina o variabila care contine 
un array de obiecte strcturat astfel:
[
  {subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick'},
  ...
]
*/
const classes = [
  ['Chemistry', '9AM', 'Mr. Darnick'],
  ['Physics', '10:15AM', 'Mrs. Lithun'],
  ['Math', '11:30AM', 'Mrs. Vitalis'],
];
// const objClasses = classes.map((arr) => ({
//   subject: arr[0],
//   time: arr[1],
//   teacher: arr[2],
// }));
const objClasses = classes.map(([subject, time, teacher]) => ({
  subject,
  time,
  teacher,
}));
console.log('Classes: ', objClasses);

// console.clear();

const result1 = [
  { id: 1, name: 'Sandra', type: 'user', username: 'sandra' },
  { id: 2, name: 'John', type: 'admin', username: 'johnny2' },
  { id: 3, name: 'Peter', type: 'user', username: 'pete' },
  { id: 4, name: 'Bobby', type: 'user', username: 'be_bob' },
];

const result2 = [
  { id: 2, name: 'John', email: 'johnny@example.com' },
  { id: 4, name: 'Paul', email: 'bobby@example.com' },
];

const props = ['id', 'name'];

function arrayIntersection(arr1, arr2, props) {}

function arrayIntersection2(arr1, arr2) {}

console.log(arrayIntersection2(result1, result2, props));

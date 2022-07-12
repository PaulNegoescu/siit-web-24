'use strict';

function test() {
  console.log(this);
  const user1 = {
    fName: 'Paul',
    lName: 'Negoescu',
    age: 37,
    weight: 95,
    height: 1.85,
    calculateBmi() {
      return (this.weight / this.height ** 2).toFixed(2);
    },
    whatIsThis(a, b) {
      console.log(this, a, b);
    },
    whatIsThis2: () => {
      console.log(this);
    },
  };
  return user1;
}

const user1 = test.call('un this');

const user2 = {
  fName: 'Wili',
  lName: 'Grosz',
  age: 25,
  weight: 70,
  height: 1.8,
  calculateBmi: user1.calculateBmi,
  func2: user1.whatIsThis,
  get fullName() {},
  set fullName(value) {},
};

// console.log(user2.calculateBmi(), user1.calculateBmi());
// const func = user1.whatIsThis;
// user1.whatIsThis();
// user2.func2();
// func(1, 2);

// const func3 = user1.whatIsThis.bind('ceva', 7);
// func3(8);
// func.call(user2, 3, 4);
// func.apply(user2, [5, 6]);

// user1.whatIsThis2();
/*
What is this?
1. (Implicit binding) This is whatever is to the left of the dot at the time of function invocation.
    a. If not in strict mode, this for functions not called on an object, will be window
    b. In stict mode, --- " ---, will be undefined
2. Explicit binding
    a. At invocation time: call, apply to set this explicitly to whatever we want
    b. At definition time:
        i. using bind to create a new function with a bound this (whatever we want)
        ii. arrow functions take this from the scope they are defined in (lexical this)
*/
function User(fName, lName, age, weight, height) {
  this.fName = fName;
  this.lName = lName;
  this.age = age;
  this.weight = weight;
  this.height = height;

  this.toString = function () {
    return 'Hahaha';
  };
}

User.altaStatica = function () {};

User.prototype.calculateBmi = function () {
  return (this.weight / this.height ** 2).toFixed(2);
};

const user3 = new User('Paul', 'Negoescu', 37, 95, 1.85);
const user4 = new User('Andrei', 'Testsubject', 23, 100, 1.75);
console.log(user3);

// Inheritance
class Admin extends User {
  // proprietate publica
  oarecare = 'ceva';

  //proprietate privata (un mod de a forta incapsularea)
  #oPrivata = 'vizibila doar in clasa';

  constructor(isSuper, ...config) {
    super(...config);
    this.isSuper = isSuper;
    // this.oarecare = 'ceva';
  }

  aFunction() {
    return this.oarecare;
  }

  damiPrivata() {
    return this.#oPrivata;
  }

  // Getter ... Magic Getter
  get fullName() {
    return this.fName + ' ' + this.lName + ' is an admin';
  }

  // Setter ... Magic Setter
  set fullName(value) {
    const parts = value.split(' ');
    this.fName = parts[0];
    this.lName = parts[1];
  }

  static metodaStatica() {
    console.log('Aici nu am acces la this');
  }
}

const admin1 = new Admin(true, 'Paul', 'Negoescu', 37, 95, 1.85);
admin1.fullName = 'Andrei Popescu';
console.log(admin1.fullName);

// SOLID - Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion

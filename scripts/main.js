'use strict';

(function () {
  const sink = document.querySelector('[data-counter-outlet]');
  const buttons = document.querySelectorAll('[data-counter-button]');

  for (const button of buttons) {
    button.addEventListener('click', handleClick);
  }

  let count = 0;
  function handleClick(e) {
    // console.log(e.target.dataset.counterButton);
    switch (e.target.dataset.counterButton) {
      case 'dec': {
        count--;
        break;
      }
      case 'inc': {
        count++;
        break;
      }
      case 'reset': {
        count = 0;
        break;
      }
      default: {
        throw new Error(
          'You need to implement functionality for ' +
            e.target.dataset.counterButton
        );
      }
    }

    // sink.classList.remove('positive', 'negative');
    // if (count > 0) {
    //   sink.classList.add('positive');
    // } else if (count < 0) {
    //   sink.classList.add('negative');
    // }

    sink.classList.toggle('positive', count > 0);
    sink.classList.toggle('negative', count < 0);

    sink.innerText = count;
  }

  function getRandomInt(min = 0, max = 3) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
})();

// Immediately Invoked Function Expression
// IIFE
(function () {
  function fizzbuzz(num) {
    for (let i = 1; i <= num; i++) {
      let out = '';
      if (i % 3 === 0) {
        out = 'fizz';
      }

      if (i % 5 === 0) {
        out += 'buzz';
      }

      out = out || i;

      console.log(out);
    }
  }

  // fizzbuzz(16);

  // 1 0 1 0
  // 0 1 0 1
  // 1 0 1 0
  // 0 1 0 1
  function unuZero(num) {
    for (let i = 1; i <= num; i++) {
      let res = '';
      for (let j = 0; j < num; j++) {
        res += Math.abs((i % 2) - (j % 2)) + ' ';
      }

      console.log(res);
    }
  }
  // unuZero(10);
})();

const c = 10;

// Hoisting
function sum(a, b) {
  // console.log({ a, b, c });
  let c = 5;
  return a + b + c;
}

// sum(1, 2);

function test() {
  // for (let i = 0; i < 10; i++) {
  //   console.log(i);
  // }
  {
    let i = 0;

    while (i < 10) {
      const z = 4;
      console.log(i, z);
      i++;
    }
  }

  console.log(h); // temporal deadzone for h => error
  let h = 10;
}

// test();

// var -> function scope
//     -> hoisted (overused term?), you can use it before initialization
// let, const -> block scope
//            -> throw errors if used before initialization
//            -> Temporal Deadzone -> the time between scope
//                                    start and variable
//                                    initialization (variables
//                                    throw errors if used in the deadzone)
// global scope (window, globalThis), function scope, block scope, module scope

// Scope sideeffect (interesting solution)
// Closure
function parent(a) {
  const b = 10;

  function child(c) {
    return a + b + c;
  }

  return child;
}

const f1 = parent(1);
const f2 = parent(3);
console.log(f1(2), f2(2));

// Functional programming
// Practical usecase for closures
function functionalSum(a) {
  return (b) => a + b;
}

const add5 = functionalSum(5);
const add2 = functionalSum(2);

console.log(add5(3), add5(5), add5(10), add2(5), add2(2));
// Currying
console.log(functionalSum(1)(3), functionalSum(4)(4));

// Practical usecase for closures: caching
function keepAdding() {
  let sum = 0; // this is our cache
  return function (n) {
    sum = sum + n;
    return sum;
  };
}

const adder = keepAdding();
console.log(adder(2), adder(3), adder(4));

// Practical example for closures: fibbonaci
// Functional programming: memoization
function fibonacciFactory() {
  const res = [1, 1]; // memoized value

  function fib(n) {
    if (n > 2) {
      for (let i = res.length; i < n; i++) {
        const next = res[i - 2] + res[i - 1];

        res.push(next);
      }
    }

    return res;
  }

  return fib;
}

const fib = fibonacciFactory();

console.time('perf');
for (let i = 0; i < 1000000; i++) {
  fib(i);
}
console.timeEnd('perf');

// Asyncronous programming
// Event Loop -> Call stack -> Microtask Queue & Task Queue & Animation Queue
console.log(1);
setTimeout(() => console.log(2), 1000);
setTimeout(() => console.log(3), 0);
// for (let i = 0; i < 50000; i++) {
console.log(4);
// }

// all get printed out at once => all sync code runs almost instantly => all setTimeouts wait 1 second starting at almost the same moment
// with var we only see the number 5 => scope+closure => with var no closure because i in global scope, with let closure because i in for block scope
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), (i + 1) * 1000);
}

const o = {
  prop: 1,
};

console.log(JSON.stringify(o));
o.prop = 2;

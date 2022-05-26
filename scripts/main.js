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

  sink.classList.add('positive');
  sink.innerText = count;
}

function getRandomInt(min = 0, max = 3) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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
unuZero(10);

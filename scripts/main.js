// XMLHTTPRequest
// AJAX
const promise = fetch('https://jsonplaceholder.typicodee.com/todos?userId=3')
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => console.warn(e));

// const promisiune = new Promise().resolve('datele mele');
const promisiune = new Promise((resolve, reject) => {
  setTimeout(() => resolve('eroarea mea'), 2000);
});

promisiune.then((data) => {
  console.log(data);

  return 123;
}, console.warn);
// .then(function (d) {
//   console.log(d);
// })
// .then(console.log);

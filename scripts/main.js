const movieList = document.querySelector('[data-movie-list]');

const params = new URLSearchParams(location.search);
//nullish coalescing operator
const page = Number(params.get('page')) ?? 1;
// if(variabila === null || variabila === undefined) {
//   page = 1;
// } else {
//   page = variabila
// }

fetch(`http://localhost:3000/movies?_page=${page}`)
  .then((res) => {
    console.log(res.headers.get('X-Total-Count'));
    return res.json();
  })
  .then(renderList);
function renderList(movies) {
  for (const movie of movies) {
    const a = document.createElement('a');
    a.href = 'movieDetails.html?movieId=' + movie.id;
    a.innerText = movie.title;
    const br = document.createElement('br');
    movieList.append(a, br);
  }
}

const paginationContainer = document.querySelector('[data-pagination-dynamic]');
let minPage = page - 2;
let maxPage = page + 2;
minPage = minPage < 2 ? 2 : minPage;
maxPage = maxPage > 49 ? 49 : maxPage;

const prevLink = document.querySelector('[data-prev]');
const nextLink = document.querySelector('[data-next]');
prevLink.href = `?page=${page - 1}`;
nextLink.href = `?page=${page + 1}`;

if (minPage > 2) {
  const span = createSeparator();
  paginationContainer.prepend(span);
}

for (let i = minPage; i <= maxPage; i++) {
  const a = document.createElement('a');
  a.href = `?page=${i}`;
  a.innerText = i;
  paginationContainer.append(a);
}

if (maxPage < 49) {
  const span = createSeparator();
  paginationContainer.append(span);
}

function createSeparator() {
  const span = document.createElement('span');
  span.innerText = '...';
  return span;
}

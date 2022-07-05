const movieList = document.querySelector('[data-movie-list]');

fetch('http://localhost:3000/movies')
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

const params = new URLSearchParams(location.search);
const movieId = params.get('movieId');

console.log(movieId);

fetch('http://localhost:3000/movies/' + movieId)
  .then((res) => res.json())
  .then(populateHtml);
function populateHtml(movie) {
  document.querySelector('[data-movie-title]').innerText = movie.title;
}

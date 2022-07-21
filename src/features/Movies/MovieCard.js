import { Link } from 'react-router-dom';

export function MovieCard({ film }) {
  return (
    <article>
      <Link to={`/movies/${film.id}`}>
        <img src={film.poster} alt={`${film.title} poster`} />
        <h2>{film.title}</h2>
      </Link>
    </article>
  );
}

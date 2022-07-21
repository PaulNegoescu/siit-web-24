import { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';

import styles from './Movies.module.css';

export function MovieList() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3005/api/movies?_limit=20')
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  if (!movies) {
    return <strong>Loading ...</strong>;
  }

  // const movieList = [];
  // for (const movie of movies) {
  //   movieList.push(
  //     <article>
  //       <img src={movie.poster} alt={`${movie.title} poster`} />
  //       <h2>{movie.title}</h2>
  //     </article>
  //   );
  // }

  return (
    <section className={styles['movie-list']}>
      <h1>Movies</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} film={movie} />
      ))}
    </section>
  );
}

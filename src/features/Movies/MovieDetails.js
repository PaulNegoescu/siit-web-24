import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3005/movies/' + movieId)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [movieId]);

  if (!movie) {
    return <strong>Loading...</strong>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <div className="grid grid-cols-3">
        <img src={movie.poster} alt={`${movie.title} Poster`} />
        <p>{movie.plot}</p>
        <p style={{ color: '#bada55' }}>
          <FontAwesomeIcon icon={regular('star')} />{' '}
          <strong>{movie.imdbrating} / 10</strong>
        </p>
      </div>
    </>
  );
}

// function createAdder(initialNumber) {
//   return function (secondNumber) {
//     return initialNumber + secondNumber;
//   }
// }

// const addFive = createAdder(5);
// const addTwelve = createAdder(12);

// console.log(addFive(3));
// console.log(addTwelve(3));

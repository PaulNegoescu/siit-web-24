import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useAuthContext } from '../Auth/AuthContext';

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { accessToken } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3005/movies/' + movieId)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [movieId]);

  if (!movie) {
    return <strong>Loading...</strong>;
  }

  async function handleDeleteMovie() {
    const res = window.confirm(
      `Do you really want to delete the movie "${movie.title}"?`
    );
    if (!res) {
      return;
    }

    await fetch('http://localhost:3005/movies/' + movie.id, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    navigate('/movies');
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
        <button onClick={handleDeleteMovie}>Delete Movie</button>
        <Link to={`/movies/edit/${movie.id}`}>Edit this movie</Link>
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

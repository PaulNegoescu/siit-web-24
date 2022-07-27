import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../Auth/AuthContext';

export function EditMovie() {
  const [values, setValues] = useState({
    title: '',
    poster: '',
  });
  const [errors, setErrors] = useState({
    title: '',
    poster: '',
  });

  const { movieId } = useParams();

  useEffect(() => {
    fetch('http://localhost:3005/movies/' + movieId)
      .then((res) => res.json())
      .then((data) => setValues(data));
  }, [movieId]);

  const [message, setMessage] = useState('');

  const { accessToken } = useAuthContext();

  function handleInputChange(e) {
    setErrors({ ...errors, [e.target.name]: '' });
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await fetch('http://localhost:3005/movies/' + values.id, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(values),
    }).then((res) => res.json());

    setMessage('The movie was updated successfully');
  }

  return (
    <>
      <h1>Edit {values.title}</h1>
      <form onSubmit={handleSubmit}>
        {message && (
          <p className="mt-1 text-green-800 bg-green-300 rounded w-96 m-auto p-3">
            {message}
          </p>
        )}
        <p className="mt-1">
          <label htmlFor="title">Title</label>
          <input
            className={clsx('border rounded border-black ml-1', {
              'border-red-800': errors.title,
            })}
            type="text"
            name="title"
            id="title"
            value={values.title}
            onChange={handleInputChange}
          />
        </p>
        {errors.title && <p className="mt-1 text-red-800">{errors.title}</p>}
        <p className="mt-1">
          <label htmlFor="poster">Poster</label>
          <input
            className={clsx('border rounded border-black ml-1', {
              'border-red-800': errors.title,
            })}
            type="text"
            name="poster"
            id="poster"
            value={values.poster}
            onChange={handleInputChange}
          />
        </p>
        {errors.poster && <p className="mt-1 text-red-800">{errors.poster}</p>}

        <p className="mt-1">
          <button className="rounded bg-teal-500 text-teal-900 px-2 py-1 cursor-pointer">
            Edit Movie
          </button>
        </p>
      </form>
    </>
  );
}

import { useEffect, useState } from 'react';

export function Weather({ city }) {
  const [weather, setWeather] = useState(null);
  const [values, setValues] = useState({
    city,
    country: 'RO',
  });

  useEffect(() => {
    // setValues({ ...values, city });
    setValues((oldState) => {
      return { ...oldState, city };
    });
  }, [city]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},RO&appid=c7da641777760054e5ca6164eb47580a`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [city]);

  // if (!weather) {
  //   return <strong>Loading ...</strong>;
  // }

  const currentTemp = (weather?.main.temp - 273.15).toFixed(1);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${values.city},${values.country}&appid=c7da641777760054e5ca6164eb47580a`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }

  function handleInputChange(e) {
    // const newValues = { ...values };
    // newValues[e.target.name] = e.target.value;
    // setValues(newValues);

    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h1>Weather</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={values.city}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="country">Country</label>
          <select
            name="country"
            id="country"
            value={values.country}
            onChange={handleInputChange}
          >
            <option value="RO">Romania</option>
            <option value="DE">Germania</option>
            <option value="US">Statele Unite</option>
          </select>
        </p>
        <button type="submit">Get Weather</button>
      </form>
      {weather && currentTemp} &deg;C
    </>
  );
}

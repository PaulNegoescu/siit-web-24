import { useEffect, useState } from 'react';

export function Weather() {
  const [weather, setWeather] = useState(null);
  const [values, setValues] = useState({
    city: '',
    country: 'RO',
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (geo) => {
        const { latitude, longitude } = geo.coords;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d301fc8dd067329503a3af727de6155a`
        )
          .then((res) => res.json())
          .then((data) => {
            setIsLoading(false);
            setWeather(data);
            setValues((oldState) => ({ ...oldState, city: data.name }));
          });
      },
      () => setIsLoading(false)
    );
  }, []);

  const currentTemp = (weather?.main.temp - 273.15).toFixed(1);
  const maxTemp = (weather?.main.temp_max - 273.15).toFixed(1);
  const minTemp = (weather?.main.temp_min - 273.15).toFixed(1);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${values.city},${values.country}&appid=d301fc8dd067329503a3af727de6155a`
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

  // if (!weather) {
  //   return <strong>Loading ...</strong>;
  // }

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
      {isLoading && <strong>Loading ...</strong>}
      {weather && (
        <>
          <p>
            <img
              src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
              alt={weather?.weather[0].description}
            />
          </p>
          <p>Max: {weather && maxTemp} &deg;C</p>
          <p>Current: {weather && currentTemp} &deg;C</p>
          <p>Min: {weather && minTemp} &deg;C</p>
        </>
      )}
    </>
  );
}

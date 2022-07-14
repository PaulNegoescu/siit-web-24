import { useEffect, useState } from 'react';

export function Weather({ city }) {
  const [weather, setWeather] = useState(null);

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

  return (
    <>
      <h1>Weather</h1>
      {weather && currentTemp} &deg;C
    </>
  );
}

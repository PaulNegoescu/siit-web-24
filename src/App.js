import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './components';
import {
  Counter,
  NotFound,
  Weather,
  MovieList,
  MovieDetails,
  Auth,
} from './features';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };

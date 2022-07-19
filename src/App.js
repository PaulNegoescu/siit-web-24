import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Counter } from './features/Counter';
import { Weather } from './features/Weather';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/counter">Counter</NavLink>
          </li>
          <li>
            <NavLink to="/weather">Weather</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/weather" element={<Weather city="Timisoara" />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };

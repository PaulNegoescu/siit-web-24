import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  // JSX
  return (
    <h1>
      <span>From JSX</span>
    </h1>
  );
}

root.render(<App />);

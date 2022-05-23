import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    setTimeout(() => {
      Promise.reject('Error');
    }, 2000);
  }, []);

  return (
    <div>
      loading...
    </div>
  );
}

export default App;

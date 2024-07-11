import { useState } from 'react';

import Board from './components/Board';

import './styles.scss';

function App() {
  const [counter, setCounter] = useState(1);

  console.log('hello');
  const Btnclick = () => {
    setCounter(currCounter => {
      return currCounter + 1;
    });
  };

  return (
    <div className="app">
      <Board />
    </div>
  );
}

export default App;

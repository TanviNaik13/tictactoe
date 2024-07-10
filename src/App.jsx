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
      <div>
        <button onClick={Btnclick}>click me</button>
        <div>{counter}</div>
      </div>
    </div>
  );
}

export default App;

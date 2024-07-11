import { useState } from 'react';

import Board from './components/Board';
import { calculateWinner } from './components/winners';
import './styles.scss';

function App() {
  const [counter, setCounter] = useState(1);
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winn = calculateWinner(square);
  //console.log(winn);
  const nextPlayer = isXNext ? 'X' : 'O';
  const statusMessg = winn ? `Winner: ${winn}` : `Next Player: ${nextPlayer}`;

  const handleSquareClick = clickedPosition => {
    if (square[clickedPosition] || winn) return;
    setSquare(currSquare => {
      return currSquare.map((val, pos) => {
        if (clickedPosition === pos) return isXNext ? 'X' : 'O';

        return val;
      });
    });
    setIsXNext(currIsXNext => !currIsXNext);
  };

  const Btnclick = () => {
    setCounter(currCounter => {
      return currCounter + 1;
    });
  };

  return (
    <div className="app">
      <h2>{statusMessg}</h2>
      <Board square={square} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;

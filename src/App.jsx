import { useState } from 'react';
import StatusMessage from './components/StatusMessage';
import Board from './components/Board';
import { calculateWinner } from './components/winners';
import './styles.scss';

function App() {
  const [counter, setCounter] = useState(1);
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winn = calculateWinner(square);

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
      <StatusMessage winn={winn} isXNext={isXNext} square={square} />
      <Board square={square} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;

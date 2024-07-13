import { useState } from 'react';
import StatusMessage from './components/StatusMessage';
import Board from './components/Board';
import { calculateWinner } from './components/winners';
import './styles.scss';
import History from './components/History';

const NEWGAME = { square: Array(9).fill(null), isXNext: false };

function App() {
  const [history, setHistory] = useState([NEWGAME]);

  const [currMove, setCurrMove] = useState(0);
  const gameBoard = history[currMove];
  const { winn, winnerSquare } = calculateWinner(gameBoard.square);

  const handleSquareClick = clickedPosition => {
    if (gameBoard.square[clickedPosition] || winn) return;

    setHistory(currHistory => {
      const isTraversing = currMove + 1 != currHistory.length;

      const lastGame = isTraversing
        ? currHistory[currMove]
        : currHistory[currHistory.length - 1];
      const nextSquarState = lastGame.square.map((val, pos) => {
        if (clickedPosition === pos) return lastGame.isXNext ? 'X' : 'O';

        return val;
      });

      const base = isTraversing
        ? currHistory.slice(0, currHistory.indexOf(lastGame) + 1)
        : currHistory;

      return base.concat({
        square: nextSquarState,
        isXNext: !lastGame.isXNext,
      });
    });

    setCurrMove(mov => mov + 1);
  };

  const moveTo = move => {
    setCurrMove(move);
  };

  const reset = () => {
    setHistory([NEWGAME]);
    setCurrMove(0);
  };
  return (
    <div className="app">
      <h1>
        <span className="text-orange">TIC</span>{' '}
        <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage winn={winn} gameBoard={gameBoard} />
      <Board
        square={gameBoard.square}
        handleSquareClick={handleSquareClick}
        winnerSquare={winnerSquare}
      />
      <button
        type="button"
        onClick={reset}
        className={`btn-reset ${winn ? 'active' : ''}`}
      >
        RESET
      </button>
      <h2>GAME HISTORY</h2>
      <History history={history} moveTo={moveTo} currMove={currMove} />
    </div>
  );
}

export default App;

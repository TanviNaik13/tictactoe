import Square from './Square';
const Board = ({ square, handleSquareClick, winnerSquare }) => {
  const renderSquare = position => {
    const isWinnSquare = winnerSquare.includes(position);

    return (
      <Square
        value={square[position]}
        onClick={() => handleSquareClick(position)}
        isWinnSquare={isWinnSquare}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;

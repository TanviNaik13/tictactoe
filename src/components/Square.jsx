const Square = ({ value, onClick, isWinnSquare }) => {
  return (
    <button
      type="button"
      className={`square ${value === 'X' ? 'text-green' : 'text-red'} ${isWinnSquare ? 'winning' : ''}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;

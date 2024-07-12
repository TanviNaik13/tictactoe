const History = ({ history, moveTo, currMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((arr, index) => (
          <li key={index}>
            <button
              type="button"
              className={`btn-move ${index === currMove ? 'active' : ''}`}
              onClick={() => moveTo(index)}
            >
              {index == 0 ? `Return to Start` : `Go to Move: ${index}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;

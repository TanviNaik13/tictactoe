const StatusMessage = ({ winn, gameBoard }) => {
  const { square, isXNext } = gameBoard;
  const noMoves = square.every(sqval => sqval !== null);
  //console.log(winn);
  const nextPlayer = isXNext ? 'X' : 'O';

  const renderMssg = () => {
    if (winn)
      return (
        <h2>
          Winner:{' '}
          <span className={winn === 'X' ? 'text-green' : 'text-red'}>
            {winn}
          </span>{' '}
          !
        </h2>
      );

    if (!winn && !noMoves)
      return (
        <h2>
          Next Player :{' '}
          <span className={isXNext ? 'text-green' : 'text-red'}>
            {nextPlayer}
          </span>
        </h2>
      );

    if (!winn && noMoves) return <h2>Game is Tied!</h2>;

    return null;
  };

  return <div>{renderMssg()}</div>;
};

export default StatusMessage;

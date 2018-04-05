function Gameinfo(props) {
  var winner = props.winner
  var currentPlayer = props.currentPlayer === 1 ? 'red' : 'black'
  var winner = props.winner
  return (
    <div>
      
      {props.winner !== 0 ? (
        <h1 className="winner">{winner} wins!</h1>
      ) : (
        <p className="turn">{currentPlayer}'s turn</p>
      )}
      
    </div>
  );
}
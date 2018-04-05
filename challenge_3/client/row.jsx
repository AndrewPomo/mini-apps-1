function Row(props) {
  var colNumber = -1;
  return (
    <tr className="row">
      {props.spaces.map(space => 
        <Space
        key={++colNumber}
        row={props.id}
        col={colNumber}
        owner={space}
        handleTurnClick={props.handleTurnClick}
        winner={props.winner}
        />
      )}
    </tr>
  );
}
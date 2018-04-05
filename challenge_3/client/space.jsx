function Space(props) {
  return props.winner !== 0 ? (
    <td 
      className="space" 
      data-row={props.row} 
      data-col={props.col} 
      data-owner={props.owner}
      >
    </td>
  ) : (
    <td 
      className="space" 
      data-row={props.row} 
      data-col={props.col} 
      data-owner={props.owner}
      onClick={props.handleTurnClick}>
      {props.id}
    </td>
  )
}
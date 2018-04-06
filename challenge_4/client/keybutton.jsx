function KeyButton(props) {
  if (props.id === '') {
    return (
      <td>
        <button onClick={props.click} id={props.id} className="keyButton x">
          {props.id}
        </button>
      </td>
    )
  } else {
    return (
      <td>
        <button onClick={props.click} id={props.id} className="keyButton">
          {props.id}
        </button>
      </td>
    )
  }
}
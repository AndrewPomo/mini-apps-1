function Keyrow(props) {
  return (
    <tr>
      {props.buttons.map(number =>
        <KeyButton id={number} key={number} click={props.click}/>
      )}
    </tr>
  )
}
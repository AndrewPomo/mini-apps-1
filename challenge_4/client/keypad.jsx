function Keypad(props) {
  return (
    <table>
      <tbody>
        <Keyrow id="row1" click={props.click} buttons={[1,2,3]}/>
        <Keyrow id="row2" click={props.click} buttons={[4,5,6]}/>
        <Keyrow id="row3" click={props.click} buttons={[7,8,9]}/>
        <Keyrow id="row4" click={props.click} buttons={[0,'',10]}/>
      </tbody>
    </table>
  )
}
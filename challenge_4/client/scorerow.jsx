function Scorerow(props) {
  var col = -1
  var key = 900
  return (
    <tr>
      <td rowSpan='2'>
        Andrew
      </td>
      {props.turns.map(frame =>
        <td key={++key} className='frameHolder'>
          <Frame key={++key} data-col={col} data-roll={0} score={frame[0]}/>
          <Frame key={++key} data-col={col} data-roll={1} score={frame[1]}/>
        </td>
      )}
    </tr>
  )
}
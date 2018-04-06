function Scorecard(props) {
  var bsKey = 1000;
  var header = 0
  return (
    <table>
      <tbody>
    {/*headers*/}
        <tr>
          <th colSpan='1'>
            Name
          </th>
          {props.turns.map(number =>
            <th key={++bsKey*20} className='frameHolder'>
              {++header}
            </th>
          )}
        </tr>
        <Scorerow scorecard={props.scorecard} turns={props.turns} frame={props.frame} score={props.score}/>
      </tbody>
      <tbody>
    {/*headers*/}
        <tr>
          <th colSpan='1'>
            Total
          </th>
          {props.scorecard.map(number =>
            <th key={++bsKey} className='frameHolder'>
              {number}
            </th>
          )}
        </tr>
      </tbody>
      <th>GrandTotal: <span>
      {props.scorecard.reduce(function(acc, curr) {
        acc+=curr
        return acc
      })}
      </span>
      </th>
    </table>
  )
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: 0,
      roll: 1,
      scorecard:[0,0,0,0,0,0,0,0,0,0],
      turns: [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
      framePinsLeft:10,
      strikeCount:0,
      spare: false,
      gameDone:false,
      bonus: 0
    }
    this.handleTurnClick = this.handleTurnClick.bind(this);
  }

  handleTurnClick(e) {
    var newScoreCard = this.state.scorecard;
    var newTurns = this.state.turns;
    var rollScore = Number(e.target.id);
    var frame = this.state.frame;
    var pinsLeft = this.state.framePinsLeft;
    var strikeCount = this.state.strikeCount;
    var spare = this.state.spare;
    var bonus = this.state.bonus
    var gameDone = frame === newScoreCard.length && bonus === 0;
    // The bowler is allowed to throw two extra balls for achieving a strike in the tenth frame, or one extra ball for achieving a spare.
    if (frame < 10 || bonus > 0) {
     
      if (this.state.roll === 1) {
        newScoreCard[frame] += rollScore;
        newTurns[frame][0] += rollScore;
        if (spare) {
          newScoreCard[frame - 1] += rollScore
          spare = false;
        }
          if (rollScore === 10) {

            if (frame === 9) {
              newScoreCard.push(0);
              newTurns.push([0,0]);
              bonus = 2;
              gameDone = false;
            }

            
            newTurns[frame][0] = 'X'
            if (strikeCount === 1) {
              newScoreCard[frame - 1] += 10;
              strikeCount++;
            } else if (strikeCount === 2) {
              newScoreCard[frame - 2] += 10;
              newScoreCard[frame - 1] += 10;
              strikeCount = 2;
            } else {
              strikeCount++;
            }
            this.setState({
              scorecard:newScoreCard,
              frame: frame + 1,
              framePinsLeft:10,
              strikeCount: strikeCount,
              spare: spare,
              turns: newTurns,
              bonus: bonus,
              gameDone: gameDone
            })
          } else {
            this.setState({
              scorecard:newScoreCard,
              roll: 2,
              framePinsLeft: pinsLeft - rollScore,
              spare: spare,
              turns: newTurns,
              bonus: bonus,
              gameDone: gameDone
            })
          }
      } else if (rollScore <= pinsLeft) {
        newScoreCard[frame] += rollScore
        newTurns[frame][1] += rollScore
        if (newScoreCard[frame] === 10) {
          newTurns[frame][0] = '/'
          spare = true;
          if (frame === 9) {
            newScoreCard.push(0);
            newTurns.push([0,0]);
            bonus = 1;
            gameDone = false;
          }
        }
        if (strikeCount === 1) {
          newScoreCard[frame - 1] += newScoreCard[frame];
        } else if (strikeCount === 2) {
          newScoreCard[frame - 2] += newScoreCard[frame] - rollScore;
          newScoreCard[frame - 1] += newScoreCard[frame];
        }
        this.setState({
          scorecard:newScoreCard,
          roll: 1,
          frame: frame + 1,
          framePinsLeft:10,
          strikeCount: 0,
          spare: spare,
          turns: newTurns,
          bonus: bonus,
          gameDone: gameDone
        })
      }
    }
    console.log(gameDone)
  }

  render() {
    return (
      <div>
        <Keypad id="keypad" click={this.handleTurnClick} done={this.gameDone}/>
        <Scorecard id="scorecard" scorecard={this.state.scorecard} turns={this.state.turns}/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
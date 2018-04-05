class Board extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      'currentPlayer': 1, // 1 is red, 2 is black
      'board': [
        [0, 0, 0, 0, 0, 0, 0], // 0
        [0, 0, 0, 0, 0, 0, 0], // 1
        [0, 0, 0, 0, 0, 0, 0], // 2
        [0, 0, 0, 0, 0, 0, 0], // 3
        [0, 0, 0, 0, 0, 0, 0], // 4
        [0, 0, 0, 0, 0, 0, 0]  // 5
      // 0  1  2  3  4  5  6
      ],
      'winner': 0
    }
    this.handleTurnClick = this.handleTurnClick.bind(this);
  }

  handleTurnClick(e) {
    var col = Number(e.target.dataset.col)
    var row = Number(e.target.dataset.row)
    var curr = this.state.currentPlayer;
    for (var i = this.state.board.length - 1; i >= 0; i--) {
      if (this.state.board[i][col] === 0) {
        var newBoard = this.state.board
        newBoard[i][col] = this.state.currentPlayer
        var nextPlayer = this.state.currentPlayer === 1 ? 2 : 1
        this.setState({
          board: newBoard,
          currentPlayer: nextPlayer
        })
        this.checkCol(col, curr);
        this.checkRow(row, curr);
        this.checkMaj(col, row, curr);
        this.checkMin(col, row, curr);
        break;
      }
    }

  }

  checkCol(col, curr) {
    var board = this.state.board;
    var count = 0;
    for (var i = board.length - 1; i >= 0; i--) {
      if (board[i][col] === curr) {
        if (count === 0 || board[i + 1][col] === curr) {
          count++
        }
        if (count === 4) {
          this.setState({
            winner: this.state.currentPlayer === 1 ? 'red' : 'black'
          })
        }
      } else {
        count = 0;
      }
    }
    count = 0;
  }

  checkRow(row, curr) {
    var row = this.state.board[row];
    var count = 0;
    for (var i = 0; i < row.length; i++) {
      if (row[i] === curr) {
        if (count === 0 || row[i - 1] === curr) {
          count++
        }
        if (count === 4) {
          this.setState({
            winner: this.state.currentPlayer === 1 ? 'red' : 'black'
          })
        }
      } else {
        count = 0;
      }
    }
  }

  checkMaj(colIn, rowIn, curr) {
    var board = this.state.board;
    var startCol = colIn - rowIn;
    var count = 0;
    var row;
    for (var i = 0; i < board.length; i++) {
      row = board[i]
      if (!row[startCol]) {
        startCol++
      } else {
        if (row[startCol] === curr) {
          if (count === 0 || board[i - 1][startCol - 1] === curr) {
            count++
          }
          if (count === 4) {
            this.setState({
              winner: this.state.currentPlayer === 1 ? 'red' : 'black'
            })
          }
        } else {
          count = 0;
        }
        startCol++;
      }
    }
  }

  checkMin(colIn, rowIn, curr) {
    var board = this.state.board;
    var startCol = colIn + rowIn;
    var count = 0;
    var row;
    for (var i = 0; i < board.length; i++) { // iterate over rows
      row = board[i]
    
      if (startCol > row.length) {
        startCol--
      } else {
        if (row[startCol] === curr) {
          if (count === 0 || board[i - 1][startCol + 1] === curr) {
            count++
          }
          if (count === 4) {
            this.setState({
              winner: this.state.currentPlayer === 1 ? 'red' : 'black'
            })
            // this.declareWinner()
          }
        } else {
          count = 0;
        }
        startCol--;
      }
    }
  }

  render() {
    var rowNumber = -1;
    return (
      <div>
        <table>
          <tbody>
            {this.state.board.map(row => 
              <Row 
                key={++rowNumber} 
                id={rowNumber} 
                spaces={row}
                handleTurnClick={this.handleTurnClick}
                winner={this.state.winner}
              />
            )}
          </tbody>
        </table>
        <Gameinfo
          currentPlayer={this.state.currentPlayer}
          winner={this.state.winner}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <Board />, document.getElementById("app"));
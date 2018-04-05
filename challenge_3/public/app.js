'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Board = function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board(props) {
    _classCallCheck(this, Board);

    var _this = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));

    _this.state = {
      'currentPlayer': 1, // 1 is red, 2 is black
      'board': [[0, 0, 0, 0, 0, 0, 0], // 0
      [0, 0, 0, 0, 0, 0, 0], // 1
      [0, 0, 0, 0, 0, 0, 0], // 2
      [0, 0, 0, 0, 0, 0, 0], // 3
      [0, 0, 0, 0, 0, 0, 0], // 4
      [0, 0, 0, 0, 0, 0, 0] // 5
      // 0  1  2  3  4  5  6
      ],
      'winner': 0
    };
    _this.handleTurnClick = _this.handleTurnClick.bind(_this);
    return _this;
  }

  _createClass(Board, [{
    key: 'handleTurnClick',
    value: function handleTurnClick(e) {
      var col = Number(e.target.dataset.col);
      var row = Number(e.target.dataset.row);
      var curr = this.state.currentPlayer;
      for (var i = this.state.board.length - 1; i >= 0; i--) {
        if (this.state.board[i][col] === 0) {
          var newBoard = this.state.board;
          newBoard[i][col] = this.state.currentPlayer;
          var nextPlayer = this.state.currentPlayer === 1 ? 2 : 1;
          this.setState({
            board: newBoard,
            currentPlayer: nextPlayer
          });
          this.checkCol(col, curr);
          this.checkRow(row, curr);
          this.checkMaj(col, row, curr);
          this.checkMin(col, row, curr);
          break;
        }
      }
    }
  }, {
    key: 'checkCol',
    value: function checkCol(col, curr) {
      var board = this.state.board;
      var count = 0;
      for (var i = board.length - 1; i >= 0; i--) {
        if (board[i][col] === curr) {
          if (count === 0 || board[i + 1][col] === curr) {
            count++;
          }
          if (count === 4) {
            this.setState({
              winner: this.state.currentPlayer === 1 ? 'red' : 'black'
            });
          }
        } else {
          count = 0;
        }
      }
      count = 0;
    }
  }, {
    key: 'checkRow',
    value: function checkRow(row, curr) {
      var row = this.state.board[row];
      var count = 0;
      for (var i = 0; i < row.length; i++) {
        if (row[i] === curr) {
          if (count === 0 || row[i - 1] === curr) {
            count++;
          }
          if (count === 4) {
            this.setState({
              winner: this.state.currentPlayer === 1 ? 'red' : 'black'
            });
          }
        } else {
          count = 0;
        }
      }
    }
  }, {
    key: 'checkMaj',
    value: function checkMaj(colIn, rowIn, curr) {
      var board = this.state.board;
      var startCol = colIn - rowIn;
      var count = 0;
      var row;
      for (var i = 0; i < board.length; i++) {
        row = board[i];
        if (!row[startCol]) {
          startCol++;
        } else {
          if (row[startCol] === curr) {
            if (count === 0 || board[i - 1][startCol - 1] === curr) {
              count++;
            }
            if (count === 4) {
              this.setState({
                winner: this.state.currentPlayer === 1 ? 'red' : 'black'
              });
            }
          } else {
            count = 0;
          }
          startCol++;
        }
      }
    }
  }, {
    key: 'checkMin',
    value: function checkMin(colIn, rowIn, curr) {
      var board = this.state.board;
      var startCol = colIn + rowIn;
      var count = 0;
      var row;
      for (var i = 0; i < board.length; i++) {
        // iterate over rows
        row = board[i];

        if (startCol > row.length) {
          startCol--;
        } else {
          if (row[startCol] === curr) {
            if (count === 0 || board[i - 1][startCol + 1] === curr) {
              count++;
            }
            if (count === 4) {
              this.setState({
                winner: this.state.currentPlayer === 1 ? 'red' : 'black'
              });
              // this.declareWinner()
            }
          } else {
            count = 0;
          }
          startCol--;
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var rowNumber = -1;
      return React.createElement(
        'div',
        null,
        React.createElement(
          'table',
          null,
          React.createElement(
            'tbody',
            null,
            this.state.board.map(function (row) {
              return React.createElement(Row, {
                key: ++rowNumber,
                id: rowNumber,
                spaces: row,
                handleTurnClick: _this2.handleTurnClick,
                winner: _this2.state.winner
              });
            })
          )
        ),
        React.createElement(Gameinfo, {
          currentPlayer: this.state.currentPlayer,
          winner: this.state.winner
        })
      );
    }
  }]);

  return Board;
}(React.Component);

ReactDOM.render(React.createElement(Board, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkJvYXJkIiwicHJvcHMiLCJzdGF0ZSIsImhhbmRsZVR1cm5DbGljayIsImJpbmQiLCJlIiwiY29sIiwiTnVtYmVyIiwidGFyZ2V0IiwiZGF0YXNldCIsInJvdyIsImN1cnIiLCJjdXJyZW50UGxheWVyIiwiaSIsImJvYXJkIiwibGVuZ3RoIiwibmV3Qm9hcmQiLCJuZXh0UGxheWVyIiwic2V0U3RhdGUiLCJjaGVja0NvbCIsImNoZWNrUm93IiwiY2hlY2tNYWoiLCJjaGVja01pbiIsImNvdW50Iiwid2lubmVyIiwiY29sSW4iLCJyb3dJbiIsInN0YXJ0Q29sIiwicm93TnVtYmVyIiwibWFwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSzs7O0FBRUosaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1gsdUJBQWlCLENBRE4sRUFDUztBQUNwQixlQUFTLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixDQURPLEVBQ2dCO0FBQ3ZCLE9BQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FGTyxFQUVnQjtBQUN2QixPQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBSE8sRUFHZ0I7QUFDdkIsT0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUpPLEVBSWdCO0FB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ckI7QUFESDtBQURGLFNBREY7QUFjRSw0QkFBQyxRQUFEO0FBQ0UseUJBQWUsS0FBS3RCLEtBQUwsQ0FBV1UsYUFENUI7QUFFRSxrQkFBUSxLQUFLVixLQUFMLENBQVdzQjtBQUZyQjtBQWRGLE9BREY7QUFxQkQ7Ozs7RUFqS2lCTSxNQUFNQyxTOztBQW9LMUJDLFNBQVNDLE1BQVQsQ0FDRSxvQkFBQyxLQUFELE9BREYsRUFDYUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQURiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAnY3VycmVudFBsYXllcic6IDEsIC8vIDEgaXMgcmVkLCAyIGlzIGJsYWNrXG4gICAgICAnYm9hcmQnOiBbXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwXSwgLy8gMFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sIC8vIDFcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDBdLCAvLyAyXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwXSwgLy8gM1xuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sIC8vIDRcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDBdICAvLyA1XG4gICAgICAvLyAwICAxICAyICAzICA0ICA1ICA2XG4gICAgICBdLFxuICAgICAgJ3dpbm5lcic6IDBcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVUdXJuQ2xpY2sgPSB0aGlzLmhhbmRsZVR1cm5DbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlVHVybkNsaWNrKGUpIHtcbiAgICB2YXIgY29sID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuY29sKVxuICAgIHZhciByb3cgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5yb3cpXG4gICAgdmFyIGN1cnIgPSB0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXI7XG4gICAgZm9yICh2YXIgaSA9IHRoaXMuc3RhdGUuYm9hcmQubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmJvYXJkW2ldW2NvbF0gPT09IDApIHtcbiAgICAgICAgdmFyIG5ld0JvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZFxuICAgICAgICBuZXdCb2FyZFtpXVtjb2xdID0gdGhpcy5zdGF0ZS5jdXJyZW50UGxheWVyXG4gICAgICAgIHZhciBuZXh0UGxheWVyID0gdGhpcy5zdGF0ZS5jdXJyZW50UGxheWVyID09PSAxID8gMiA6IDFcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYm9hcmQ6IG5ld0JvYXJkLFxuICAgICAgICAgIGN1cnJlbnRQbGF5ZXI6IG5leHRQbGF5ZXJcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5jaGVja0NvbChjb2wsIGN1cnIpO1xuICAgICAgICB0aGlzLmNoZWNrUm93KHJvdywgY3Vycik7XG4gICAgICAgIHRoaXMuY2hlY2tNYWooY29sLCByb3csIGN1cnIpO1xuICAgICAgICB0aGlzLmNoZWNrTWluKGNvbCwgcm93LCBjdXJyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBjaGVja0NvbChjb2wsIGN1cnIpIHtcbiAgICB2YXIgYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkO1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IGJvYXJkLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAoYm9hcmRbaV1bY29sXSA9PT0gY3Vycikge1xuICAgICAgICBpZiAoY291bnQgPT09IDAgfHwgYm9hcmRbaSArIDFdW2NvbF0gPT09IGN1cnIpIHtcbiAgICAgICAgICBjb3VudCsrXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvdW50ID09PSA0KSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB3aW5uZXI6IHRoaXMuc3RhdGUuY3VycmVudFBsYXllciA9PT0gMSA/ICdyZWQnIDogJ2JsYWNrJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgY291bnQgPSAwO1xuICB9XG5cbiAgY2hlY2tSb3cocm93LCBjdXJyKSB7XG4gICAgdmFyIHJvdyA9IHRoaXMuc3RhdGUuYm9hcmRbcm93XTtcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocm93W2ldID09PSBjdXJyKSB7XG4gICAgICAgIGlmIChjb3VudCA9PT0gMCB8fCByb3dbaSAtIDFdID09PSBjdXJyKSB7XG4gICAgICAgICAgY291bnQrK1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb3VudCA9PT0gNCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgd2lubmVyOiB0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXIgPT09IDEgPyAncmVkJyA6ICdibGFjaydcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudCA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tNYWooY29sSW4sIHJvd0luLCBjdXJyKSB7XG4gICAgdmFyIGJvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZDtcbiAgICB2YXIgc3RhcnRDb2wgPSBjb2xJbiAtIHJvd0luO1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgdmFyIHJvdztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICByb3cgPSBib2FyZFtpXVxuICAgICAgaWYgKCFyb3dbc3RhcnRDb2xdKSB7XG4gICAgICAgIHN0YXJ0Q29sKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyb3dbc3RhcnRDb2xdID09PSBjdXJyKSB7XG4gICAgICAgICAgaWYgKGNvdW50ID09PSAwIHx8IGJvYXJkW2kgLSAxXVtzdGFydENvbCAtIDFdID09PSBjdXJyKSB7XG4gICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb3VudCA9PT0gNCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdpbm5lcjogdGhpcy5zdGF0ZS5jdXJyZW50UGxheWVyID09PSAxID8gJ3JlZCcgOiAnYmxhY2snXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgc3RhcnRDb2wrKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja01pbihjb2xJbiwgcm93SW4sIGN1cnIpIHtcbiAgICB2YXIgYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkO1xuICAgIHZhciBzdGFydENvbCA9IGNvbEluICsgcm93SW47XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICB2YXIgcm93O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHsgLy8gaXRlcmF0ZSBvdmVyIHJvd3NcbiAgICAgIHJvdyA9IGJvYXJkW2ldXG4gICAgXG4gICAgICBpZiAoc3RhcnRDb2wgPiByb3cubGVuZ3RoKSB7XG4gICAgICAgIHN0YXJ0Q29sLS1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyb3dbc3RhcnRDb2xdID09PSBjdXJyKSB7XG4gICAgICAgICAgaWYgKGNvdW50ID09PSAwIHx8IGJvYXJkW2kgLSAxXVtzdGFydENvbCArIDFdID09PSBjdXJyKSB7XG4gICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb3VudCA9PT0gNCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdpbm5lcjogdGhpcy5zdGF0ZS5jdXJyZW50UGxheWVyID09PSAxID8gJ3JlZCcgOiAnYmxhY2snXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gdGhpcy5kZWNsYXJlV2lubmVyKClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHN0YXJ0Q29sLS07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciByb3dOdW1iZXIgPSAtMTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJvYXJkLm1hcChyb3cgPT4gXG4gICAgICAgICAgICAgIDxSb3cgXG4gICAgICAgICAgICAgICAga2V5PXsrK3Jvd051bWJlcn0gXG4gICAgICAgICAgICAgICAgaWQ9e3Jvd051bWJlcn0gXG4gICAgICAgICAgICAgICAgc3BhY2VzPXtyb3d9XG4gICAgICAgICAgICAgICAgaGFuZGxlVHVybkNsaWNrPXt0aGlzLmhhbmRsZVR1cm5DbGlja31cbiAgICAgICAgICAgICAgICB3aW5uZXI9e3RoaXMuc3RhdGUud2lubmVyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8R2FtZWluZm9cbiAgICAgICAgICBjdXJyZW50UGxheWVyPXt0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXJ9XG4gICAgICAgICAgd2lubmVyPXt0aGlzLnN0YXRlLndpbm5lcn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxCb2FyZCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOyJdfQ==
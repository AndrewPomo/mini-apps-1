'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      frame: 0,
      roll: 1,
      scorecard: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      turns: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
      framePinsLeft: 10,
      strikeCount: 0,
      spare: false,
      gameDone: false,
      bonus: 0
    };
    _this.handleTurnClick = _this.handleTurnClick.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleTurnClick',
    value: function handleTurnClick(e) {
      var newScoreCard = this.state.scorecard;
      var newTurns = this.state.turns;
      var rollScore = Number(e.target.id);
      var frame = this.state.frame;
      var pinsLeft = this.state.framePinsLeft;
      var strikeCount = this.state.strikeCount;
      var spare = this.state.spare;
      var bonus = this.state.bonus;
      var gameDone = frame === newScoreCard.length && bonus === 0;
      // The bowler is allowed to throw two extra balls for achieving a strike in the tenth frame, or one extra ball for achieving a spare.
      if (frame < 10 || bonus > 0) {

        if (this.state.roll === 1) {
          newScoreCard[frame] += rollScore;
          newTurns[frame][0] += rollScore;
          if (spare) {
            newScoreCard[frame - 1] += rollScore;
            spare = false;
          }
          if (rollScore === 10) {

            if (frame === 9) {
              newScoreCard.push(0);
              newTurns.push([0, 0]);
              bonus = 2;
              gameDone = false;
            }

            newTurns[frame][0] = 'X';
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
              scorecard: newScoreCard,
              frame: frame + 1,
              framePinsLeft: 10,
              strikeCount: strikeCount,
              spare: spare,
              turns: newTurns,
              bonus: bonus,
              gameDone: gameDone
            });
          } else {
            this.setState({
              scorecard: newScoreCard,
              roll: 2,
              framePinsLeft: pinsLeft - rollScore,
              spare: spare,
              turns: newTurns,
              bonus: bonus,
              gameDone: gameDone
            });
          }
        } else if (rollScore <= pinsLeft) {
          newScoreCard[frame] += rollScore;
          newTurns[frame][1] += rollScore;
          if (newScoreCard[frame] === 10) {
            newTurns[frame][0] = '/';
            spare = true;
            if (frame === 9) {
              newScoreCard.push(0);
              newTurns.push([0, 0]);
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
            scorecard: newScoreCard,
            roll: 1,
            frame: frame + 1,
            framePinsLeft: 10,
            strikeCount: 0,
            spare: spare,
            turns: newTurns,
            bonus: bonus,
            gameDone: gameDone
          });
        }
      }
      console.log(gameDone);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Keypad, { id: 'keypad', click: this.handleTurnClick, done: this.gameDone }),
        React.createElement(Scorecard, { id: 'scorecard', scorecard: this.state.scorecard, turns: this.state.turns })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJmcmFtZSIsInJvbGwiLCJzY29yZWNhcmQiLCJ0dXJucyIsImZyYW1lUGluc0xlZnQiLCJzdHJpa2VDb3VudCIsInNwYXJlIiwiZ2FtZURvbmUiLCJib251cyIsImhhbmRsZVR1cm5DbGljayIsImJpbmQiLCJlIiwibmV3U2NvcmVDYXJkIiwibmV3VHVybnMiLCJyb2xsU2NvcmUiLCJOdW1iZXIiLCJ0YXJnZXQiLCJpZCIsInBpbnNMZWZ0IiwibGVuZ3RoIiwicHVzaCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sQ0FESTtBQUVYQyxZQUFNLENBRks7QUFHWEMsaUJBQVUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixDQUhDO0FBSVhDLGFBQU8sQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsRUFBTyxDQUFDLENBQUQsRUFBRyxDQUFILENBQVAsRUFBYSxDQUFDLENBQUQsRUFBRyxDQUFILENBQWIsRUFBbUIsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFuQixFQUF5QixDQUFDLENBQUQsRUFBRyxDQUFILENBQXpCLEVBQStCLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBL0IsRUFBcUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFyQyxFQUEyQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQTNDLEVBQWlE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QUFMLENBQVdJLEtBQTdFO0FBRkYsT0FERjtBQU1EOzs7O0VBekhlcUIsTUFBTUMsUzs7QUEySHhCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZyYW1lOiAwLFxuICAgICAgcm9sbDogMSxcbiAgICAgIHNjb3JlY2FyZDpbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICB0dXJuczogW1swLDBdLFswLDBdLFswLDBdLFswLDBdLFswLDBdLFswLDBdLFswLDBdLFswLDBdLFswLDBdLFswLDBdXSxcbiAgICAgIGZyYW1lUGluc0xlZnQ6MTAsXG4gICAgICBzdHJpa2VDb3VudDowLFxuICAgICAgc3BhcmU6IGZhbHNlLFxuICAgICAgZ2FtZURvbmU6ZmFsc2UsXG4gICAgICBib251czogMFxuICAgIH1cbiAgICB0aGlzLmhhbmRsZVR1cm5DbGljayA9IHRoaXMuaGFuZGxlVHVybkNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVUdXJuQ2xpY2soZSkge1xuICAgIHZhciBuZXdTY29yZUNhcmQgPSB0aGlzLnN0YXRlLnNjb3JlY2FyZDtcbiAgICB2YXIgbmV3VHVybnMgPSB0aGlzLnN0YXRlLnR1cm5zO1xuICAgIHZhciByb2xsU2NvcmUgPSBOdW1iZXIoZS50YXJnZXQuaWQpO1xuICAgIHZhciBmcmFtZSA9IHRoaXMuc3RhdGUuZnJhbWU7XG4gICAgdmFyIHBpbnNMZWZ0ID0gdGhpcy5zdGF0ZS5mcmFtZVBpbnNMZWZ0O1xuICAgIHZhciBzdHJpa2VDb3VudCA9IHRoaXMuc3RhdGUuc3RyaWtlQ291bnQ7XG4gICAgdmFyIHNwYXJlID0gdGhpcy5zdGF0ZS5zcGFyZTtcbiAgICB2YXIgYm9udXMgPSB0aGlzLnN0YXRlLmJvbnVzXG4gICAgdmFyIGdhbWVEb25lID0gZnJhbWUgPT09IG5ld1Njb3JlQ2FyZC5sZW5ndGggJiYgYm9udXMgPT09IDA7XG4gICAgLy8gVGhlIGJvd2xlciBpcyBhbGxvd2VkIHRvIHRocm93IHR3byBleHRyYSBiYWxscyBmb3IgYWNoaWV2aW5nIGEgc3RyaWtlIGluIHRoZSB0ZW50aCBmcmFtZSwgb3Igb25lIGV4dHJhIGJhbGwgZm9yIGFjaGlldmluZyBhIHNwYXJlLlxuICAgIGlmIChmcmFtZSA8IDEwIHx8IGJvbnVzID4gMCkge1xuICAgICBcbiAgICAgIGlmICh0aGlzLnN0YXRlLnJvbGwgPT09IDEpIHtcbiAgICAgICAgbmV3U2NvcmVDYXJkW2ZyYW1lXSArPSByb2xsU2NvcmU7XG4gICAgICAgIG5ld1R1cm5zW2ZyYW1lXVswXSArPSByb2xsU2NvcmU7XG4gICAgICAgIGlmIChzcGFyZSkge1xuICAgICAgICAgIG5ld1Njb3JlQ2FyZFtmcmFtZSAtIDFdICs9IHJvbGxTY29yZVxuICAgICAgICAgIHNwYXJlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgICBpZiAocm9sbFNjb3JlID09PSAxMCkge1xuXG4gICAgICAgICAgICBpZiAoZnJhbWUgPT09IDkpIHtcbiAgICAgICAgICAgICAgbmV3U2NvcmVDYXJkLnB1c2goMCk7XG4gICAgICAgICAgICAgIG5ld1R1cm5zLnB1c2goWzAsMF0pO1xuICAgICAgICAgICAgICBib251cyA9IDI7XG4gICAgICAgICAgICAgIGdhbWVEb25lID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbmV3VHVybnNbZnJhbWVdWzBdID0gJ1gnXG4gICAgICAgICAgICBpZiAoc3RyaWtlQ291bnQgPT09IDEpIHtcbiAgICAgICAgICAgICAgbmV3U2NvcmVDYXJkW2ZyYW1lIC0gMV0gKz0gMTA7XG4gICAgICAgICAgICAgIHN0cmlrZUNvdW50Kys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0cmlrZUNvdW50ID09PSAyKSB7XG4gICAgICAgICAgICAgIG5ld1Njb3JlQ2FyZFtmcmFtZSAtIDJdICs9IDEwO1xuICAgICAgICAgICAgICBuZXdTY29yZUNhcmRbZnJhbWUgLSAxXSArPSAxMDtcbiAgICAgICAgICAgICAgc3RyaWtlQ291bnQgPSAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3RyaWtlQ291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBzY29yZWNhcmQ6bmV3U2NvcmVDYXJkLFxuICAgICAgICAgICAgICBmcmFtZTogZnJhbWUgKyAxLFxuICAgICAgICAgICAgICBmcmFtZVBpbnNMZWZ0OjEwLFxuICAgICAgICAgICAgICBzdHJpa2VDb3VudDogc3RyaWtlQ291bnQsXG4gICAgICAgICAgICAgIHNwYXJlOiBzcGFyZSxcbiAgICAgICAgICAgICAgdHVybnM6IG5ld1R1cm5zLFxuICAgICAgICAgICAgICBib251czogYm9udXMsXG4gICAgICAgICAgICAgIGdhbWVEb25lOiBnYW1lRG9uZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHNjb3JlY2FyZDpuZXdTY29yZUNhcmQsXG4gICAgICAgICAgICAgIHJvbGw6IDIsXG4gICAgICAgICAgICAgIGZyYW1lUGluc0xlZnQ6IHBpbnNMZWZ0IC0gcm9sbFNjb3JlLFxuICAgICAgICAgICAgICBzcGFyZTogc3BhcmUsXG4gICAgICAgICAgICAgIHR1cm5zOiBuZXdUdXJucyxcbiAgICAgICAgICAgICAgYm9udXM6IGJvbnVzLFxuICAgICAgICAgICAgICBnYW1lRG9uZTogZ2FtZURvbmVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyb2xsU2NvcmUgPD0gcGluc0xlZnQpIHtcbiAgICAgICAgbmV3U2NvcmVDYXJkW2ZyYW1lXSArPSByb2xsU2NvcmVcbiAgICAgICAgbmV3VHVybnNbZnJhbWVdWzFdICs9IHJvbGxTY29yZVxuICAgICAgICBpZiAobmV3U2NvcmVDYXJkW2ZyYW1lXSA9PT0gMTApIHtcbiAgICAgICAgICBuZXdUdXJuc1tmcmFtZV1bMF0gPSAnLydcbiAgICAgICAgICBzcGFyZSA9IHRydWU7XG4gICAgICAgICAgaWYgKGZyYW1lID09PSA5KSB7XG4gICAgICAgICAgICBuZXdTY29yZUNhcmQucHVzaCgwKTtcbiAgICAgICAgICAgIG5ld1R1cm5zLnB1c2goWzAsMF0pO1xuICAgICAgICAgICAgYm9udXMgPSAxO1xuICAgICAgICAgICAgZ2FtZURvbmUgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0cmlrZUNvdW50ID09PSAxKSB7XG4gICAgICAgICAgbmV3U2NvcmVDYXJkW2ZyYW1lIC0gMV0gKz0gbmV3U2NvcmVDYXJkW2ZyYW1lXTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJpa2VDb3VudCA9PT0gMikge1xuICAgICAgICAgIG5ld1Njb3JlQ2FyZFtmcmFtZSAtIDJdICs9IG5ld1Njb3JlQ2FyZFtmcmFtZV0gLSByb2xsU2NvcmU7XG4gICAgICAgICAgbmV3U2NvcmVDYXJkW2ZyYW1lIC0gMV0gKz0gbmV3U2NvcmVDYXJkW2ZyYW1lXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzY29yZWNhcmQ6bmV3U2NvcmVDYXJkLFxuICAgICAgICAgIHJvbGw6IDEsXG4gICAgICAgICAgZnJhbWU6IGZyYW1lICsgMSxcbiAgICAgICAgICBmcmFtZVBpbnNMZWZ0OjEwLFxuICAgICAgICAgIHN0cmlrZUNvdW50OiAwLFxuICAgICAgICAgIHNwYXJlOiBzcGFyZSxcbiAgICAgICAgICB0dXJuczogbmV3VHVybnMsXG4gICAgICAgICAgYm9udXM6IGJvbnVzLFxuICAgICAgICAgIGdhbWVEb25lOiBnYW1lRG9uZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhnYW1lRG9uZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEtleXBhZCBpZD1cImtleXBhZFwiIGNsaWNrPXt0aGlzLmhhbmRsZVR1cm5DbGlja30gZG9uZT17dGhpcy5nYW1lRG9uZX0vPlxuICAgICAgICA8U2NvcmVjYXJkIGlkPVwic2NvcmVjYXJkXCIgc2NvcmVjYXJkPXt0aGlzLnN0YXRlLnNjb3JlY2FyZH0gdHVybnM9e3RoaXMuc3RhdGUudHVybnN9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il19
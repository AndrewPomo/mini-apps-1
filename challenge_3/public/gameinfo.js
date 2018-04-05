'use strict';

function Gameinfo(props) {
  var winner = props.winner;
  var currentPlayer = props.currentPlayer === 1 ? 'red' : 'black';
  var winner = props.winner;
  return React.createElement(
    'div',
    null,
    props.winner !== 0 ? React.createElement(
      'h1',
      { className: 'winner' },
      winner,
      ' wins!'
    ) : React.createElement(
      'p',
      { className: 'turn' },
      currentPlayer,
      '\'s turn'
    )
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9nYW1laW5mby5qc3giXSwibmFtZXMiOlsiR2FtZWluZm8iLCJwcm9wcyIsIndpbm5lciIsImN1cnJlbnRQbGF5ZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkIsTUFBSUMsU0FBU0QsTUFBTUMsTUFBbkI7QUFDQSxNQUFJQyxnQkFBZ0JGLE1BQU1FLGFBQU4sS0FBd0IsQ0FBeEIsR0FBNEIsS0FBNUIsR0FBb0MsT0FBeEQ7QUFDQSxNQUFJRCxTQUFTRCxNQUFNQyxNQUFuQjtBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBRUdELFVBQU1DLE1BQU4sS0FBaUIsQ0FBakIsR0FDQztBQUFBO0FBQUEsUUFBSSxXQUFVLFFBQWQ7QUFBd0JBLFlBQXhCO0FBQUE7QUFBQSxLQURELEdBR0M7QUFBQTtBQUFBLFFBQUcsV0FBVSxNQUFiO0FBQXFCQyxtQkFBckI7QUFBQTtBQUFBO0FBTEosR0FERjtBQVdEIiwiZmlsZSI6ImdhbWVpbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gR2FtZWluZm8ocHJvcHMpIHtcbiAgdmFyIHdpbm5lciA9IHByb3BzLndpbm5lclxuICB2YXIgY3VycmVudFBsYXllciA9IHByb3BzLmN1cnJlbnRQbGF5ZXIgPT09IDEgPyAncmVkJyA6ICdibGFjaydcbiAgdmFyIHdpbm5lciA9IHByb3BzLndpbm5lclxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBcbiAgICAgIHtwcm9wcy53aW5uZXIgIT09IDAgPyAoXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3aW5uZXJcIj57d2lubmVyfSB3aW5zITwvaDE+XG4gICAgICApIDogKFxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0dXJuXCI+e2N1cnJlbnRQbGF5ZXJ9J3MgdHVybjwvcD5cbiAgICAgICl9XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn0iXX0=
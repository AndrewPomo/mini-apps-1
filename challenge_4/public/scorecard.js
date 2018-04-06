'use strict';

function Scorecard(props) {
  var bsKey = 1000;
  var header = 0;
  return React.createElement(
    'table',
    null,
    React.createElement(
      'tbody',
      null,
      React.createElement(
        'tr',
        null,
        React.createElement(
          'th',
          { colSpan: '1' },
          'Name'
        ),
        props.turns.map(function (number) {
          return React.createElement(
            'th',
            { key: ++bsKey * 20, className: 'frameHolder' },
            ++header
          );
        })
      ),
      React.createElement(Scorerow, { scorecard: props.scorecard, turns: props.turns, frame: props.frame, score: props.score })
    ),
    React.createElement(
      'tbody',
      null,
      React.createElement(
        'tr',
        null,
        React.createElement(
          'th',
          { colSpan: '1' },
          'Total'
        ),
        props.scorecard.map(function (number) {
          return React.createElement(
            'th',
            { key: ++bsKey, className: 'frameHolder' },
            number
          );
        })
      )
    ),
    React.createElement(
      'th',
      null,
      'GrandTotal: ',
      React.createElement(
        'span',
        null,
        props.scorecard.reduce(function (acc, curr) {
          acc += curr;
          return acc;
        })
      )
    )
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9zY29yZWNhcmQuanN4Il0sIm5hbWVzIjpbIlNjb3JlY2FyZCIsInByb3BzIiwiYnNLZXkiLCJoZWFkZXIiLCJ0dXJucyIsIm1hcCIsInNjb3JlY2FyZCIsImZyYW1lIiwic2NvcmUiLCJudW1iZXIiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3hCLE1BQUlDLFFBQVEsSUFBWjtBQUNBLE1BQUlDLFNBQVMsQ0FBYjtBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUksU0FBUSxHQUFaO0FBQUE7QUFBQSxTQURGO0FBSUdGLGNBQU1HLEtBQU4sQ0FBWUMsR0FBWixDQUFnQjtBQUFBLGlCQUNmO0FBQUE7QUFBQSxjQUFJLEtBQUssRUFBRUgsS0FBRixHQUFRLEVBQWpCLEVBQXFCLFdBQVUsYUFBL0I7QUFDRyxjQUFFQztBQURMLFdBRGU7QUFBQSxTQUFoQjtBQUpILE9BRkY7QUFZRSwwQkFBQyxRQUFELElBQVUsV0FBV0YsTUFBTUssU0FBM0IsRUFBc0MsT0FBT0wsTUFBTUcsS0FBbkQsRUFBMEQsT0FBT0gsTUFBTU0sS0FBdkUsRUFBOEUsT0FBT04sTUFBTU8sS0FBM0Y7QUFaRixLQURGO0FBZUU7QUFBQTtBQUFBO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUksU0FBUSxHQUFaO0FBQUE7QUFBQSxTQURGO0FBSUdQLGNBQU1LLFNBQU4sQ0FBZ0JELEdBQWhCLENBQW9CO0FBQUEsaUJBQ25CO0FBQUE7QUFBQSxjQUFJLEtBQUssRUFBRUgsS0FBWCxFQUFrQixXQUFVLGFBQTVCO0FBQ0dPO0FBREgsV0FEbUI7QUFBQSxTQUFwQjtBQUpIO0FBRkYsS0FmRjtBQTRCRTtBQUFBO0FBQUE7QUFBQTtBQUFnQjtBQUFBO0FBQUE7QUFDZlIsY0FBTUssU0FBTixDQUFnQkksTUFBaEIsQ0FBdUIsVUFBU0MsR0FBVCxFQUFjQyxJQUFkLEVBQW9CO0FBQzFDRCxpQkFBS0MsSUFBTDtBQUNBLGlCQUFPRCxHQUFQO0FBQ0QsU0FIQTtBQURlO0FBQWhCO0FBNUJGLEdBREY7QUFzQ0QiLCJmaWxlIjoic2NvcmVjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU2NvcmVjYXJkKHByb3BzKSB7XG4gIHZhciBic0tleSA9IDEwMDA7XG4gIHZhciBoZWFkZXIgPSAwXG4gIHJldHVybiAoXG4gICAgPHRhYmxlPlxuICAgICAgPHRib2R5PlxuICAgIHsvKmhlYWRlcnMqL31cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aCBjb2xTcGFuPScxJz5cbiAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIHtwcm9wcy50dXJucy5tYXAobnVtYmVyID0+XG4gICAgICAgICAgICA8dGgga2V5PXsrK2JzS2V5KjIwfSBjbGFzc05hbWU9J2ZyYW1lSG9sZGVyJz5cbiAgICAgICAgICAgICAgeysraGVhZGVyfVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICApfVxuICAgICAgICA8L3RyPlxuICAgICAgICA8U2NvcmVyb3cgc2NvcmVjYXJkPXtwcm9wcy5zY29yZWNhcmR9IHR1cm5zPXtwcm9wcy50dXJuc30gZnJhbWU9e3Byb3BzLmZyYW1lfSBzY29yZT17cHJvcHMuc2NvcmV9Lz5cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8dGJvZHk+XG4gICAgey8qaGVhZGVycyovfVxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIGNvbFNwYW49JzEnPlxuICAgICAgICAgICAgVG90YWxcbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIHtwcm9wcy5zY29yZWNhcmQubWFwKG51bWJlciA9PlxuICAgICAgICAgICAgPHRoIGtleT17Kytic0tleX0gY2xhc3NOYW1lPSdmcmFtZUhvbGRlcic+XG4gICAgICAgICAgICAgIHtudW1iZXJ9XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgICAgPHRoPkdyYW5kVG90YWw6IDxzcGFuPlxuICAgICAge3Byb3BzLnNjb3JlY2FyZC5yZWR1Y2UoZnVuY3Rpb24oYWNjLCBjdXJyKSB7XG4gICAgICAgIGFjYys9Y3VyclxuICAgICAgICByZXR1cm4gYWNjXG4gICAgICB9KX1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDwvdGg+XG4gICAgPC90YWJsZT5cbiAgKVxufSJdfQ==
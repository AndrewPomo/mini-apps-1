"use strict";

function Row(props) {
  var colNumber = -1;
  return React.createElement(
    "tr",
    { className: "row" },
    props.spaces.map(function (space) {
      return React.createElement(Space, {
        key: ++colNumber,
        row: props.id,
        col: colNumber,
        owner: space,
        handleTurnClick: props.handleTurnClick,
        winner: props.winner
      });
    })
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9yb3cuanN4Il0sIm5hbWVzIjpbIlJvdyIsInByb3BzIiwiY29sTnVtYmVyIiwic3BhY2VzIiwibWFwIiwiaWQiLCJzcGFjZSIsImhhbmRsZVR1cm5DbGljayIsIndpbm5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxHQUFULENBQWFDLEtBQWIsRUFBb0I7QUFDbEIsTUFBSUMsWUFBWSxDQUFDLENBQWpCO0FBQ0EsU0FDRTtBQUFBO0FBQUEsTUFBSSxXQUFVLEtBQWQ7QUFDR0QsVUFBTUUsTUFBTixDQUFhQyxHQUFiLENBQWlCO0FBQUEsYUFDaEIsb0JBQUMsS0FBRDtBQUNBLGFBQUssRUFBRUYsU0FEUDtBQUVBLGFBQUtELE1BQU1JLEVBRlg7QUFHQSxhQUFLSCxTQUhMO0FBSUEsZUFBT0ksS0FKUDtBQUtBLHlCQUFpQkwsTUFBTU0sZUFMdkI7QUFNQSxnQkFBUU4sTUFBTU87QUFOZCxRQURnQjtBQUFBLEtBQWpCO0FBREgsR0FERjtBQWNEIiwiZmlsZSI6InJvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFJvdyhwcm9wcykge1xuICB2YXIgY29sTnVtYmVyID0gLTE7XG4gIHJldHVybiAoXG4gICAgPHRyIGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAge3Byb3BzLnNwYWNlcy5tYXAoc3BhY2UgPT4gXG4gICAgICAgIDxTcGFjZVxuICAgICAgICBrZXk9eysrY29sTnVtYmVyfVxuICAgICAgICByb3c9e3Byb3BzLmlkfVxuICAgICAgICBjb2w9e2NvbE51bWJlcn1cbiAgICAgICAgb3duZXI9e3NwYWNlfVxuICAgICAgICBoYW5kbGVUdXJuQ2xpY2s9e3Byb3BzLmhhbmRsZVR1cm5DbGlja31cbiAgICAgICAgd2lubmVyPXtwcm9wcy53aW5uZXJ9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvdHI+XG4gICk7XG59Il19
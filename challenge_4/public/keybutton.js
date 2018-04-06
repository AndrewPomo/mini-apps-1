"use strict";

function KeyButton(props) {
  if (props.id === '') {
    return React.createElement(
      "td",
      null,
      React.createElement(
        "button",
        { onClick: props.click, id: props.id, className: "keyButton x" },
        props.id
      )
    );
  } else {
    return React.createElement(
      "td",
      null,
      React.createElement(
        "button",
        { onClick: props.click, id: props.id, className: "keyButton" },
        props.id
      )
    );
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9rZXlidXR0b24uanN4Il0sIm5hbWVzIjpbIktleUJ1dHRvbiIsInByb3BzIiwiaWQiLCJjbGljayJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUN4QixNQUFJQSxNQUFNQyxFQUFOLEtBQWEsRUFBakIsRUFBcUI7QUFDbkIsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBUSxTQUFTRCxNQUFNRSxLQUF2QixFQUE4QixJQUFJRixNQUFNQyxFQUF4QyxFQUE0QyxXQUFVLGFBQXREO0FBQ0dELGNBQU1DO0FBRFQ7QUFERixLQURGO0FBT0QsR0FSRCxNQVFPO0FBQ0wsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBUSxTQUFTRCxNQUFNRSxLQUF2QixFQUE4QixJQUFJRixNQUFNQyxFQUF4QyxFQUE0QyxXQUFVLFdBQXREO0FBQ0dELGNBQU1DO0FBRFQ7QUFERixLQURGO0FBT0Q7QUFDRiIsImZpbGUiOiJrZXlidXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBLZXlCdXR0b24ocHJvcHMpIHtcbiAgaWYgKHByb3BzLmlkID09PSAnJykge1xuICAgIHJldHVybiAoXG4gICAgICA8dGQ+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuY2xpY2t9IGlkPXtwcm9wcy5pZH0gY2xhc3NOYW1lPVwia2V5QnV0dG9uIHhcIj5cbiAgICAgICAgICB7cHJvcHMuaWR9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC90ZD5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5jbGlja30gaWQ9e3Byb3BzLmlkfSBjbGFzc05hbWU9XCJrZXlCdXR0b25cIj5cbiAgICAgICAgICB7cHJvcHMuaWR9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC90ZD5cbiAgICApXG4gIH1cbn0iXX0=
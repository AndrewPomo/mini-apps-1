"use strict";

function Keypad(props) {
  return React.createElement(
    "table",
    null,
    React.createElement(
      "tbody",
      null,
      React.createElement(Keyrow, { id: "row1", click: props.click, buttons: [1, 2, 3] }),
      React.createElement(Keyrow, { id: "row2", click: props.click, buttons: [4, 5, 6] }),
      React.createElement(Keyrow, { id: "row3", click: props.click, buttons: [7, 8, 9] }),
      React.createElement(Keyrow, { id: "row4", click: props.click, buttons: [0, '', 10] })
    )
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9rZXlwYWQuanN4Il0sIm5hbWVzIjpbIktleXBhZCIsInByb3BzIiwiY2xpY2siXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDckIsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSwwQkFBQyxNQUFELElBQVEsSUFBRyxNQUFYLEVBQWtCLE9BQU9BLE1BQU1DLEtBQS9CLEVBQXNDLFNBQVMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBL0MsR0FERjtBQUVFLDBCQUFDLE1BQUQsSUFBUSxJQUFHLE1BQVgsRUFBa0IsT0FBT0QsTUFBTUMsS0FBL0IsRUFBc0MsU0FBUyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUEvQyxHQUZGO0FBR0UsMEJBQUMsTUFBRCxJQUFRLElBQUcsTUFBWCxFQUFrQixPQUFPRCxNQUFNQyxLQUEvQixFQUFzQyxTQUFTLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQS9DLEdBSEY7QUFJRSwwQkFBQyxNQUFELElBQVEsSUFBRyxNQUFYLEVBQWtCLE9BQU9ELE1BQU1DLEtBQS9CLEVBQXNDLFNBQVMsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sQ0FBL0M7QUFKRjtBQURGLEdBREY7QUFVRCIsImZpbGUiOiJrZXlwYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBLZXlwYWQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8dGFibGU+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIDxLZXlyb3cgaWQ9XCJyb3cxXCIgY2xpY2s9e3Byb3BzLmNsaWNrfSBidXR0b25zPXtbMSwyLDNdfS8+XG4gICAgICAgIDxLZXlyb3cgaWQ9XCJyb3cyXCIgY2xpY2s9e3Byb3BzLmNsaWNrfSBidXR0b25zPXtbNCw1LDZdfS8+XG4gICAgICAgIDxLZXlyb3cgaWQ9XCJyb3czXCIgY2xpY2s9e3Byb3BzLmNsaWNrfSBidXR0b25zPXtbNyw4LDldfS8+XG4gICAgICAgIDxLZXlyb3cgaWQ9XCJyb3c0XCIgY2xpY2s9e3Byb3BzLmNsaWNrfSBidXR0b25zPXtbMCwnJywxMF19Lz5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgKVxufSJdfQ==
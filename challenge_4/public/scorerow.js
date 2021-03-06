'use strict';

function Scorerow(props) {
  var col = -1;
  var key = 900;
  return React.createElement(
    'tr',
    null,
    React.createElement(
      'td',
      { rowSpan: '2' },
      'Andrew'
    ),
    props.turns.map(function (frame) {
      return React.createElement(
        'td',
        { key: ++key, className: 'frameHolder' },
        React.createElement(Frame, { key: ++key, 'data-col': col, 'data-roll': 0, score: frame[0] }),
        React.createElement(Frame, { key: ++key, 'data-col': col, 'data-roll': 1, score: frame[1] })
      );
    })
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9zY29yZXJvdy5qc3giXSwibmFtZXMiOlsiU2NvcmVyb3ciLCJwcm9wcyIsImNvbCIsImtleSIsInR1cm5zIiwibWFwIiwiZnJhbWUiXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkIsTUFBSUMsTUFBTSxDQUFDLENBQVg7QUFDQSxNQUFJQyxNQUFNLEdBQVY7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFJLFNBQVEsR0FBWjtBQUFBO0FBQUEsS0FERjtBQUlHRixVQUFNRyxLQUFOLENBQVlDLEdBQVosQ0FBZ0I7QUFBQSxhQUNmO0FBQUE7QUFBQSxVQUFJLEtBQUssRUFBRUYsR0FBWCxFQUFnQixXQUFVLGFBQTFCO0FBQ0UsNEJBQUMsS0FBRCxJQUFPLEtBQUssRUFBRUEsR0FBZCxFQUFtQixZQUFVRCxHQUE3QixFQUFrQyxhQUFXLENBQTdDLEVBQWdELE9BQU9JLE1BQU0sQ0FBTixDQUF2RCxHQURGO0FBRUUsNEJBQUMsS0FBRCxJQUFPLEtBQUssRUFBRUgsR0FBZCxFQUFtQixZQUFVRCxHQUE3QixFQUFrQyxhQUFXLENBQTdDLEVBQWdELE9BQU9JLE1BQU0sQ0FBTixDQUF2RDtBQUZGLE9BRGU7QUFBQSxLQUFoQjtBQUpILEdBREY7QUFhRCIsImZpbGUiOiJzY29yZXJvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFNjb3Jlcm93KHByb3BzKSB7XG4gIHZhciBjb2wgPSAtMVxuICB2YXIga2V5ID0gOTAwXG4gIHJldHVybiAoXG4gICAgPHRyPlxuICAgICAgPHRkIHJvd1NwYW49JzInPlxuICAgICAgICBBbmRyZXdcbiAgICAgIDwvdGQ+XG4gICAgICB7cHJvcHMudHVybnMubWFwKGZyYW1lID0+XG4gICAgICAgIDx0ZCBrZXk9eysra2V5fSBjbGFzc05hbWU9J2ZyYW1lSG9sZGVyJz5cbiAgICAgICAgICA8RnJhbWUga2V5PXsrK2tleX0gZGF0YS1jb2w9e2NvbH0gZGF0YS1yb2xsPXswfSBzY29yZT17ZnJhbWVbMF19Lz5cbiAgICAgICAgICA8RnJhbWUga2V5PXsrK2tleX0gZGF0YS1jb2w9e2NvbH0gZGF0YS1yb2xsPXsxfSBzY29yZT17ZnJhbWVbMV19Lz5cbiAgICAgICAgPC90ZD5cbiAgICAgICl9XG4gICAgPC90cj5cbiAgKVxufSJdfQ==
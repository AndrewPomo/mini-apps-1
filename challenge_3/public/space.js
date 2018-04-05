"use strict";

function Space(props) {
  return props.winner !== 0 ? React.createElement("td", {
    className: "space",
    "data-row": props.row,
    "data-col": props.col,
    "data-owner": props.owner
  }) : React.createElement(
    "td",
    {
      className: "space",
      "data-row": props.row,
      "data-col": props.col,
      "data-owner": props.owner,
      onClick: props.handleTurnClick },
    props.id
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9zcGFjZS5qc3giXSwibmFtZXMiOlsiU3BhY2UiLCJwcm9wcyIsIndpbm5lciIsInJvdyIsImNvbCIsIm93bmVyIiwiaGFuZGxlVHVybkNsaWNrIiwiaWQiXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3BCLFNBQU9BLE1BQU1DLE1BQU4sS0FBaUIsQ0FBakIsR0FDTDtBQUNFLGVBQVUsT0FEWjtBQUVFLGdCQUFVRCxNQUFNRSxHQUZsQjtBQUdFLGdCQUFVRixNQUFNRyxHQUhsQjtBQUlFLGtCQUFZSCxNQUFNSTtBQUpwQixJQURLLEdBU0w7QUFBQTtBQUFBO0FBQ0UsaUJBQVUsT0FEWjtBQUVFLGtCQUFVSixNQUFNRSxHQUZsQjtBQUdFLGtCQUFVRixNQUFNRyxHQUhsQjtBQUlFLG9CQUFZSCxNQUFNSSxLQUpwQjtBQUtFLGVBQVNKLE1BQU1LLGVBTGpCO0FBTUdMLFVBQU1NO0FBTlQsR0FURjtBQWtCRCIsImZpbGUiOiJzcGFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFNwYWNlKHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy53aW5uZXIgIT09IDAgPyAoXG4gICAgPHRkIFxuICAgICAgY2xhc3NOYW1lPVwic3BhY2VcIiBcbiAgICAgIGRhdGEtcm93PXtwcm9wcy5yb3d9IFxuICAgICAgZGF0YS1jb2w9e3Byb3BzLmNvbH0gXG4gICAgICBkYXRhLW93bmVyPXtwcm9wcy5vd25lcn1cbiAgICAgID5cbiAgICA8L3RkPlxuICApIDogKFxuICAgIDx0ZCBcbiAgICAgIGNsYXNzTmFtZT1cInNwYWNlXCIgXG4gICAgICBkYXRhLXJvdz17cHJvcHMucm93fSBcbiAgICAgIGRhdGEtY29sPXtwcm9wcy5jb2x9IFxuICAgICAgZGF0YS1vd25lcj17cHJvcHMub3duZXJ9XG4gICAgICBvbkNsaWNrPXtwcm9wcy5oYW5kbGVUdXJuQ2xpY2t9PlxuICAgICAge3Byb3BzLmlkfVxuICAgIDwvdGQ+XG4gIClcbn0iXX0=
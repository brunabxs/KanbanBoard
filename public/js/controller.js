function getSections() {
  var board = JSON.parse(localStorage.getItem('KanbanBoard'));

  if (board === null) return [];
  return board.sections;
}

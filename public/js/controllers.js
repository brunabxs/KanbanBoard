var kanbanApp = angular.module('kanbanApp', []);

kanbanApp.controller('SectionsCtrl', ['$scope', function ($scope) {
  $scope.sections = function() {
    var board = JSON.parse(localStorage.getItem('KanbanBoard'));

    if (board === null)
      return [];
    return board.sections;
  }();
}]);

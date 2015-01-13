describe('SectionsCtrlSpec', function() {
  beforeEach(module('kanbanApp'));

  afterEach(function() {
    localStorage.removeItem('KanbanBoard');
  });

  it('no localStorage should create an "sections" model with no sections', inject(function($controller) {
    // Arrange
    localStorage.removeItem('KanbanBoard');
    // Act
    var scope = {};
    var ctrl = $controller('SectionsCtrl', {$scope:scope});
    // Assert
    expect(scope.sections.length).toBe(0);
  }));

  it('no sections in localStorage should create an "sections" model with no sections', inject(function($controller) {
    // Arrange
    localStorage.setItem('KanbanBoard', JSON.stringify({sections:[]}));
    // Act
    var scope = {};
    var ctrl = $controller('SectionsCtrl', {$scope:scope});
    // Assert
    expect(scope.sections.length).toBe(0);
  }));

  it('3 sections in localStorage should create "sections" model with 3 sections', inject(function($controller) {
    // Arrange
    localStorage.setItem('KanbanBoard', JSON.stringify({sections:[{}, {}, {}]}));
    // Act
    var scope = {};
    var ctrl = $controller('SectionsCtrl', {$scope:scope});
    // Assert
    expect(scope.sections.length).toBe(3);
  }));
});

describe("LocalStorage not defined", function() {
  beforeEach(function() {
    localStorage.removeItem('KanbanBoard');
  });

  it("getSections must return empty list", function() {
    // Act
    var sections = getSections();
    // Assert
    expect(sections).toBeDefined();
    expect(sections).not.toBeNull();
    expect(sections).toEqual([]);
  });
});

describe("LocalStorage with no section", function() {
  beforeEach(function() {
    localStorage.setItem('KanbanBoard', JSON.stringify({sections:[]}));
  });

  afterEach(function() {
    localStorage.removeItem('KanbanBoard');
  });

  it("getSections must return empty list", function() {
    // Act
    var sections = getSections();
    // Assert
    expect(sections).toBeDefined();
    expect(sections).not.toBeNull();
    expect(sections).toEqual([]);
  });
});

describe("LocalStorage with two sections", function() {
  beforeEach(function() {
    localStorage.setItem('KanbanBoard', JSON.stringify({sections:[{name:'Section1'}, {name:'Section2'}]}));
  });

  afterEach(function() {
    localStorage.removeItem('KanbanBoard');
  });

  it("getSections must return list with two sections", function() {
    // Act
    var sections = getSections();
    // Assert
    expect(sections).toBeDefined();
    expect(sections).not.toBeNull();
    expect(sections).toEqual([{name:'Section1'}, {name:'Section2'}]);
  });
});


// testing under Jasmine
// see the doc to learn how to write tests
// http://jasmine.github.io/

var mylib = require('../../src/script/index');

describe("ala", function() {
  it("should be a function", function() {
    expect(mylib.ala).toEqual(jasmine.any(Function));
  });
  it("should return 'ala'", function() {
    expect(mylib.ala()).toBe('ala');
  });
});

describe("boya", function() {
  it("should be an object", function() {
    expect(mylib.boya).toEqual(jasmine.any(Object));
  });
  describe('.yaharo', function() {
    it("should be a function", function() {
      expect(mylib.boya.yaharo).toEqual(jasmine.any(Function));
    });
    it("should return 'boya'", function() {
      expect(mylib.boya.yaharo()).toBe('boya');
    });
  });
});

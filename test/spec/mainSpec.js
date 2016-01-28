
// testing under Jasmine
// see the doc to learn how to write tests
// http://jasmine.github.io/

import mylib from '../../lib/index';

describe('ala', () => {
  it('should be a function', () => {
    expect(mylib.ala).toEqual(jasmine.any(Function));
  });
  it("should return 'ala'", () => {
    expect(mylib.ala()).toBe('ala');
  });
});

describe('boya', () => {
  it('should be an object', () => {
    expect(mylib.boya).toEqual(jasmine.any(Object));
  });
  describe('.yaharo', () => {
    it('should be a function', () => {
      expect(mylib.boya.yaharo).toEqual(jasmine.any(Function));
    });
    it("should return 'boya'", () => {
      expect(mylib.boya.yaharo()).toBe('boya');
    });
  });
});

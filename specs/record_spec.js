var assert = require('assert');
var Record = require('../record');
var record1 = new Record("Rebecca Black", "Friday", 1.49, 10)

describe('Record', function () {
  beforeEach(function () {

  });
  it('should have an artist', function() {
    assert.equal("Rebecca Black", record1.artist);
  });
  it('should have a title', function() {
    assert.equal("Friday", record1.title);
  });
  it('should have a price', function() {
    assert.equal(1.49, record1.price);
  });
})
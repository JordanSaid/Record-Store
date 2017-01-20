var assert = require('assert');
var RecordStore = require('../record_store');
var Record = require('../record')
var store = new RecordStore("GOAT", "Edinburgh");
var record1 = new Record("Rebecca Black", "Friday", 1.49);
var record2 = new Record("Nickelback", "Rockstar", 1.49);
var record3 = new Record("Nickelback", "Silver", 1);

describe('Record Store', function () {
  beforeEach(function () {
    store.records = [];
    store.balance = 0;
  });
  it('should have a name', function() {
    assert.equal("GOAT", store.name);
  });
  it('should have a city', function() {
    assert.equal("Edinburgh", store.city);
  });
  it('should start with 0 records', function() {
    assert.equal(0, store.recordCount());
  });
  it('should add a record', function() {
    store.addRecord(record1)
    assert.equal(1, store.recordCount());
  });
  it('should sell a record', function() {
    store.addRecord(record1)
    store.addRecord(record2)
    store.sellRecord(record1)
    assert.deepEqual(store.records[0], record2);
    assert.equal(1, store.recordCount())
    assert.equal(1.49, store.balance);
  });
  it('should list records', function() {
    store.addRecord(record1)
    assert.deepEqual(store.records, store.listInventory())
  });
  it('should find total value of assets', function() {
    store.addRecord(record3)
    store.addRecord(record3)
    store.balance = 10
    assert.equal(12, store.assets())
  });
})
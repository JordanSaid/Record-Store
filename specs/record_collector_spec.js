var assert = require('assert');
var Collector = require('../record_collector');
var collector1 = new Collector()
var RecordStore = require('../record_store');
var Record = require('../record')
var store = new RecordStore("GOAT", "Edinburgh");
var record1 = new Record("Rebecca Black", "Friday", 1.49);
var record2 = new Record("Nickelback", "Rockstar", 1.49);
var record3 = new Record("Nickelback", "Silver", 1);

describe('Collector', function () {
  beforeEach(function () {
    collector1.records = []
    store.addRecord(record1)
    store.addRecord(record2)
    store.addRecord(record3)
  });
  it('should have no records at start', function() {
    assert.equal(0, collector1.recordCount());
  });
  it('should be able to buy a record', function() {
    collector1.buyRecord(store, record1)
    console.log(store.records[0])
    assert.equal(1, collector1.recordCount())
    assert.equal(1.49, store.balance)
  });
  it('should sell record, updating balance', function() {
    collector1.buyRecord
    collector1.sellRecord(record2)
    assert.equal(1.49, store.balance)
  });
})
var RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.records = [];
  this.balance = 0;
}

RecordStore.prototype = {
  recordCount: function() {
    return this.records.length;
  },
  addRecord: function(record, stock) {
    var recordInventory = {};
    recordInventory[record] = stock;
    this.records.push(recordInventory)
  },
  removeRecordFromStock: function(record) {
    var counter = 0
    for (r in this.records) {
      if (JSON.stringify(r) === JSON.stringify(record)) {
        this.records.pop(counter);
      }
      counter++;
    } 
  },
}

module.exports = RecordStore;
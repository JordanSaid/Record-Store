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
  addRecord: function(record) {
    this.records.push(record)
  },
  findRecordIndex: function(record) {
    var index = 0;
    var itemIndex = null;
    this.records.filter(function(r) {
      if (r === record) {
         itemIndex = index;
        }
        index++;
    }.bind(this))
    return itemIndex;
  },
  sellRecord: function(record) {
    var index = this.findRecordIndex(record)
      this.records.splice(index, 1);
      this.balance += record.price;
  },
  listInventory: function() {
    return this.records
  },
  assets: function() {
    return this.records.reduce(function(acc, record) {
      return acc + record.price;
    }, 0) + this.balance;
  }
}

module.exports = RecordStore;
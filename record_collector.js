var Collector = function() {
  this.records = [];
  this.balance = 0;
}

Collector.prototype = {
  recordCount: function() {
    return this.records.length;
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
  buyRecord: function(store, record) {
    store.sellRecord(record);
    this.records.unshift(record);
  },
  sellRecord: function(record) {
      var index = this.findRecordIndex(record);
      this.records.splice(index, 1);
      this.balance +=record.price;
    }
}

module.exports = Collector;
function create_updated_collection(collection_a, object_b) {
  var r = [];

  for (var i in collection_a) {
    var index = r.findIndex(function(item){return item.key == collection_a[i];});
    if (index == -1) r.push({'key':collection_a[i], 'count':1});
    else r[index].count += 1;
  }

  return r.map(element => {
    if (object_b['value'].indexOf(element.key) != -1) return {'key':element.key, 'count':element.count-(Math.floor(element.count/3))};
    else return {'key':element.key, 'count':element.count};
  });
}

module.exports = create_updated_collection;

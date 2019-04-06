function create_updated_collection(collection_a, object_b) {
  var r = [];

  for (var i in collection_a) {
    var key = collection_a[i].slice(0,1);
    if (collection_a[i].length > 1) var count = +collection_a[i].slice(2);
    else var count = 1;

    var index = r.findIndex(function(item){return item.key == key;});
    if (index == -1) r.push({'key':key, 'count':count});
    else r[index].count += count;
  }

  return r.map(element => {
    if (object_b['value'].indexOf(element.key) != -1) return {'key':element.key, 'count':element.count-(Math.floor(element.count/3))};
    else return {'key':element.key, 'count':element.count};
  });
}

module.exports = create_updated_collection;

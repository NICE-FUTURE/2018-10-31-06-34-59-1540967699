function count_same_elements(collection) {
  var r = [];

  for (var i in collection) {
    var key = collection[i].slice(0,1);
    if (collection[i].length > 1) var count = +collection[i].slice(2);
    else var count = 1;

    var index = r.findIndex(function(item){return item.key == key;});
    if (index == -1) r.push({'key':key, 'count':count});
    else r[index].count += count;
  }

  return r;
}

module.exports = count_same_elements;

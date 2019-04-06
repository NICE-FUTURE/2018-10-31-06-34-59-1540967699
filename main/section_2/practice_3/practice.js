function count_same_elements(collection) {
  var r = [];

  for (var i in collection) {
    var key = collection[i].slice(0,1);
    if (collection[i].length > 1) var count = +collection[i].replace(/[^0-9]/ig,"");  //去除非数字
    else var count = 1;

    var index = r.findIndex(function(item){return item.name == key;});
    if (index == -1) r.push({'name':key, 'summary':count});
    else r[index].summary += count;
  }

  return r;
}

module.exports = count_same_elements;

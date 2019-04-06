function collect_same_elements(collection_a, object_b) {
  var r = [];

  collection_a.forEach(function(item){ 
    if (object_b['value'].indexOf(item['key']) != -1)
    r.push(item['key']);
  });
  
  return r;
}

module.exports = collect_same_elements;

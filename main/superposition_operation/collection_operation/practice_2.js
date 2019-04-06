'use strict';

function hybrid_operation_to_uneven(collection) {
  var r = [];
  collection.forEach(function(item){
    if (item%2 != 0) r.push(item*3+2);
  });

  return r;
}

module.exports = hybrid_operation_to_uneven;


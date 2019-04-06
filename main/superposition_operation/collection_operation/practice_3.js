'use strict';

function hybrid_operation_to_uneven(collection) {
  var r = [];
  collection.forEach(function(item){
    if (item%2 != 0) r.push(item*3+5);
  });
  return r.reduce(function(acc, cur){return acc+cur;});
}

module.exports = hybrid_operation_to_uneven;


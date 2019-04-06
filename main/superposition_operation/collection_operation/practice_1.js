'use strict';

function hybrid_operation(collection) {
  return collection.reduce(function(acc,cur){return acc+cur*3+2;}) + collection[0]*2+2;  //注意第一个数，acc从索引0开始遍历，cur从索引1开始遍历
}

module.exports = hybrid_operation;


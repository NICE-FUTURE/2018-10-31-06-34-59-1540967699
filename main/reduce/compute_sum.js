'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce(function(acc,cur,idx,src){return acc+cur;});
}

module.exports = calculate_elements_sum;


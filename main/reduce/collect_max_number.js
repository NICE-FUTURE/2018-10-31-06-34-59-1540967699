'use strict';

function collect_max_number(collection) {
  return collection.reduce(function(a,b){return Math.max(a,b);})
}

module.exports = collect_max_number;

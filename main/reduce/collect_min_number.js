'use strict';

function collect_min_number(collection) {
  return collection.reduce(function(a,b){return Math.min(a,b);})
}

module.exports = collect_min_number;


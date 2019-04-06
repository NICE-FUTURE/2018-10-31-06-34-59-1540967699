'use strict';

function get_union(collection_a, collection_b) {
  return collection_a.concat(collection_b.filter(item => collection_a.indexOf(item) == -1)); 
}

module.exports = get_union;


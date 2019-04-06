'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b.filter(item => collection_a.indexOf(item) != -1);
}

module.exports = get_intersection;

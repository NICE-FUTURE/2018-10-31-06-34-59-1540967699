'use strict';

function compare_collections(collection_a, collection_b) {
  return collection_a.reduce(function(acc,cur,idx,src){return acc&&(cur == collection_b[idx]);});
}

module.exports = compare_collections;



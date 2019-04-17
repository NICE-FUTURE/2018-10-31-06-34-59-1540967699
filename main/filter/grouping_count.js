'use strict';

function grouping_count(collection) {
  var r = {};
  collection.forEach(item => {
    if (r[''+item] == undefined) {
      r[''+item] = 1;
    } else {
      r[''+item] += 1;
    }
  });
  return r;
}

module.exports = grouping_count;

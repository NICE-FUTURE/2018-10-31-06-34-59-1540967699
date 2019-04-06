'use strict';

function grouping_count(collection) {
  var r = {};
  for (let item of collection) {
    if (r[''+item] == undefined) {
      r[''+item] = 1;
    } else {
      r[''+item] += 1;
    }
  }
  return r;
}

module.exports = grouping_count;

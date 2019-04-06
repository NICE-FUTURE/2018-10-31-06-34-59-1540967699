'use strict';

function choose_no_repeat_number(collection) {
  var r = [];
  for (let item of collection) {
    if (r.indexOf(item) == -1) r.push(item);
  }
  return r;
}

module.exports = choose_no_repeat_number;

'use strict';

function choose_no_repeat_number(collection) {
  var r = [];
  collection.forEach(item => {
    if (r.indexOf(item) == -1) r.push(item);
  });
  return r;
}

module.exports = choose_no_repeat_number;

'use strict';
var calculate_average = function(collection){
    var s = 0, cnt = 0;
    for (let i=1; i<collection.length; i+=2) {
        s += collection[i];
        cnt += 1;
    }
    return s/cnt;
};
module.exports = calculate_average;

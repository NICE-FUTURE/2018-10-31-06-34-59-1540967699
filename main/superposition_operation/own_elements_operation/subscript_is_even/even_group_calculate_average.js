'use strict';
var even_group_calculate_average = function(collection){
    var r = [{sum:0, count:0}, {sum:0, count:0}, {sum:0, count:0}];
    for (let i=1; i<collection.length; i+=2) {
        let item = collection[i];
        if (item%2 == 0) {
            r[(''+item).length-1].sum += item;
            r[(''+item).length-1].count += 1;
        }
    }

    var re = [];
    r.forEach(function(item){
        if (item.count != 0) re.push(item.sum/item.count);
    })

    if (re.length == 0) return [0];
    else return re;
};

// var collection_a = [1, 2, 3, 4, 5, 6, 12, 454, 324, 21, 45, 644, 34, 56, 345, 570, 8, 4, 14];
// console.log(even_group_calculate_average(collection_a));

module.exports = even_group_calculate_average;

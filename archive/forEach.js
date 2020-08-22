var arr = [1, 2, 3, 4, 5];
var entries = [];

arr.forEach(function(v,i) {
    entries.push([v, i, this[i]]);
    }, [10, 20, 30, 40, 50] );
console.log(entries)
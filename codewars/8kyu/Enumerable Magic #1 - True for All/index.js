const all = ( arr, fun )=> arr.every(fun);
all([1,2,3,4,5], function(v){return v<9})//, true)
all([1,2,3,4,5], function(v){return v>9})//, false)
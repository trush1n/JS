function filter_list(l) {
    let res = [];
    for(let i=0; i < l.length; i++) {
      if(typeof(l[i]) != "string") {
         res.push(l[i]);
      }
    }
    return res;
  }

  filter_list([1,2,'a','b'])//,[1,2], 'For input [1,2,"a","b"]');
  filter_list([1,'a','b',0,15])//,[1,0,15], 'For input [1,"a","b",0,15]');
  filter_list([1,2,'aasf','1','123',123])//,[1,2,123], 'For input [1,2,"aasf",
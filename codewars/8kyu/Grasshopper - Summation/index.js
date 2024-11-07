var summation = function (num) {
    let i=0;
    let sum=0;
     while(num>=i){
       sum+=i;
       i++;
     }
      return sum;
    }

    summation(1)//,  1);
    summation(2)//,  3);
    summation(8)//, 36);
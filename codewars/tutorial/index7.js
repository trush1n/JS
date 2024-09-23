function saleHotdogs(n){
console.log(n < 5 ? n * 100 : n >= 5 & n < 10 ? n * 95 : n * 90);
  }
  saleHotdogs(  1)//,  100);
  saleHotdogs(  4)//,  400);
  saleHotdogs(  5)//,  475);
  saleHotdogs(  9)//,  855);
 saleHotdogs( 10)//,  900);
 saleHotdogs(100)//, 9000);
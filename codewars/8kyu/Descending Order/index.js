function descendingOrder(n) {
  let res = String(n).split("");
  res.sort(function (a, b) { return (b - a) });
  console.log(+res.join(""));
}


descendingOrder(0)//, 0)
descendingOrder(1)//, 1)
descendingOrder(111)//, 111)
descendingOrder(15)//, 51)
descendingOrder(1201)//, 2110)
descendingOrder(123456789)//, 987654321)
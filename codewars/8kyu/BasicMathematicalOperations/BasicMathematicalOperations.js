function basicOp(operation, value1, value2){
    let result;
  if (operation=="+") {
    result = value1 + value2
  } else if (operation=="-") {
      result = value1 - value2
  } else if (operation=="*") {
      result = value1 * value2
  } else {
      result = value1 / value2
  }
  
  return result
  }


    basicOp("+", 4, 7)//, 11, "4 + 7 = 11");
    basicOp("-", 15, 18)//, -3, "15 - 18 = -3");
    basicOp("*", 5, 5)//, 25, "5 * 5 = 25");
    basicOp("/", 49, 7)//, 7, "49 / 7 = 7");
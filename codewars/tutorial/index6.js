function trueOrFalse(val){
    if (val == false || val == undefined) return "false";             
    else return "true";
  }

  trueOrFalse(a>b)//,"false");
  trueOrFalse(a===b)//,"false");
  trueOrFalse(a<b)//,"true");
  trueOrFalse(a!==b)//,"true");
  trueOrFalse(b>c)//,"true");
  trueOrFalse(b===c)//,"false");
 trueOrFalse(b<c)//,"false");
 trueOrFalse(b!==c)//,"true");
  trueOrFalse(a===c)//,"true");
  trueOrFalse(a!==c)//,"false");

  trueOrFalse(true)//,"true");
  trueOrFalse(123)//,"true");
  trueOrFalse("123")//,"true");
  trueOrFalse(["123"])//,"true");
  trueOrFalse("false")//,"true");
  trueOrFalse(false)//,"false");
  trueOrFalse(0)//,"false");
  trueOrFalse("")//,"false");
  trueOrFalse(null)//,"false");
  trueOrFalse([].length)//,"false");
  trueOrFalse(undefined)//,"false");
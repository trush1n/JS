function whatNumberIsIt(n){
   if (Number(n)==1.7976931348623157e+308) {
    console.log("Input number is Number.MAX_VALUE");
   } else if (Number(n)===5e-324){
    console.log("Input number is Number.MIN_VALUE");
   } else if(Number(n)<0 ) {
    console.log("Input number is Number.NEGATIVE_INFINITY");
   } else if(Number(n)!==Number(n)) {
    console.log("Input number is Number.NaN");
   } else if (Number(n)>1.7976931348623157e+308) {
    console.log("Input number is Number.POSITIVE_INFINITY"); 
  } else {
    console.log("Input number is "+ n);
  }
}

whatNumberIsIt(1/0)//,"Input number is Number.POSITIVE_INFINITY");
whatNumberIsIt(100)//,"Input number is 100");
whatNumberIsIt(1.7976931348623157e+308)//,"Input number is Number.MAX_VALUE");
whatNumberIsIt(5e-324)//,"Input number is Number.MIN_VALUE");
whatNumberIsIt(-Number.MAX_VALUE*2)//,"Input number is Number.NEGATIVE_INFINITY");
whatNumberIsIt(NaN)//,"Input number is Number.NaN");
whatNumberIsIt(Infinity+1)//,"Input number is Number.POSITIVE_INFINITY");

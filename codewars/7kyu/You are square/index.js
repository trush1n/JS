const isSquare =n=>{
    let sqrtN = Math.sqrt(n)
    return sqrtN.toFixed(2) * sqrtN.toFixed(2)==n; // fix me
  }



isSquare(-1)//, false, "-1: Negative numbers cannot be square numbers");
isSquare( 90)//, true, "0 is a square number (0 * 0)");
isSquare( 3)//, false, "3 is not a square number");
isSquare( 4)//, true, "4 is a square number (2 * 2)");
isSquare(25)//, true, "25 is a square number (5 * 5)");
isSquare(26)//, false, "26 is not a square number");
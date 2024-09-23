function colorOf(r,g,b){
    let colorR = r.toString(16)
    let colorG = g.toString(16)
    let colorB = b.toString(16)

    if (colorR.length === 1) {
        colorR = "0" + colorR
    } 
    if (colorG.length === 1){
        colorG = "0" + colorG
    } 
    if (colorB.length === 1) {
        colorB = "0" + colorB
    } 

    console.log("#"+colorR+colorG+colorB)
  }
  //colorOf(255,0,0)//, "#ff0000");

  //colorOf(0,111,0)//, "#006f00");
 
  //colorOf(1, 2 ,3), "#010203");
  colorOf(13,219,66)//'\'#ddb42\''
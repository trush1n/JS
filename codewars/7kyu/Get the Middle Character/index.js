function getMiddle(s) {
    let t = s.split("")
    if (s.length % 2==0){
    return t.splice(s.length/2-1, 2).join(""); //even
    } else {
    return t.splice(Math.floor(s.length/2), 1).join(); //not even
    }
  }

  getMiddle("test")//, "es");
  getMiddle("testing")//, "t");
  getMiddle("middle")//, "dd");
  getMiddle("A")//, "A");
function sc(floor) {
    let finish = "";
    if (floor <= 1) {
        console.log("")
    } else if (floor == 2) {
        console.log("Aa~ Pa! Aa!")
    } else if (floor <= 6) {
        let i = floor;
        while (i > 1) {
            finish = finish + "Aa~ "
            i--;
        }
        console.log(finish + "Pa! Aa!")
    } else {
        let i = floor;
        while (i > 1) {
            finish = finish + "Aa~ "
            i--;
        }
        console.log(finish + "Pa!")
    }
}
  sc(2)//, "Aa~ Pa! Aa!", "good luck!");  
sc(6)//, "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!", "good luck!"); 
  sc(7)//, "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!"); 
  sc(10)//, "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!"); 
  sc(1)//, "", "good luck!"); 
  sc(-1)//, "", "good luck!"); 
function padIt(str,n){
  let count = n;
  let letters = str;
  do {
  if (count%2 == 0){
    letters = letters + "*"
    count -=1;
  } else {
    letters = "*" + letters
    count -=1;
  }
}
   while (0!==count);

  console.log(letters)

  }

  



  

  //padIt("a",1)//,"*a");
  //padIt("a",2)//,"*a*");
padIt("a",3)//,"**a*");
//padIt("a",4)//,"**a**");
  //padIt("a",5)//,"***a**");



// function br(number1) {
//     if (number1%2==0) {
//         console.log("чет")
//     } else if (number1%2 == 0) {
//         console.log("нечет")
//     } else {
//         console.log("не цифра   ")
//     }
// }

// br(4)
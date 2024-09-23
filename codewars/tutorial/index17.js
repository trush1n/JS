function firstToLast(str,c){
    //coding here..
    let count = 0;
    let start = str.indexOf(c);
    for (let i = 0; i < str.length; i++) {
        if (str[i]==c){
         count +=1;
        } }
        if (count == 0 ){
            console.log(-1)
        } else if (count == 1){
            console.log(0)
        } else {
            let start = str.indexOf(c);
                    console.log(str.lastIndexOf(c)-start)
        }


    }




        

    

    // console.log(str.indexOf(c))
     //console.log(strIndexletter)
    //console.log(str.search(c))
  
  

  //firstToLast("ababc","a")// , 2);
  //firstToLast("ababc","c")// , 0);
  //firstToLast("ababc","d")// , -1);
  firstToLast("fangzsidhjsxqagvipuneolpiijnmiaegxruwbffjfavnsmq","b")// , 0);




  
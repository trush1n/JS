function giveMeFive(obj){
    //coding here
    let letters5 = [];
    for (let key in obj){
        if (key.length == 5 ){
            letters5.push(key) 
            if (obj[key].length==5){
                letters5.push(obj[key])
            }
        } else if (obj[key].length==5) {
            letters5.push(obj[key]) 
        } else{}

    
    }
    console.log(letters5)
}





    // for (let key in obj){

    //     if (key.length==5){
    //         letters5.push(key)
    //     } else if (obj[key].length== 5) {
    //         letters5.push(obj[key]);


    //     } else if ((key.length==5)&&(obj[key].length== 5)){
    //         letters5.push(key);
    //         letters5.push(obj[key]);
    //     } else {
    //         continue
    //     }
    // } 

  

    //giveMeFive({Our:"earth",is:"a",beautyful:"world"})//,["earth","world"]);
    //giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"})//,["Ihave","money","model"]);
    //giveMeFive({Pears:"than",apple:"sweet"})//,["Pears","apple","sweet"]);
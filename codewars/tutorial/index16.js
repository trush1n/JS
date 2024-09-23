function cutIt(arr){
    //coding here...
    let newArr = [];
    let minCountLetters = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if(minCountLetters > arr[i].length) {
            minCountLetters= arr[i].length
        } else {}
    }
        for (let j = 0; j<arr.length; j++) {
        newArr.push(arr[j].slice(0,minCountLetters))
    }
    console.log(newArr)

  }


//cutIt(["ab","cde","fgh"])// , ["ab","cd","fg"]);
//cutIt(["abc","defgh","ijklmn"])// , ["abc","def","ijk"]);
cutIt(["codewars","javascript","java"])// , ["code","java","java"]);
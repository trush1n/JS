
function howManySmaller(arr,n){
    //coding here..
    count =[];
  

for (let i = 0; i< arr.length; i++){
    if (arr[i].toFixed(2)<n) {
        count.push(arr[i])
    }

  }console.log(count.length);
}
//howManySmaller([1.234,1.235,1.228],1.24)//, 2);
//howManySmaller([1.1888,1.1868,1.1838],1.19)//, 1);
howManySmaller([3.1288,3.1212,3.1205],3.1212)//, 2);
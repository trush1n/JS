function findSmallestInt(arr) {
    let negativeNumberArr =arr[0];
    for (let i=0; i<arr.length; i++) {
        if (negativeNumberArr>arr[i]){
            negativeNumberArr=arr[i]
        }

    }
    console.log(negativeNumberArr)
  }




findSmallestInt([78,56,232,12,8])//,8, `findSmallestInt([78,56,232,12,8])`);
//findSmallestInt([78,56,232,12,18])//,12, `findSmallestInt([78,56,232,12,18])`);
//findSmallestInt([78,56,232,412,228])//,56, `findSmallestInt([78,56,232,412,228])`);
//findSmallestInt([78,56,232,12,0])//,0, `findSmallestInt([78,56,232,12,0])`);
//findSmallestInt([1,56,232,12,8])//,1, `findSmallestInt([1,56,232,12,8])`);
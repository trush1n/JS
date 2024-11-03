const squareSum = (numbers) => {
    let res = 0;
    for (let i = 0; i < numbers.length; i++) {
        res += numbers[i] ** 2;
    }
    return res
}


squareSum([1,2])//, 5);
squareSum([0, 3, 4, 5])//, 50);
squareSum([])//, 0);
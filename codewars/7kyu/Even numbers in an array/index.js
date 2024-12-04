function evenNumbers(array, number) {
    let even = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            even.push(array[i])
        } else {
        }

    }
    return even.splice(-1 * number, );
}

evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)//, [4, 6, 8]);
evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)//, [-8, 26]);
evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)//, [6]);
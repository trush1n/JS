function checkEqual(a, b) {
    return a==b ? "Equal" :"Not Equal";
    }
    
checkEqual(1, 2)//должен вернуть строкуNot Equal
checkEqual(1, 1)//должен вернуть строкуEqual
checkEqual(1, -1)//должен вернуть строкуNot Equal
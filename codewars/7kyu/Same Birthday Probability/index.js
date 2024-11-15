
const calculateProbability = n => {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= (366 - i) / 365
    }
    return (1 - res).toFixed(2)
}







calculateProbability(5)//==0.03);
calculateProbability(1000)//==1);
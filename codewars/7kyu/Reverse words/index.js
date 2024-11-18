function reverseWords(str) {
    let res = "";
    str = str.split(" ").reverse().join(" ")
    for (let i = 0; i < str.length; i++) {
        res = str[i] + res
    }
    return res
}

reverseWords('The quick brown fox jumps over the lazy dog.')//, 'ehT kciuq nworb xof spmuj revo eht yzal .god');
reverseWords('apple')//, 'elppa');
reverseWords('a b c d')//, 'a b c d');
reverseWords('double  spaced  words')//, 'elbuod  decaps  sdrow');
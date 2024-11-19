function convertToInteger(str) {
    let  res = parseInt(str, 2);
    return res
    }

convertToInteger("10011")//должен вернуть число
convertToInteger("10011")//должен вернуться 19
convertToInteger("111001")//должен вернуться 57
convertToInteger("JamesBond")//должен вернутьсяNaN
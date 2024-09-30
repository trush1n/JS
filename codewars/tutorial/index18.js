function splitAndMerge(string, separator) {
    let words = []
    let words1 = []
    if (separator == " ") {
        for (let i = 0; i < string.length; i++) {
            words1 += string[i] + " "
        }
    } else if (separator == "") {
        for (let i = 0; i < string.length; i++) {
            if (string[i] == " ") {
                words1 += ""
            } else { }
            words1 += string[i]
        }
    }

    else {

        words = (string.split("").join(separator))

        for (let i = 0; i < words.length; i++) {

            if (words[i] == separator && words[i + 1] == " " && words[i + 2] == separator) {
                words1 += "";

            } else if (words[i] == separator && words[i - 1] == " ") {
                words1 += ""
            }
            else {
                words1 += words[i];
            }
        }

    }
    return words1;
}
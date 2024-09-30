function splitAndMerge(string, separator) {
    let words = []
    let words1 = []
    if (separator == " ") {
        words = (string.split(" ").join(""))
             words1 = (words.split("").join(" "))
       
           
      } else if  (separator == "") {
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
    console.log(words1);
}

splitAndMerge("My name is John"," ")// , "M y n a m e i s J o h n");
splitAndMerge("My name is John","-") , "M-y n-a-m-e i-s J-o-h-n");
splitAndMerge("Hello World!",".") , "H.e.l.l.o W.o.r.l.d.!");
splitAndMerge("Hello World!",",") , "H,e,l,l,o W,o,r,l,d,!");
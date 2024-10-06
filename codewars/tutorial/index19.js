function alienLanguage(str) {

    let words = str.toUpperCase().split(" ")

    for (let i = 0; i < words.length; i++) {

        words[i] = words[i].substring(words[i], words[i].length - 1) + words[i][words[i].length - 1].toLowerCase().substring(0, words[i].length - 1);

    }

    console.log(words.join(" "))

}

alienLanguage("My name is John")// , "My NAMe Is JOHn");

alienLanguage("this is an example")// , "THIs Is An EXAMPLe");

alienLanguage("Hello World")// , "HELLo WORLd");

alienLanguage("HELLO WORLD")// , "HELLo WORLd");
function remove(string) {
    let i = 1;
    let count = 0;
    while (string[string.length - i] == "!") {
      count += 1;
      i++;
    }
    let noStringLast  = "";
    for (let j = 0; j < string.length - count; j++) {
      noStringLast += string[j];
    }
    console.log(noStringLast)
  }


  remove("Hi!")//, "Hi")
  remove("Hi!!!")//, "Hi")
  remove("!Hi")//, "!Hi")
  remove("!Hi!")//, "!Hi")
  remove("Hi! Hi!")//, "Hi! Hi")
  remove("Hi")//, "Hi")

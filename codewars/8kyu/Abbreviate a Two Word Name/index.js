function abbrevName(name) {
    let initials = "";
    name.split(" ")
    initials = name[0] + "."

    for (let i = 0; i < name.length; i++) {
        if (name[i] == " ") {
            let letter = +[i] + 1;
            initials += name[letter]
        }

    }



    return initials.toUpperCase()

}




abbrevName("Sam Harris")//, "S.H");
abbrevName("Patrick Feenan")//, "P.F");
abbrevName("Evan Cole")//, "E.C");
abbrevName("P Favuzzi")//, "P.F");
abbrevName("David Mendieta")//, "D.M");

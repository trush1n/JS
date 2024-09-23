function grabDoll(dolls){
    var bag=[];
    for (let i = 0; i< dolls.length; i++) {
    if (bag.length ==3) {
        break;
    } if (dolls[i]=="Hello Kitty"||dolls[i]=="Barbie doll") {
       bag.push(dolls[i]);}
       continue;
    

  
}
console.log(bag)
}



    //grabDoll(["Mickey Mouse","Hello Kitty","Snow white"])//,["Hello Kitty"]);
    //grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"])//,["Hello Kitty","Hello Kitty"]);
    //grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"])//,["Hello Kitty","Hello Kitty","Barbie doll"]);
    grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"])//,["Barbie doll","Hello Kitty","Hello Kitty"]);
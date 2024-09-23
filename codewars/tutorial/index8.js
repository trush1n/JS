function howManydays(month){
    var days;
    switch (month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: 
    days=31;
      break;
    case 2: 
      days=28;
      break;
    default:
    days=30
      break;
    }
    console.log(days);
  }
  howManydays(1)//,31);
  howManydays(2)//,28);
  howManydays(3)//,31);
  howManydays(12)//,31);
  howManydays(4)//,30);
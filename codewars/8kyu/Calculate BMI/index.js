function bmi(weight, height) {
    let res = weight / height ** 2
    if (res <= 18.5) {
      return "Underweight"
    } else if (res <= 25) {
      return "Normal"
    } else if (res <= 30.0) {
      return "Overweight"
    } else {
      return "Obese"
    }
  
  }


  bmi(50, 1.80)//, "Underweight", "For weight = 50 and height = 1.80");
  bmi(80, 1.80)//, "Normal", "For weight = 80 and height = 1.80");
  bmi(90, 1.80)//, "Overweight", "For weight = 90 and height = 1.80");
  bmi(100, 1.80)//, "Obese", "For weight = 100 and height = 1.80");

const bonusTime = (salary, bonus) => bonus ? '£' + salary * 10 : '£' + salary;



bonusTime(10000, true)//, '£100000');
bonusTime(25000, true)//, '£250000');
bonusTime(10000, false)//, '£10000');
bonusTime(60000, false)//, '£60000');
bonusTime(2, true)///, '£20');
bonusTime(78, false)//, '£78');
bonusTime(67890, true)//, '£678900');
function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }

  buildString('Cheese','Milk','Chocolate')//, 'I like Cheese, Milk, Chocolate!', 'Return the correct String');
  buildString('Cheese','Milk')//, 'I like Cheese, Milk!', 'Return the correct String');
  buildString('Chocolate')//, 'I like Chocolate!', 'Return the correct String');
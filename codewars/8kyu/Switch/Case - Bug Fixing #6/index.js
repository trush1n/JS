function evalObject(value) {
    var result = 0;
    switch (value.operation) {
        case '+': result = value.a + value.b
            break;
        case '-': result = value.a - value.b
            break;
        case '/': result = value.a / value.b
            break;
        case '*': result = value.a * value.b
            break;

        case '%': result = value.a % value.b
            break;

        case '^': result = Math.pow(value.a, value.b)
            break;
        default: "";
    }
    return result;
}


evalObject({a:1,b:1,operation:'+'})//, 2, 'Return the evaluated string as a number!');
evalObject({a:1,b:1,operation:'-'})//, 0, 'Return the evaluated string as a number!');
evalObject({a:1,b:1,operation:'/'})//, 1, 'Return the evaluated string as a number!');
evalObject({a:1,b:1,operation:'*'})//, 1, 'Return the evaluated string as a number!');
evalObject({a:1,b:1,operation:'%'})//, 0, 'Return the evaluated string as a number!');
evalObject({a:1,b:1,operation:'^'})//, 1, 'Return the evaluated string as a number!');
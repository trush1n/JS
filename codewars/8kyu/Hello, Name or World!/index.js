function hello(name) {
    if (name == "" || name == undefined) {
      return 'Hello, World!';
    } else {
      return "Hello, " + name[0].toUpperCase() + name.toLowerCase().slice(1) + "!";
    }
  
  }

hello('alice')//, 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'");
  hello()//, 'Hello, World!', "returns 'Hello, World!' when name is not given");
  hello('')//, 'Hello, World!', "returns 'Hello, World!' when name is an empty string")
function printArray(array){

    return array.join();
  }


  const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
var data = [2,4,5,2];
Test.expect( printArray( data ) ==
  "2,4,5,2", "int test failed" )
  });
});
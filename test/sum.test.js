const assert = require("chai").assert;
const fnSum = require("../sum");

describe("Sum",function(){

it("Should return correct sum of 3 + 4",function(){

var sum = fnSum(3,4);
assert.equal(7,sum);


})




})
const capitalize = require("./capitalize");
const reverseString = require("./reverse");
import calculator from "./calculator";

let calc = calculator();


it("capitalize string", () => {
  expect(capitalize("test")).toEqual("Test");
});

it("reverse string", () => {
  expect(reverseString("yes")).toBe("sey");
});

it("add two numbers", () => {
  expect(calc.add(2,1)).toEqual(3);
});

it("divide two numbers", () => {
  expect(calc.divide(2,1)).toEqual(2);
});

it("subtract two numbers", () => {
  expect(calc.subtract(2,1)).toEqual(1);
});

it("multiply two numbers", () => {
  expect(calc.multiply(2,1)).toEqual(2);
});

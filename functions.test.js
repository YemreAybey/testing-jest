const capitalize = require("./capitalize");
const reverseString = require("./reverse")


it("capitalize string", () => {
  expect(capitalize("test")).toEqual("Test");
});

it("reverse string", () => {
  expect(reverseString("yes")).toBe("sey");
});
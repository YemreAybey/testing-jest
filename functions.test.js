const capitalize = require("./capitalize");


it("capitalize string", () => {
  expect(capitalize("test")).toEqual("Test");
});

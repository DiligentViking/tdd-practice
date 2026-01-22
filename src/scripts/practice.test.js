const { capitalize, reverseString } = require("./practice.js");

test("capitalizes one-character string", () => {
  expect(capitalize("d")).toBe("D");
});
test("works with strings with multiple characters", () => {
  expect(capitalize("alfalfa")).toBe("Alfalfa");
});
test("works with strings with weird characters", () => {
  expect(capitalize("e!f 23h9h*#(")).toBe("E!f 23h9h*#(");
});

test("works on string with one char", () => {
  expect(reverseString("Z")).toBe("Z");
});
test("works on string of multiple chars", () => {
  expect(reverseString("AZ")).toBe("ZA");
});
test("works on string of special chars", () => {
  expect(reverseString("Urbain :)")).toBe("): niabrU");
});

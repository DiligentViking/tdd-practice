const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} = require("./practice.js");

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

test("31 + -41 = -10", () => {
  expect(calculator().add(31, -41)).toBe(-10);
});
test("1000000000 - 800000000 = 200000000", () => {
  expect(calculator().sub(1000000000, 800000000)).toBe(200000000);
});
test("-5.1 * 28 = -142.8", () => {
  expect(calculator().mul(-5.1, 28)).toBeCloseTo(-142.8);
});
test("7 / 11 = 0.6363...", () => {
  expect(calculator().div(7, 11)).toBeCloseTo(0.6363);
});

test("shifts one-char string", () => {
  expect(caesarCipher("h", 1)).toBe("i");
});
test("shifts multi-char string", () => {
  expect(caesarCipher("ace", 6)).toBe("gik");
});
test("wraps shift across z-a", () => {
  expect(caesarCipher("yza", 1)).toBe("zab");
});
test("preserves letter case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});
test("accepts special chars", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

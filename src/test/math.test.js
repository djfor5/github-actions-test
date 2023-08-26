const {
  add,
  subtract,
  multiply,
  divide,
} = require("../math.js");

/* eslint-disable no-undef */

test("Expect 2 + 3 = 5", () => {
  expect(add(2, 3)).toEqual(5);
  // throw new Error("Test forced to fail");
});

test("Expect 5 - 2 = 3", () => {
  expect(subtract(5, 2)).toEqual(3);
});

test("Expect 2 * 3 = 6", () => {
  expect(multiply(2, 3)).toEqual(6);
});

test("Expect 6 / 3 = 2", () => {
  expect(divide(6, 3)).toEqual(2);
});

/* eslint-enable no-undef */
